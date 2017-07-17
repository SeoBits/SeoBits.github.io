{
	var menubar = document.getElementById("menu-bar");
	var menuselector = document.getElementById("menu-selector");
	menubar.addEventListener("mouseover", moveHoverBar);
	menubar.addEventListener("mouseleave", removeHoverBar);
	var currentSelection = null;

	function moveHoverBar(e){
		var currentElement = e.target.closest("li");
		if(currentElement != null){
			if(currentSelection != currentElement){
				currentSelection = currentElement;
				var targetBoundingBox = e.target.getBoundingClientRect();
				var parentMenu = e.target.offsetParent;
				var localLeft = e.target.offsetLeft;
				var globalLeft = parentMenu.getBoundingClientRect().left;

				menuselector.style.opacity = 0.3;
				menuselector.style.transform = "scale(1, 1)";
				menuselector.style.left = (globalLeft + localLeft - 10) + "px";
				menuselector.style.width = (targetBoundingBox.width + 20)+ "px";
			}
		}
	}

	function removeHoverBar(e){
		var selectorBoundingBox = menuselector.getBoundingClientRect();
		menuselector.style.opacity = 0;
		menuselector.style.transform = "scale(2, 2)";
		currentSelection = null;
	}
}