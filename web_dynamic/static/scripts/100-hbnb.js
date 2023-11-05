$(document).ready(function () {
	  let amenityIds = {};
	  let stateIds = {};
	  let cityIds = {};

	  // Listen for changes on each input checkbox tag for Amenities
	//   $('input[type="checkbox"].amenity').change(function () {
	//       // ... Existing code to handle amenities checkboxes ...
	//           // Update the h4 tag inside the div Amenities with the list of Amenities checked
	//               const amenitiesList = Object.values(amenityIds).join(', ');
	//                   $('div.Amenities h4').text(amenitiesList);
	//                     });
	//
	//                       // Listen for changes on each input checkbox tag for States
	//                         $('input[type="checkbox"][data-id^="state"]').change(function () {
	//                             const stateId = $(this).data('id');
	//                                 const stateName = $(this).data('name');
	//                                     if (this.checked) {
	//                                           stateIds[stateId] = stateName;
	//                                               } else {
	//                                                     delete stateIds[stateId];
	//                                                         }
	//
	//                                                             // Update the h4 tag inside the div Locations with the list of States checked
	//                                                                 const statesList = Object.values(stateIds).join(', ');
	//                                                                     $('div.Locations h4.states').text(statesList);
	//                                                                       });
	//
	//                                                                         // Listen for changes on each input checkbox tag for Cities
	//                                                                           $('input[type="checkbox"][data-id^="city"]').change(function () {
	//                                                                               const cityId = $(this).data('id');
	//                                                                                   const cityName = $(this).data('name');
	//                                                                                       if (this.checked) {
	//                                                                                             cityIds[cityId] = cityName;
	//                                                                                                 } else {
	//                                                                                                       delete cityIds[cityId];
	//                                                                                                           }
	//
	//                                                                                                               // Update the h4 tag inside the div Locations with the list of Cities checked
	//                                                                                                                   const citiesList = Object.values(cityIds).join(', ');
	//                                                                                                                       $('div.Locations h4.cities').text(citiesList);
	//                                                                                                                         });
	//
	//                                                                                                                           // When the button is clicked
	//                                                                                                                             $('button').click(function () {
	//                                                                                                                                 const selectedAmenities = Object.keys(amenityIds);
	//                                                                                                                                     const selectedStates = Object.keys(stateIds);
	//                                                                                                                                         const selectedCities = Object.keys(cityIds);
	//
	//                                                                                                                                             const requestData = {
	//                                                                                                                                                   amenities: selectedAmenities,
	//                                                                                                                                                         states: selectedStates,
	//                                                                                                                                                               cities: selectedCities
	//                                                                                                                                                                   };
	//
	//                                                                                                                                                                       // Request places from the API with selected amenities, states, and cities
	//                                                                                                                                                                           $.ajax({
	//                                                                                                                                                                                 type: 'POST',
	//                                                                                                                                                                                       url: 'http://0.0.0.0:5001/api/v1/places_search',
	//                                                                                                                                                                                             data: JSON.stringify(requestData),
	//                                                                                                                                                                                                   contentType: 'application/json',
	//                                                                                                                                                                                                         success: function (data) {
	//                                                                                                                                                                                                                 // Loop into the result of the request and create article tags representing Places
	//                                                                                                                                                                                                                         const placesSection = $('section.places');
	//                                                                                                                                                                                                                                 placesSection.empty(); // Clear existing places
	//
	//                                                                                                                                                                                                                                         for (const place of data) {
	//                                                                                                                                                                                                                                                   const articleTag = $('<article>');
	//                                                                                                                                                                                                                                                             articleTag.append($('<div class="title"><h2>' + place.name + '</h2></div>'));
	//                                                                                                                                                                                                                                                                       articleTag.append($('<div class="price_by_night">$' + place.price_by_night + '</div>'));
	//                                                                                                                                                                                                                                                                                 articleTag.append($('<div class="information"><div class="max_guest">' + place.max_guest + ' Guest(s)</div><div class="number_rooms">' + place.number_rooms + ' Bedroom(s)</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom(s)</div></div>'));
	//                                                                                                                                                                                                                                                                                           articleTag.append($('<div class="description">' + place.description + '</div>'));
	//                                                                                                                                                                                                                                                                                                     placesSection.append(articleTag);
	//                                                                                                                                                                                                                                                                                                             }
	//                                                                                                                                                                                                                                                                                                                   },
	//                                                                                                                                                                                                                                                                                                                         error: function (error) {
	//                                                                                                                                                                                                                                                                                                                                 console.log('Error fetching places: ' + error);
	//                                                                                                                                                                                                                                                                                                                                       }
	//                                                                                                                                                                                                                                                                                                                                           });
	//                                                                                                                                                                                                                                                                                                                                             });
	//                                                                                                                                                                                                                                                                                                                                             });
	//
