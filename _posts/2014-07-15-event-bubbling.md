---
layout: post
title: Event Bubbling 
summary: Event bubbling in JavaScript is a way for objects to detect events from the bottom up. When an event occurs JavaScript triggers that event through each of the parent nodes in the DOM until it reaches the window.
---

<html>
<head>
	<script>
		function load() {
			// grab the bubble elements from the DOM
			var bubbles = document.getElementsByClassName('bubble');
			console.log(bubbles);

			for (var i = 0; i < bubbles.length; i++) {
				// add a click event to the bubble elements
				bubbles[i].onclick = function(event) {
					if (this == event.target) {
						alert('I was clicked!');
						this.style.backgroundColor = 'olive';
					} else {
						alert('One of my inner divs were clicked!');
						this.style.backgroundColor = 'olive';
						this.children[0].style.backgroundColor = 'orange';
					}
				}
			};
			// set up rest button
			var reset = function() {
				for (var i = 0; i < bubbles.length; i++) {
					bubbles[i].style.backgroundColor = 'gray';
				}
			};
			// assign reset to click of button
			document.getElementById('resetBubbles').onclick = reset;
    	
		}
		window.onload = load;

	</script>
	
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
		<style>
		.bubble{
	        background-color: gray; 
	        padding: 20px;
	        border: solid 5px white;
	    }  

	   </style>
</head>
<body>

	<div class="container">
		<div class="col-sm-6 col-sm-offset-2">
			<h2> Event Bubbling! </h2>
		</div>
	</div>

	<!-- Bubble Demo -->
	<div class = "container">
		<div class="row">
			<div class="bubble col-xs-6 col-sm-offset-2">
				<div class="row">
					<div class="bubble col-xs-12">
						<div class="bubble col-xs-12">
							<div class="bubble col-xs-12">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Reset Button -->
	<div class="container">
		<div class="col-sm-6 col-sm-offset-6">
			<button id="resetBubbles" class="btn btn-info">RESET</button>
		</div>
	</div>

</body>
</html>