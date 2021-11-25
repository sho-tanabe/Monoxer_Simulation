function update_field(){    
    var resultabout = Math.floor(  $('#course').val() * $('#class').val() * $('#azukari').val() );
    var result = `${resultabout}円`;
    $('#monoxer_price').text(result);
}

$(function() {
  $('input[type="number"]').on('keyup change', function() {
    update_field();
  });
});
