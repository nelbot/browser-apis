// function addCharacter (event) {
//   event.preventDefault();
//   var newCharacter = {
//     name: $('.name').val(),
//     weapon: $('.weapon').val(),
//     occupation: $('.occupation').val()
//   };

//   // Make a POST request to the API with the info
//   var request = $.post('https://ironhack-characters.herokuapp.com/characters', newCharacter);

//   function onSaveSuccess (response) {
//     console.debug('BOOM', response);
//   }

//   function onSaveFailure (err) {
//     // Print out the error response
//     console.error(err.responseJSON);
//   }

//   request.done(onSaveSuccess);
//   request.fail(onSaveFailure);
// }

// $('.js-add-character').on('click', addCharacter);


// function fetchCharacters (event) {
//   var request = $.get('https://ironhack-characters.herokuapp.com/characters');

//   function handleCharacters (characters) {
//     characters.forEach(function appendLi (chr) {
//       $('.js-character-list').append('<li>' + chr.name + '</li>');
//     });
//     console.debug('REQUEST FINISH', characters);
// }

//   function handleWeapons (characters) {
//     characters.forEach(function appendLi (chr) {
//       $('.js-character-weapon').append('<li>' + chr.weapon + '</li>');
//     });
// }

//   function handleOccupations (characters) {
//     characters.forEach(function appendLi (chr) {
//       $('.js-character-occupation').append('<li>' + chr.occupation + '</li>');
//     });
// }

//   function handleError (err1, err2, err3) {
//     console.error('OH NO!!', err1, err2, err3);
// }
//   var btn = $(event.target);

//   if (btn.hasClass('js-characters')) {
//     request.done(handleCharacters); 
//   }
//   else if (btn.hasClass('js-weapons')) {
//     request.done(handleWeapons);
//   }
//   else {
//     request.done(handleOccupations)
//   }

//   request.fail(handleError); 

// }

// $('.js-characters').on('click', fetchCharacters);
// $('.js-weapons').on('click', fetchCharacters);
// $('.js-occupations').on('click', fetchCharacters);




