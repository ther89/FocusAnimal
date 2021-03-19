chrome.storage.local.get({
  focusanimal_ALLOWED_URLS: '',
  focusanimal_ENABLED: false,
  focusanimal_IMAGE: 'dog.jpg',
}, function (result) {
  //alert(JSON.stringify(result));
  var urls = result.focusanimal_ALLOWED_URLS;
  var enabled = result.focusanimal_ENABLED;
  var imageFileName = result.focusanimal_IMAGE;

  if(!enabled) return;

  var host = location.href;
  var matched = false;

  for(var i = 0; i < urls.length; i++) {
    var regex = "^.*"+urls[i]+".*$";
    if (host.match(regex)) {
       matched = true;
       break;
    }
  }

  if(!matched) return;

  var $myModal = $(document.createElement('div'))
    .addClass("modal")
    .attr('id', 'myModal');
  $('body').append($myModal);
  $('#myModal').append($('<div class="modal-content">'+
  '<span class="close">&times;</span><p>Biztos?</p>'+
  '<img id="focusanimal_image_display" /></div>'));
  
  var imgURL = chrome.extension.getURL('images/' + imageFileName);
  document.getElementById("focusanimal_image_display").src = imgURL;

  
  $('#myModal').show();

  // Get the modal
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $('#myModal').hide();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
    $('#myModal').hide();
    }
  }

  // setTimeout(function() {
  //     $('#myModal').show();
  // }, 10000)
});
