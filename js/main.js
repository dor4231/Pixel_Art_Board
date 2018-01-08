$(document).ready(function() {
	
	var selected_color = "#000000"
	var isDown = false;
	
	toSquare = function(element) {
		width = element.css("width");
		element.css("height", width);
	}
	
	// Page initiolazing!
	page_init = function() {
		toSquare($(".color"));
		toSquare($(".pixel"));
		color_array = $(".color");
		color_array.each(function() {
			$(this).css("background-color", $(this).attr("id"));
		})
	}
	
	create_canvas = function(width, height) {
		pixels_to_create = width * height;
		pixels_width = 1 / width * 100;
		
		for(var i = 0; i < pixels_to_create; i++) {
			$("#canvas").append("<div class='pixel'></div>")
		}
		$(".pixel").css("width", pixels_width + "%");
		page_init()
	}
	
	
	// Main:
	page_init()
	create_canvas(100, 50);
	
	
	
	// Event Listeners:
	$( window ).resize(function() {
		page_init();
	});
	
	$(".color").click(function() {
		$(".color").removeClass("selected");
		$( this ).addClass("selected");
		selected_color = $( this ).attr("id");
	});
	
	$(".pixel").mousedown(function(){
		isDown = true;
		console.log(isDown);
	});
	
	$(document).mouseup(function(){
		isDown = false;
	});
	
	$(".pixel").hover(function(){
		if(isDown){
			console.log("Pinating!")
			$( this ).css("background-color", selected_color);
		}
	});
	
	$("#create").click(function(){
		$(".form").hide();
	});
});