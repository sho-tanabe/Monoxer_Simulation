function update_field(){    

    var course = $('[name="course"] option:selected').val();
    var gaku_class = $('[name="gaku_class"] option:selected').val();
    var azukari = $('[name="azukari"] option:selected').val();
    
    var resultabout =  $('#course').val() * $('#gaku_class').val() * $('#azukari').val() ;
    var result = `${resultabout}円`;
    $('#monoxer_price').text(result);
}

/*
$(function() {
  $('[name="course"]').on('keyup change', function() {
    update_field();
  });
});
*/


$(function() {
    $('select').change(function() {
    update_field();        
    });
});
