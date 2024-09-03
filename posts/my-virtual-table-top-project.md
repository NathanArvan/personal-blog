---
title: My Virtual Table Top project
description: My longest running passion project
tags: post
date: 2024-09-03
layout: layouts/post.liquid
---


My virtual table top project is my longest running personal project. Unlike my blog, which took about 1 week from starting to code to publishing, I have been working on my VTT project for over a year and I have not published anything. Yet the project has still kept my interest after this time.

###  What is a Virtual Table Top?

A Virtual Table Top (VTT going forward) is a tool that allows a group of people to play table top roll playing games digitally instead of through analogue means.  Dungeons and Dragons is this most famous table top role playing game, but it is a genre that has many entries that vary in rules, setting, length of the game among other things.  Some of the most common aspects of TTRPGs are:
 - players control characters (the "role playing" in role playing games) that have abilities to act in the world
 - there is a single player who acts as the "game master" that controls most aspects of the world
 - there is a narrative that will be played out over the course of the campaign
 - there are game mechanics that will determine if the actions that a player takes will succeed or fail (e.g. a player tries to shoot an enemy with a bow, and they roll a dice to see if they hit or not)

 In the days of the original version of Dungeons and Dragons, character information was written in pencil on paper, maps were drawn on gridded paper, and a combination of die rolls and mental math were done to determine the success or failure of outcomes.  The game can still be played that way, but a VTT offers the opportunity to automate parts of that work. 

 A VTT is a similar product to a video game, with one big difference.  The expectation for a video game is that the developers will create a fun experience for that players.  In a VTT the expectation is that the developers will give the players the tools to create a fun experience themselves. 

 ### Why do I want to build a VTT?

 D&D has been a hobby of mine that I have been interested in for a while.  There has definitely been a surge of interested for D&D in the past decade, with properties like Stranger Things, HarmonQuest, and (especially for me) Critical Role bringing new people into the hobby.  After I started watching other people play, I wanted to play myself.  I ran a campaign with my friends, and now I am in a campaign that one of my friends in running (although that is kind of on pause). We have done a few in person sessions, but for most of this time my friends and I lived in different cities so we played on a VTT over the internet.

 When we started out, I used Roll20.  It was popular and had a free tier that gave us what we needed to get started.  There were limitations to what we were able to do on the free tier, like how many images we were allowed to upload, but we made it work.

 I have also purchased FoundryVTT.  I thought my friends and I would keep doing campaigns, but it has gotten a lot harder to get together.  If i were to start a new campaign tomorrow, I would make it in FoundryVTT.

 As I used Roll20 and FoundryVTT, thoughts would pop into my head like "Wouldn't it be cool if I could do this..." or "Wouldn't it be convenient if these items were organized that way...".  As a web developer, I can think through how I would implement my ideas and opinions. Being able to work on a project in a domain I am interested in a can express a bit of creativity is appealing to me.  (Even if I have already bought a perfectly fine commercial alterative).

 ### Previous Attempt

 The current code base is not my first attempt at this project. You can see that attempt here.  In that attempt, I tried to write the backend in javascript using the express.js framework.  My current attempt is written in C# using the .Net framework. Express.js is a very light weight and unopinionated framework.  When I started my previous attempt, I did not have enough experience to architect a backend app that connections to a database, does restful http requests, and does websockets.  I was making slow progress and got more frustrated over time. Eventually I gave up on that attempt.

 In my most recent job, I was able to get more backend and database experience, as well as experience with the CF# and .Net technologies.  While working there I started my current attempt at this project.  I figured using the technologies I was learning at work would make this project more likely to be successful and practicing using the technologies I used at work would make my job easier.  I have had periods where I felt my current attempt is going slowly, but I have not had the urge to start over yet.

 ### The state so far

 So what do I have to show for what I have worked on so far?

 I have thought of some "entities" that would be useful to model when designing a software system for a VTT. They are:

  - Campaigns
  - Maps
  - Tokens
  - Characters
  - Items
  - Abilities
  - Classes
  - and Users

I can run a local front end web application, backend web application, and database application locally.  I have the ability to create, read, update, and delete instances of the entities I have defined.

There is the functionality for a user to upload an image and save that image as part of a token they create and then display that image in the browser when the token is requested.

I recently experimented with the PhaserJs game engine library to see if that had useful code abstractions I could use, instead of making things myself in web application frameworks.

### What I am working on now

One strategy I have for working on this project is I will brainstorm all the things I want to do for this project, think through what order it makes sense to do those things in, and come up with chunks of work that I will work focus on and work on those items till I am done.

Here is the functionality in my current iteration of work:

 As a user, I have the ability to select my character, see the abilities my character has, select an enemy to attack and ability to use, and see the consequences of that action. 

 Also 

 As a user, I can select my character, tell them to move to a new square on the map, the game will validate if that is a valid move, and then the character will move to that square.

###  Imaging Issues

One big point of friction of the project this year is working with images.  There are a lot of different aspect of dealing with images in a VTT system, and when I spend time working on one aspect, I end up putting a lot of thought into the other aspects of the system.

Some of the big things are:

 - Where and how to save the images
 - How to send images between the front end and backend web applications
 - How am I going to render different kings of images (tokens, maps) on the page
 - How to I enable a user to pick an image for their token

 I decided to very narrowly focus the scope of what I am going to consider for images.  For now I am only going to deal with pre-generated image assets that are saved in the front end application.  That means I don't have to worry about 3/4 of the questions above for a while and doing my current iteration of work seems pretty straight forward now.

 ### Future plans

 Here is a list of what I think could be the themes of the next few iterations that I do:

  - add turn tracking functionality to the game
  - add websocket functionality to support multiple players
  - adding logic about which user is allowed to control which characters
  - deploying the applications to a remote server and the game being accessible via url

### Investments / Expectations

This project has had some periods where I worked on it on the weekend a few weeks in a row and then some periods where I don't work on it for a month or two.  At this rate it will be years before I would want to play a game on this system.  A VTT is a large scoped project with commercially successful ones being worked on by teams of people.  That said I am happy about the time work I have put into this project. I think it has helped make me a better software engineer and I enjoyed it.

I was laid off a month and a half ago so I am not sure how that will affect this project.  I'm not writing code at work these days so I can see myself spending more time on this project.  On the other hand, I am working on a job search and hoping to get a new job soon so that is where a lot of my attention is.  

One optimistic note, I expect to keep getting better as an engineer going forward and therefore I expect in the future I can do more for the same amount of effort I am putting in now. Maybe as I learn more I will reduce the scope of this project and try to make a small size video games instead of a full VTT.  For now I am going to keep working on this project.