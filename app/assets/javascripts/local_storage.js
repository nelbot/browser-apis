if (typeof window.localStorage === 'undefined')
{
  alert('Upgrade your browser, pops (or moms ???).')
}
 
else
{
  // set items inside local storage
  localStorage.setItem('key', 'value');
 
  // retrieve items from local storage
  var val = localStorage.getItem('key');
 
  console.debug('heres the value', val);
 
  localStorage.setItem('nope', 'NOPE');
 
  // remove an item
  localStorage.removeItem('nope');
 
  // the item will be null if you try to get it after removing it
  var nope = localStorage.getItem('nope');
 
  console.debug('heres the value', val);
 
  // remove all local storage keys
  localStorage.clear();

};

function change () {
    
    var val = $('.js-dropdown').val();
    console.debug('Changed to', val);
    $('body').removeClass('chunk murray busey peter');
    $('body').addClass(val);

}

$('.js-dropdown').on('change', change);

