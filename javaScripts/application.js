window.onload = () {

	var navs = document.querySelector('.blog-nav-item');
	var anchors = navs.getElementsByTagName('a');

	for (var i = 0; i < anchors.length; i += 1) {
	  anchors[i].addEventListener('click', function() { clickHandler(anchors[i]) }, false);
	}

	function clickHandler(anchor) {
	  var hasClass = anchor.getAttribute('class');
	  if (hasClass !== 'active') {
	    anchor.setAttribute('class', 'active');
	  }
	}
}

