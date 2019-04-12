---
title: San Francisco Building Explorer
date: "2018-11-01"
layout: post
draft: false
path: "/projects/sf-building-explorer"
category: "Interactive"
tags:
  - "Visualization"
  - "Mapping"
  - "APIs"
description: "The San Francisco Building Explorer is a demonstration application showing how to integrate various open datasets about buildings."
image: ./buildingexplorer.png
image_alt: "Screenshot of SF Building Explorer Web App"
links:
  -
    title: Website
    link: https://datasf.org/sf-building-explorer
  -
    title: Github
    link: https://github.com/datasf/sf-building-explorer
  -
    title: Blog Post
    link: https://datasf.org/blog/new-sf-building-footprints-released-with-3d-characteristics/
---

## Project goals

In May of 2017, [new building footprints were released to the open data portal](https://datasf.org/blog/new-sf-building-footprints-released-with-3d-characteristics/). To help showcase the release, we wanted to build a simple demonstration app that:

1. Visualized the usage of the 3D attributes derived from LiDAR
2. Demonstrated linking data from other open data APIs
3. Provided transparent, open source code so others could be inspired
4. Was easy enough to deploy locally and poke around without a lot of tooling or special knowledge of frameworks

## Approach

I placed emphasis on keeping code dependencies small using minimal libraries and no frameworks. It's a Javascript/CSS/HTML site with a single index.html. Ultimately, we wanted to develop an MVP, not a full-fledged application. 

I also wanted someone to pick through the code and build understanding of what's happening without having to understand a particular framework.

While I would not consider the codebase best practice, it meets the need and has provided people with a reference application for other purposes. For example, querying open data APIs in a frontend application.

This approach is inspired by Mapbox code examples, albeit a bit more involved.

## Outcomes & Lessons

1. Demonstrated what an "MVP" can look like to City staff and leadership in terms of time spent and deliverable
2. Used as a reference application when people want to understand how to incorporate open data API queries in their web app
3. Surfaced data quality issues in datasets that informed the data standards handbook
4. Worked out patterns that could be used if iterated into a more robust application

## Technology involved

- [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js)
- [Turf.js](https://github.com/Turfjs/turf)
- [Wellknown](https://github.com/mapbox/wellknown)
- Vanilla JS
- HTML
- CSS

## Out in the world

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The <a href="https://twitter.com/DataSF?ref_src=twsrc%5Etfw">@DataSF</a> team continues to impress. Check out this amazing SF building explorer! <a href="https://t.co/ZIG2Mo0cUx">https://t.co/ZIG2Mo0cUx</a></p>&mdash; Steven Buss 🥑 🌐 (@sbuss) <a href="https://twitter.com/sbuss/status/1054502500257062912?ref_src=twsrc%5Etfw">October 22, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Boom. Huge release from <a href="https://twitter.com/DataSF?ref_src=twsrc%5Etfw">@DataSF</a>! Individual building data...nice, clean &amp; organized...in 3D....at your fingertips 🏢🚀 <a href="https://t.co/m0WfplFEg6">https://t.co/m0WfplFEg6</a></p>&mdash; #civicinnovation (@SFMOCI) <a href="https://twitter.com/SFMOCI/status/870116371891314689?ref_src=twsrc%5Etfw">June 1, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
