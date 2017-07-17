{

	function scaleCards(xScale, yScale){
		this.style.transition = "transform 200ms";
		this.style.transformOrigin = "50% 50%";
		this.style.transform = "scale("+ xScale +", "+ yScale +")";
	}

	var cards = document.getElementsByClassName("card");
	for(var indexCard = 0; indexCard < cards.length; indexCard++){
		cards[indexCard].style.transitionDelay = (100 * indexCard) + "ms";
		cards[indexCard].style.transform = "rotateY(360deg)";
		cards[indexCard].addEventListener("mouseover", function(){
			scaleCards.call(this, 1.2, 1.2);
		});

		cards[indexCard].addEventListener("mouseleave", function(){
			scaleCards.call(this, 1, 1);
		});
	}
}