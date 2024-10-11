---
title: Game Project Update 2
description: User/Character creation and refactoring the front end
tags: post
date: 2024-10-11
layout: layouts/post.liquid
---

### Reflections on the last update

So I did not finish everything I wanted to that I mentioned in my last [post](https://nathanarvan.dev/posts/game-project-update-1).  I have not done anything yet for doing real time updates for character data.  The updates for user data is somewhat working but there are bugs.  I did the supporting work on the backend that I wanted to do: building out the user and class entities and adding realtime functionality using the SignalR library.  I also started using memory caching on the backend to track the current state of a battle which can be communicated with SignalR.

I decided I am going to consider my previous iteration done and I am going to bring the items that I did not complete forward, and make them items that I want to accomplish in this chunk of work. In addition to that, I want to simplify what I was trying to accomplish on the Multiplayer test page by splitting its functionality across two pages.

At this stage of the project, my goal for working on these test pages is to teach myself the technologies and patterns that would be best to make a complete game. I think I can accomplish that faster by reorganizing things on the front end and adding some new functionality, then get everything working, rather than working through all the bugs and then moving on.  So I don't feel like I am cutting corners by starting a new chunk of work before I done with everything I planned in my last update.

With that being said, here is what I want to work on next:

### Work items

- create a page for user/character creation

- users can sign in on multiplayer test page 

- users can add a character they created to a battle on the multiplayer test page

- realtime updates for character data

- realtime updates for user data bugfixes

- more images to distinguish the different classes a character can have

#### Supporting item

- create reuseable components for user and character creation

### Looking to the future

One thing that I have started thinking about is the relationship between short term data that is saved in the memory cache and long term data that is saved in the database.  There is some data that I don't think I will need to save, like the list of current users.  But there are also things like the position of a character on the battle, where that data will live in the cache but it needs to be persisted to the database.  Definitely something that I want to save for future iterations of work instead of trying to tackle now.