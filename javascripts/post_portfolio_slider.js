$(function() {		
	$("div.scrollable").scrollable({
		interval: 8000,
		size: 1,
		loop: true, 
		speed: 600,
		onBeforeSeek: function() {
			this.getItems().fadeTo(300, .8);		
		},
		onSeek: function() {
			this.getItems().fadeTo(300, 1);
		}
	});	
});


