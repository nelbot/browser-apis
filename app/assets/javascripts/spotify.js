
function fetchArtists (event) {
  event.preventDefault();
  console.log(event.target);
  var search = $('.name').val();

  var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + search);

  function handleArtists (response) {
    console.debug('REQUEST FINISH', response);
    var artist_id = response.artists.items[0].id
    var imageSrc;

    if (response.artists.items[0].images.length > 0) {
      imageSrc = response.artists.items[0].images[1].url;
    } else {
      imageSrc = 'http://www.sickchirpse.com/wp-content/uploads/2013/02/sloth.jpg';
    }

    $('.js-returned-artists').append('<h2 style="text-align:center;">' + response.artists.items[0].name + '</h2>' + '<img src=" ' + imageSrc + '"/>' + '<h2 style="text-align:center;">Would you like to see this artists albums?</h2>' +
      '<button class="btn btn-primary center-block js-find-albums" type="button" data-artist' + "=" + artist_id +' >Hell Ya!</button>');
    
    $('.js-find-albums').on('click', fetchAlbums);

  }

  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
  
  request.done(handleArtists); 
  request.fail(handleError);
}

$('.js-search-artists').on('click', fetchArtists);

function fetchAlbums (event) {
  event.preventDefault();
  var artist_id = $(event.target).data('artist');
  var request = $.get('https://api.spotify.com/v1/artists/' + artist_id + '/albums')

  function handleAlbums (response) {
  console.log(response);

  var imageSrc;

    if (response.items[0].images.length > 0) {
      imageSrc = response.items[0].images[0].url;
    } else {
      imageSrc = 'http://www.sickchirpse.com/wp-content/uploads/2013/02/sloth.jpg';
    }

  $('.js-returned-albums').append('<h2 style="text-align:center;">' + response.items[0].name + '</h2>' + '<img src=" ' + imageSrc + '"/>');
  }

  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }
  
  request.done(handleAlbums); 
  request.fail(handleError);
}


