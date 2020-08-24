
$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your submission has been processed...'+'<br><br>'+'Thank You for your Feedback/Message')
});