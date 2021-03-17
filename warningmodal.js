var $myModal = $(document.createElement('div'))
	.addClass("modal")
	.attr('id', 'myModal');
  $('body').append($myModal);
$('#myModal').append($('<div class="modal-content"><span class="close">&times;</span><p>Biztos?</p></div>'));
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

setTimeout(function() {
	$('#myModal').show();
}, 10000)