---
layout: post
title: Moustache Madness: Mixing Angular with Jekyll
summary: How to hack together Angular and Jekyll.
---

When starting this site, I decided that I wanted to incorporate AngularJS as a front-end framework. It was the perfect solution to the "color-block" styling for listing out my blog posts and projects.

Angular and Jekyll both use `double-curlies` for binding, though. I think this can be called 'moustache madness'. A really nice, quick fix is to utilise Angular's interpolateProvider and create a distinct symbol for your two-way binding in Angular. Here is it: 

	angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }