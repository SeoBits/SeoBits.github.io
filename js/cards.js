{
	var cards

	cards = document.getElementsByClassName("card");
	for(var indexCard = 0; indexCard < cards.length; indexCard++){
		cards[indexCard].style.transitionDelay = (100 * indexCard) + "ms";
		cards[indexCard].style.transform = "rotateY(360deg)";
		cards[indexCard].addEventListener("mouseover", function(e){
			this.style.transition = "transform 200ms";
			this.style.transform = "scale(1.25, 1.25)";
		});

		cards[indexCard].addEventListener("mouseleave", function(e){
			this.style.transform = "scale(1, 1)";
		});
	}
}