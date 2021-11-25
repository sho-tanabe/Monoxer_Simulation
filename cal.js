function update_field(){    

    var course = $('[name="course"] option:selected').val();
    var gaku_class = $('[name="gaku_class"] option:selected').val();
    var azukari = $('[name="azukari"] option:selected').val();
    
    var resultabout =  $('#course').val() * $('#gaku_class').val() * $('#azukari').val() ;
    var result = `${resultabout}円`;
    $('#monoxer_price').text(result);
    
    var resultabout_day =  Math.floor( $('#course').val() * $('#gaku_class').val() * $('#azukari').val() / 30 );
    var result_day = `一日あたり 約 ${resultabout_day} 円`;
    $('#monoxer_price_day').text(result_day);
    
    //追記
    if(resultabout == 0){
        $("#result_zone").hide("normal");
    }else{
        $("#result_zone").show("normal");
    }
    //追記終わり    
}


$(function() {
    $('select').change(function() {
    update_field();        
    });
});


/*
$(function(){
    $('select').change(function() {
    var course_val = document.getElementById("course").selectedIndex;
    var gaku_class_val = document.getElementById("gaku_class").selectedIndex;
    var azukari_val = document.getElementById("azukari").selectedIndex;
    console.log(course_val);
    console.log(gaku_class_val);
    console.log(azukari_val);
        if(course_val == 0 || gaku_class_val == 0 || azukari_val == 0){
            $("#result_zone").hide("normal");
            window.alert('hide');
        }else{
            $("#result_zone").show("normal");
            window.alert('show');
    }
  }, false);
});
*/
