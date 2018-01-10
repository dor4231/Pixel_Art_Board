$(document).ready(function() {
	
	var selected_color = "#000000"
	var isDown = false;
	var showing = false;
	
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
	
	
	
	
	// Event Listeners:
	$( window ).resize(function() {
		page_init();
	});
	
	$("#color-stack").on("click", ".color", function() {
		$(".color").removeClass("selected");
		$( this ).addClass("selected");
		selected_color = $( this ).attr("id");
	});
	
	$("#canvas").on("mousedown", ".pixel", function(){
		isDown = true;
		console.log(isDown);
	});
	
	$(document).mouseup(function(){
		isDown = false;
	});
	
	$("#canvas").on("mouseover", ".pixel", function(){
		if(isDown){
			console.log("Pinating!")
			$( this ).css("background-color", selected_color);
		}
	});
	
	$("#canvas").on("click", ".pixel", function(){
		console.log("Pinating!")
		$( this ).css("background-color", selected_color);
	});
	
	$("#create").click(function( event ) {
		event.preventDefault();
		dementions = document.getElementById("myForm").elements
		console.log();
		create_canvas(dementions[0].value, dementions[1].value);
		$(".form").hide();
	});
	
	$("#addColorPanel").on("click", function(event){
		if (!showing) {
			showing = true;
			$("#colorPicker").show();
			$("#colorPicker").css("top", event.clientY - 150);
			$("#colorPicker").css("left", event.clientX);
			$("#colorPicker").addClass("pop_up");
			console.log($("#colorPicker").attr("class"))
			selected_color = "#666";
			
			mouse_position = []
			$(".popup").css("top", event.clientX);
			$(".popup").css("bottom", event.clientY);
		}else {
			showing = false;
			$("#colorPickerValue").val();
			$("#colorPicker").hide();
		}
	});
	
	$("#addColor").click(function() {
		$("#color-stack").append('<div class="color" id="' + $('#colorPickerValue').val() + '"></div>');
		page_init();
	});
	
	$("#useColor").click(function() {
		selected_color = $("#colorPickerValue").val();
	});
	
	
});