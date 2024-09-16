---
title: Working with Angular Signals
description: Trying out a new feature in Angular
tags: post
date: 2024-09-16
layout: layouts/post.liquid
---

I started using [signals](https://angular.dev/guide/signals) in the front end of my game project. Signals are a feature in Angular that is used for state management, and they were added to Angular in Version 16, so they are a relatively new feature in Angular.  So far, I have been enjoying working with them.

In my previous position, we used [NGXS](https://www.ngxs.io/) for state management.  It worked fine, but there was some boilerplate you had to do to work with it.  Once you installed they library, you had to update a module file to include NGXS, then you had to create a actions.ts file and a state.ts that described how your state management system works. Then you trigger actions and query state from your components.

Getting started with signals was a lot simpler.  I justed needed to import signals from the Angular core library and then I could start using them in my components.

For my game project, I wanted to add both front end state management and backend saving of data to a portion of my app I call the Basic Combat Test Page.  This page contains a 2 dimensional grid that all the possible positions a character could occupy.  For example, there could be a 10 x 10 grid of squares and the player character is in position (0, 0) (top left corner of the grid by the convention I chose).

I started by just hard coding the character's position into the front end code.  Then I added the functionality to select a character, tell it to move to a new square, and update the database. Once that was done, I was able to replace my hard coded values with stateful values using Signals.  It was pretty easy to replace and I did not have to do any major refactoring to get signals to work.

I ended up declaring these as my signals for the page:
```js
  public currentBattle = signal<Battle | null>(null)
  public battleLoaded = computed(() => this.currentBattle() !== null)

  public characters = signal<Character[]>([]);
  public characterPosition = computed<{xPosition: number, yPosition: number} | null>(() => {
    const character = this.characters().find(pc => pc.name === "Test Character");
    if (character === undefined) {
      return null;
    }
    return {xPosition: character.xPosition, yPosition: character.yPosition}
  });
  public enemy = computed<Character | null>(() => {
    const character = this.characters().find(pc => pc.name === "Test Enemy");
    if (character === undefined) {
      return null;
    }
    return character;
  });
  public enemyPosition = computed<{xPosition: number, yPosition: number} | null>(() => {
    const character = this.enemy();
    if (character !== null) {
      return {xPosition: character?.xPosition, yPosition: character?.yPosition}
    }
    return null;
  });


  public selectedPosition = signal<{xPosition: number, yPosition: number} | null>(null);
  public characterIsSelected = computed(() => {
    this.selectedPosition()?.xPosition === this.characterPosition()?.xPosition &&
      this.selectedPosition()?.yPosition === this.characterPosition()?.yPosition
  });

  public selectionState = signal<SelectionStates>(SelectionStates.NothingSelected);

  public mapMatrix = computed<MapCell[][]>(() => {
    const selectedXPosition = this.selectedPosition()?.xPosition;
    const selectedYPosition = this.selectedPosition()?.yPosition;
    const characterXPosition = this.characterPosition()?.xPosition;
    const characterYPosition = this.characterPosition()?.xPosition;
    let mapMatrix = new Array(this.map.length);
    for(let i =0; i < this.map.length; i++ ) {
      mapMatrix[i] = new Array(this.map.width);
      for(let j = 0; j < this.map.width; j++) {
        mapMatrix[i][j] = {token: null, image: null, borderClass: null}
        if(selectedXPosition === i && selectedYPosition === j) {
          mapMatrix[i][j].borderClass = 'green-border';
        }
        if(selectedXPosition === characterXPosition && selectedYPosition === characterYPosition && 
          selectedXPosition === i && selectedYPosition === j) {
          mapMatrix[i][j].borderClass = 'red-border';
        }
      }
    }
    this.characters().forEach(character => {  
      mapMatrix[character.xPosition][character.yPosition].image = character.image;
    })
    return mapMatrix;
  }); 
```

So that is about 50 lines of code (in about a 240 line ts file). The Basic Combat Test Page was always meant as a temporary artifact for me to get this functionality working, so I am not worried about the long term maintainability of how I wrote this.  However, if this was something that I had to maintain for a year or something that I had to work on with other people I would probably feel differently.  Maybe I would use some of the patterns in NGXS like having separate files for state and actions. 

For now I will keep using signals and see where that takes me.