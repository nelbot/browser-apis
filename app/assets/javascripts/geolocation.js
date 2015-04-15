// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.

// if (typeof navigator.geolocation !== 'undefined') {
  
//   function onLocation (position) {
//     console.debug('We have a position.', position);

//   $('.js-lat').val(position.coords.latitude);
//   $('.js-long').val(position.coords.longitude);

//   var lat = position.coords.latitude
//   var lon = position.coords.longitude


//   var display = {
//     size: '600x300',
//     zoom: 14,
//     center: lat + ',' + lon
//   };

//   var link = 'https://maps.googleapis.com/maps/api/staticmap?' + ($.param(display));

//   $('.js-displaylocation').prop("src", link);

//   console.log(link);

//   }


//   navigator.geolocation.getCurrentPosition(onLocation);

//   $('.js-alert').on('click', function () {
//     alert('Hello.');
//   });
  
// } else {
  

//   alert('Upgrade your browser, doofus!');

// }

// console.debug('My JavaScript has ended');