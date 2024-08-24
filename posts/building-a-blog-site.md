---
title: Building a blog site
description: How I went about creating this blog
tags: post
date: 2024-08-24
layout: layouts/post.liquid
---

### Starting Out

So This is the first post for this blog. Blogging is something that I have been interested in for a while, but I did not get around to doing it earlier. However I was laid off in July; so I find myself with plenty of time on my hands and thoughts in my head.

###  Technology choices

I thought I would give a brief tour of the technologies I chose to create this blog.

I pay attention to the HTML/CSS/JS ecosystem. So even though I have not gone through the process of coding and hosting a blog before, I have a sense of what the popular tools are.  I listened to a podcast with the creator of a blog making toll called [Eleventy](https://www.11ty.dev/) or (11ty). The tool was popular and the creator impressed me with his philosophy on building for the web and developer experience so I wanted to give it a try.

From there, I had to figure out what I needed to have a blogging solution build with eleventy.  After a bit of google searching, I found this [article](https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website)  about making blogs with eleventy using digital ocean as the hosting service. It seemed promising, so I figured I would give it a try.  I wanted both my choice of eleventy as a framework for building the pages of my blog and digital ocean as the hosting service I use to server pages of my blog to be choices I feel good about for a long time.  I has a couple reasons for confidence. Both tools are popular this the web dev ecosystem.  Also they both reference each other in their documentation which gives me confidence that both of these project are trying to grow in a way that is compatible with each other.

I used git (an industry standard versions control tool) to manage the versions of my blog and my account on Github to (big company that offers code related services to developers) to store a [remote repository](https://github.com/NathanArvan/personal-blog) of my codebase.  The [guide](https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website) calls for an integration between digital ocean and github.  When a new version of the code for my blog is pushed to my github account, that triggers digital ocean to pull the latest code for my blog and build a new version of the site with the latest changes.  

The [guide](https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website) also calls for setting up a domain.  I created an account on Squarespace and purchased the domain I wanted nathanarvan.dev.

One other aside about Digital Ocean: I have used other cloud providers before and I like digital ocean better.  I used AWS and Azure at my last job.  I found those platforms hard to use.  They felt they were built for backend/full stack developers who were trying to solve enterprise scale problems (in fairness, that made those tools well suited to the problems that needed to be solved at my job.)  But now that I am doing web development by myself I find that digital ocean is much better at offering solutions in terms I am familiar with and take care of things at the infrastructure level so I can make choices at the application level.

###  Costs

I had to pay a fee to by my domain and I will need to pay a yearly fee in order to renew my ownership of nathanarvan.dev.

As long as I do things correctly, I can update my site an infitite number of times and people can visit my site an infinite number of times and Digital Ocean will charge me nothing. (Hooray static site generators).  We will see if that understanding is correct and if I can do things correctly.

### Set up

For applications/tools on my laptop I installed ( or already had):
 - Visual Studio Code for text editing
 - 1password for password management
 - Firefox for visiting my site and github/digital ocean accounts
 - Git for version management
 - Node, a Javascript runtime and tool for running web servers locally
 - npm, the package manager for node that I used to install eleventy

For online services:
 - I already had a Github account
 - For Digital Ocean, I had to create an account and put my credit card in even though I did not have to pay for anything
 - For Squarespace, I had to create an account and pay for the domain wanted to buy

###  Workflow

I am pretty happy with the workflow I have set up. I can have a local server running my website on my laptop.  I can have vs code in one window and a local version of my website in another window.  When I save a change to the file I am working on in VS code, I can see the change in Firefox in under a second.

The iteration cycle deploying to production is also fast.  When I am happy with what I see locally, I can save that version with git, and then push that version to github triggering  Digital Ocean to build a new version of the site.  It takes under a minute to see a change in my production site after I push a new version of my code.

### What am I hoping to accomplish with this?

Like I said at the top of this post, I was laid off recently.

If you are a hiring manager and you are reading this because I put my blog in the personal site field of your job application portal, please strongly consider hiring me.

Beyond that, I think this blog will be a useful tool for organizing my thoughts and pushing me to try projects I would not have otherwise tried.  We'll see where it goes...