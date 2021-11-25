function update_field(){    

    var course = $('[name="course"] option:selected').val();
    var gaku_class = $('[name="gaku_class"] option:selected').val();
    var azukari = $('[name="azukari"] option:selected').val();
    
    var resultabout =  $('#course').val() * $('#gaku_class').val() * $('#azukari').val() ;
    var result = `${resultabout}円`;
    $('#monoxer_price').text(result);
    
    var resultabout_intax =  Math.floor( resultabout * 1.10 );
    var result_intax = `(税込 ${resultabout_intax}円)`;
    $('#monoxer_price_intax').text(result_intax);

    
    var resultabout_day =  Math.floor( $('#course').val() * $('#gaku_class').val() * $('#azukari').val() / 30 );
    var result_day = `一日あたり 約 ${resultabout_day} 円です`;
    $('#monoxer_price_day').text(result_day);
    
    if(resultabout == 0){
        $("#result_zone").hide("normal");
    }else{
        $("#result_zone").show("normal");
    }    
}


$(function() {
    $('select').change(function() {
    update_field();        
    });
});
