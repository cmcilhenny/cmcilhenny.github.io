---
layout: post
title: Moustache Madness 
summary: How to mix AngularJS and Jekyll's 'double-currlies' and an introduction to Angular's interpolateProvider -- yet another powerful Angular tool!
---
<br>
<br>

When starting this site, I decided that I wanted to incorporate AngularJS as a front-end framework. It was the perfect solution to the "color-block" styling for listing out my blog posts and projects.

Angular and Jekyll both use `double-curlies` for binding, though. I wuold liek to call this phenomenon 'moustache madness'. A really nice, quick fix is to utilise Angular's interpolateProvider and create a distinct symbol for your two-way binding in Angular. Here is it: 

	angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }