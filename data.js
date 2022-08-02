// JavaScript Document
var t_box_div = $("#tick-boxes");
var v_box_div = $("#value-boxes");

var snd_to = $("#snd-to");
var cst_name = $("#name");
var act_no = $("#act-no");
var gbs_no = $("#gbs-no");


var input = $("input")
var s_input = $("#selector_input")
let selectable = [$("#s_1"),$("#s_2"),$("#s_3"),$("#s_4"),$("#s_5"),$("#s_6"),$("#s_7"),$("#s_8"),$("#s_9"),$("#s_10"),$("#s_11"),$("#s_12"),$("#s_13"),$("#s_14"),$("#s_15"),$("#s_16"),$("#s_17"),]
var tick_box = [$("#tb1"),$("#tb2"),$("#tb3"),$("#tb4"),$("#tb5"),$("#tb6"),$("#tb7"),$("#tb8"),$("#tb9"),$("#tb10"),$("#tb11"),$("#tb12"),$("#tb13"),$("#tb14"),$("#tb15")]
var value_box = [$("#vb1"),$("#vb2"),$("#vb3"),$("#vb4"),$("#vb5"),$("#vb6"),$("#vb7"),$("#vb8"),$("#vb9"),$("#vb10"),$("#vb11"),$("#vb12"),$("#vb13"),$("#vb14"),$("#vb15")]


//var recipient =
//var subject = 
//var intro = 
var body = $("#mail-body")
//var outro = 




function data_empty(){
    var boxes = [$("#tb1"),$("#tb2"),$("#tb3"),$("#tb4"),$("#tb5"),$("#tb6"),$("#tb7"),$("#tb8"),$("#tb9"),$("#tb10"),$("#tb11"),$("#tb12"),$("#tb13"),$("#tb14"),$("#tb15"),$("#vb1"),$("#vb2"),$("#vb3"),$("#vb4"),$("#vb5"),$("#vb6"),$("#vb7"),$("#vb8"),$("#vb9"),$("#vb10"),$("#vb11"),$("#vb12"),$("#vb13"),$("#vb14"),$("#vb15")]
    for(i in boxes){
        if(boxes[i].find("h4").is(':empty')){
            boxes[i].addClass('hidden')
        }else{
            boxes[i].removeClass('hidden')
        }
    }
}
data_empty()

function chnge_h4(value, value2){
    value.find("h4").html(`${value2}`)
}
function cl_tv_vals(){
    function h4(value){
        value.find("h4").html("")
    }
    for(i = 0; i < 15; i++){
        h4(tick_box[i])
        h4(value_box[i])
    }
}


function custom(){
    cl_tv_vals()
}
function order_lpg(){
    cl_tv_vals()
    if(snd_to.val() == "Customer"){
        chnge_h4(value_box[0], "Gauge Reading (%)")
        if(value_box[0].val().length > 0){
            console.log("something in there")
            if(value_box[0].val() <= 10){
                console.log("smaller or equal to 10%")
            }else{
                console.log("larger than 10%")
            }
        }else{
            body.html(`Thank you for contacting Premier LPG.  

Please forward me your current gauge reading so that I can proceed with your order.`)
        }



    }else if(snd_to.val() == "Department"){
        chnge_h4(value_box[0], "Gauge Reading (%)")
        chnge_h4(value_box[1], "Company")
        chnge_h4(value_box[2], "Amount requested (L)")
    }
}
//function countersigning(){
//    cl_tv_vals()
//
//}

// maybe use json files for function calling
function selected(){
    if(s_input.val() == selectable[0].val()){
        custom()
    }else if(s_input.val() == selectable[1].val()){
        order_lpg()
    }else if(s_input.val() == selectable[2].val()){
        countersigning()
    }else if(s_input.val() == selectable[3].val()){
        surcharge()
    }else{
        custom()
    }
    data_empty()
}
input.change(() => {
    selected()
    console.log("input changed")
    // use s_input change or snd_input if this breaks
});


