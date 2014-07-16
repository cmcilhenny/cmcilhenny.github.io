---
layout: post
title: JavaScript Prototypes
summary: Recently I was asked to give a 15 minute lesson on JavaScript Prototypes. In 15 minutes I needed to explain this complicated idea to students who had just learned JavaScript. Tricky. Here is the attempt.
---

Recently I was asked to give a 15 minute lesson on JavaScript Prototypes. In 15 minutes I needed to explain this complicated idea to students who had just learned JavaScript. Tricky. Here is the attempt.

#JavaScript Prototypes

The following assumes some very basic understanding of JavaScript. It is good to remember that JavaScript is an interpreted, object-based scripting language that is primarily used for creating dynamic, interactive features on a webpage. Some say it is the language of the future!

JavaScript uses prototypes instead of classes to define and create objects. What does this mean? Let us first talk about some stuff like **JavaScript Objects** (what they are and where they come from) and **Object Oriented Programing**. Once we have some understanding of objects in JavaScript and the basics of Object Oriented Programming down, we can discuss the meat of **Prototypes in JavaScript**.

###Object-Oriented Programming (OOP) and why it is awesome:

Object Oriented Programming, often referred to as OOP is really just a design philosophy. In the context of software, OOP uses a collection of objects, as opposed to a collection of functions, or a list of instructions to the computer. In OOP, each object can receive messages, process data, and send messages to other objects. Each object can be viewed as an independent little machine with a distinct role or responsibility.

**A Practical Example of OOP**

	Take your `hand` as an example. The `hand` is a class (Ruby) or a prototype (JavaScript). Your body has two objects of type hand, named left hand and right hand. Their main functions are controlled/ managed by a set of electrical signals sent through your shoulders (through an interface). So the shoulder is an interface which your body uses to interact with your hands. The hand is a class/prototype. The hand is being re-used to create the left hand and the right hand by slightly changing the properties of it.

Object-oriented programming helps with greater flexibility in programming. Object oriented code is meant to be more simple to develop and easier to understand later on. 


###Objects in JavaScript
JavaScript objects are collections of properties and methods. 

What is a method? 

	A method is a function that is a member of an object. I like to think of this like a job. A function is a job that an object has to do at an appropriate time. 

What is a property?

	A property is a value or set of values (in the form of an array or object) that is a member of an object. 
	
What does this look like in JavaScript?

	{% highlight javascript %}
	// defining an object in JavaScript: myObj
	var myObj = new Object();
	
	// setting two properties on the object: name & age
	myObj.name = "Fred";
	myObj.age = 42;

	// defining a function on the object: getAge
	myObj.getAge = 
    function () {
        return this.age;
    };

   {% endhighlight %}

EXERCISE 1: Define an object that has its own property and method. 

###Creating Objects
You can create your own objects in Javascript a few different ways:

* Use object literal notation to define an object.
* Directly instantiate an Object and add your own properties and methods
* Use a constructor function to define an object.

Here are some examples of what this looks like:

**Object Literal notation**

	var spaghetti = { 
		grain: "wheat", 
		width: 0.5, 
		shape: "round"
	};

**Directly Instantiating an Object**

	var spaghetti = new Pasta();
	
	spaghetti.grain = "wheat";
	spaghetti.width = 0.5;
	spaghetti.shape = "round";
	spaghetti.getShape = function() { 
    	return this.shape; 
	};

	
**Using a Constructor Function**

	//defining the custom constructor function:
	function Pasta (grain, width, shape) {
		this.grain = grain;
		this.width = width;
		this.shape = shape;
	};
	
	//creating a pasta object:
	var myPasta = new Pasta("wheat", 0.5, "round");
	
DISCUSSION: 

* What about:
	`var pasta = { grain: "wheat", width: 0.5, shape: "round"};`
* What is going on with `pasta.grain`?
* What is going on with `this.grain`?

EXERCISE 2: 

* Rewrite your object from exercise 1 using a constructor function.
* Add the property shape to your object.

### Before moving on, make sure you feel comfortable with Objects in JavaScript. They are important!

##Prototypes
A prototype is a property of functions and of objects that are created by constructor functions! The prototype of a function is an object. Its main use is when a function is used as a constructor. What does this mean?!?

Look at our Pasta Object that we creating using a constructor function:


	function Pasta (grain, width, shape) {
		this.grain = grain;
		this.width = width;
		this.shape = shape;
	};

Technically speaking, the prototype of the Pasta function is the prototype of any object that is instantiated with the Pasta constructor. 

##Using Prototypes
You can use the prototype property to add properties and methods to objects (even if an object is already created!).

	var favoritePasta = new Pasta("Squid Ink", 0.5, "Cavatoppi");
	Pasta.prototype.color = "black";
	var color = favoritePasta.color;
	
	//console.log(color) and you will get "black"!
	//console.log(Pasta) and you see the Pasta object isn't changed!
	
You can use the prototype object to derive one object from another! For example, using the Object.create function, you can make a new object called Gnocchi using the prototype of the Pasta object we created (plus you can add any new properties you need!).

	var Gnocchi = Object.create(Pasta), {
	"texture" :{value: true}
	});

Question: What properties does Gnocchi have?

Make some more objects that relate to Pasta:

	var Spaghetti = Object.create(Pasta);
	
	**OR**
	
	var Spaghetti = Object.create(Object.getPrototypeOf(Gnocchi));
	
Question: What is the difference of the two above Spaghetti objects?

##The Prototype Chain/Prototype Inheritance
Every object in Javascript has a prototype. When a messages reaches an object, JavaScript will attempt to find a property in that object first, if it cannot find it then the message will be sent to the objects prototype and so on. This works just like single parent inheritance in a class based language.

Map out the Prototype Chain for Gnocchi together. Here is a nifty drawing for our reference: 

<img src="https://docs.google.com/drawings/d/1NdiIkHd9Cg2j6W4QcJ1X3DEhGXD2gacMXRuURcoE5T4/pub?w=960&h=720"/> 

That was soo confusing, but easy! 

EXERCISE 3: Map out the Prototype Chain for your object from exercise 1 & 2.

## Some Definitions

**`Pasta.prototype` != `Pasta.__proto__`**

The `prototype` property above for pasta is different from `__proto__`. 

**`Pasta.prototype`**

Every function in JavaScript has a special property called `prototype`. This property points to the object that a new instance of the object would inherit properties from. Essentially this means that `prototype` points to the future. We actually used this when setting the color of Squid Ink pasta as black!

**`Pasta.__proto__`**

`.__proto__` references inheritance through the prototype chain. So, `Spaghetti.__proto__` = Pasta. Essentially this means that `.__proto__` is pointing to the past.

## Lets get Cooking!
Now that we have some basics, lets play around with all this. You can build your own objects with inheritance of follow along below:

Working in the console:


	function Pasta (grain, width, shape) {
		this.grain = grain;
		this.width = width;
		this.shape = shape;
	};
	
	//next make a new pasta called spaghetti:
	var spaghetti = new Pasta('wheat', 2, 'long');
	
	//take a look at your new spaghetti object in the console:
	console.log(spaghetti)
	
	//check out what happens when you call .__proto__ and prototype on spaghetti:
	spaghetti.prototype
	spaghetti.__proto__


Question: What does `spaghetti.prototype` return and why? What about `Pasta.prototype`? Or `spaghetti.__proto__`?

	// let's keep making pastas!
	var linguini = new Pasta('spinach', 0.5, 'flat');
	
	//take a look at your linguini
	console.log(linguini)
	
	//checkout .__proto__ and .prototype
	linguini.prototype
	linguini.__proto__
	
Question: Compare linguini to spaghetti.

	//let's really get cooking by adding some functions: boil & eat!
	Pasta.prototype.boil = function() {
		console.log("Boiling....")
	};
	
	Pasta.prototype.eating = function() {
		console.log("Eating....")
	};
	
	//try boiling some spaghetti
	spaghetti.boil
	
Discussion: What is Pasta.prototype? It is a reference to the object that a new pasta would inherit its properties from. 

	
	//let's keep making things...
	var fusilli = Object.create(spaghetti);
	
	//what properties does fusilli inherit? How do fusilli's properties differ from spaghetti and linguini?
	console.log(fusilli);
	
	//let's look at fusilli's .prototype and .__proto__
	fusilli.prototype
	fusilli.__proto__

	
