function update_field(){    

    var course = $('[name="course"] option:selected').val();
    var gaku_class = $('[name="gaku_class"] option:selected').val();
    var azukari = $('[name="azukari"] option:selected').val();
    
    var resultabout =  $('#course').val() * $('#gaku_class').val() * $('#azukari').val() ;
    var result = `${resultabout}円`;
    $('#monoxer_price').text(result);
    
    var resultabout_day =  $('#course').val() * $('#gaku_class').val() * $('#azukari').val() / 30 ;
    var result_day = `一日あたり 約${resultabout_day}円`;
    $('#monoxer_price_day').text(result_day);
    
}


$(function() {
    $('select').change(function() {
    update_field();        
    });
});


$(function(){
    $('select').change(function() {
    var course_val = document.getElementById("course");
    var gaku_class_val = document.getElementById("gaku_class");
    var azukari_val = document.getElementById("azukari");
    if(course_val == 1 && gaku_class == 1 && azukari_val == 1){
        $("#result_zone").show("normal");
     }else{
         $("#result_zone").hide("normal");
    }
  }, false);
});
