$(document).ready(function(){   

	$('button').on('click', function() {
		var animals = $(this).data('animal');
		var queryURL = "https://api.giphy.com/v1/gifs/search?q= "+ animals + "&api_key=4on7vGlGP0jp0JKGZEwpJgVDBcg6NA5e&limit=10";
		$.ajax({url:queryURL,method:'GET'})
			.done(function(response) {
			for (var i = 0; i < response.data.length; i++){
				var animalDiv = $('<div>');
				var p = $('<p>').text("Rating: "+response.data[i].rating);
				var animalImage = $('<img>');
				animalImage.attr('src', response.data[i].images.fixed_height_still.url);
				animalImage.attr('data-state', 'still');
				animalImage.attr('data-still', response.data[i].images.fixed_height_still.url);
				animalImage.attr('data-animate', response.data[i].images.fixed_height.url);
				animalImage.addClass('anImage')
			

				animalDiv.append(p);
				animalDiv.append(animalImage);
				animalDiv.prependTo($('#gifsGoHere'));
			}
 		});
	});	 
				// $('.anImage').on('click', function() {
				var state = $(this).attr('data-state');
					
				if (state === "still") {
				$(this).attr('src',$(this).attr('data-animate'));
				$(this).attr('data-state','animate');
				}
				else {
				$(this).attr('src', $(this).attr('data-still'));
				$(this).attr('data-state', 'still');
				}
			

				// $("#add-animal").on('click',function(event){
				// event.preventDefault();
				// var newAnimal = $('animal-input').val().trim();
				// animals.push(newAnimal);
				// renderButton();

				// $(document).on("click", "#button", display);
				// }

		

		});


	
	


		
