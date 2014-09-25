---
layout: post
title: Mixing Angular with Jekyll
summary: How to hack together Angular and Jekyll.
---

Somehow I got my heart set on using Angular on the front end of this site to help with the coloring blocking format for my posts and projects. 

angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }