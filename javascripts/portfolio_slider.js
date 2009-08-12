$(function() {		
	$("div.scrollable").scrollable({
	  interval: 4000,
		size: 1,
		loop: true, 
		speed: 1000,
		onBeforeSeek: function() {
			this.getItems().fadeTo(500, .8);		
		},
		onSeek: function() {
			this.getItems().fadeTo(500, 1);
		}
	});	
});


