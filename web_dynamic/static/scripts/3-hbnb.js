$(document).ready(function () {
	  let amenityIds = {};

	  // Listen for changes on each input checkbox tag
	//   $('input[type="checkbox"]').change(function () {
	//       // ... Existing code to handle amenities checkboxes ...
	//           // Update the h4 tag inside the div Amenities with the list of Amenities checked
	//               const amenitiesList = Object.values(amenityIds).join(', ');
	//                   $('div.Amenities h4').text(amenitiesList);
	//                     });
	//
	//                       // Request places from the API
	//                         $.ajax({
	//                             type: 'POST',
	//                                 url: 'http://0.0.0.0:5001/api/v1/places_search',
	//                                     data: JSON.stringify({}),
	//                                         contentType: 'application/json',
	//                                             success: function (data) {
	//                                                   // Loop into the result of the request and create article tags representing Places
	//                                                         const placesSection = $('section.places');
	//                                                               placesSection.empty(); // Clear existing places
	//
	//                                                                     for (const place of data) {
	//                                                                             const articleTag = $('<article>');
	//                                                                                     articleTag.append($('<div class="title"><h2>' + place.name + '</h2></div>'));
	//                                                                                             articleTag.append($('<div class="price_by_night">$' + place.price_by_night + '</div>'));
	//                                                                                                     articleTag.append($('<div class="information"><div class="max_guest">' + place.max_guest + ' Guest(s)</div><div class="number_rooms">' + place.number_rooms + ' Bedroom(s)</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom(s)</div></div>'));
	//                                                                                                             articleTag.append($('<div class="description">' + place.description + '</div>'));
	//                                                                                                                     placesSection.append(articleTag);
	//                                                                                                                           }
	//                                                                                                                               },
	//                                                                                                                                   error: function (error) {
	//                                                                                                                                         console.log('Error fetching places: ' + error);
	//                                                                                                                                             }
	//                                                                                                                                               });
	//
	//                                                                                                                                               });
	//
