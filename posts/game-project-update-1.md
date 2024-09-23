---
title: Game Project Update 1
description: Adding multiplayer functionality
tags: post
date: 2024-09-23
layout: layouts/post.liquid
---

I have finished the work items I mentioned [in this post](https://nathanarvan.dev/posts/my-virtual-table-top-project). 

Now I want to figure out the technology and software patterns that I will use to support the multiplayer aspects of this game.

### New Features

Building on top of my previous work here is the new functionality I want to add

- As a user, I can create an account or log into my existing account

- As a user, I can create a character or use the character that has already been created by this user for this battle

- When a character is created, the user picks a class from a list of classes to assign that character

- The UI includes a list of users who are currently in the battle

- When a user joins the battle, the UI for all other users is updated 

- The UI lists the users character, as well as the other player characters and NPCs

- When a user does something that changes the data for a character, that change is broadcast to the other users

### Supporting work

- Build out the user entity and class entity to support the work I have planned

- Add websocket functionality to my frontend and backend applications to support updating other users when one user does something

### Where I need to enforce scope constrains

- I am not going to do any sort of Authentication or Authorization as part of this chunk of work.  Between picking a third part tool, trying to decide who should have permission to do what, and figuring out the best way to implement that Authentication and Authorization could take a bunch of my time. I am going to need to do some Authentication/Authorization by the time I want to release a version of this project to the wider world. It's tempting to try to do that as I am working on other user functionality, but I think it is best to save this for later.

- There are a lot of ways that the real time websocket functionality can get complicated.  If I tried to do things like have comprehensive error handling or handle what happens when  users session ends unexpectedly, I could see myself spending a lot of time on websocket without advancing the project very much.  So I am going to stick to just what I said in the new features list and get that working.  When I have that experience, I think I will be able to make better plans about what to do next for adding multiplayer functionality.