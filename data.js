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
var tk_bx = [$("#tb1"),$("#tb2"),$("#tb3"),$("#tb4"),$("#tb5"),$("#tb6"),$("#tb7"),$("#tb8"),$("#tb9"),$("#tb10"),$("#tb11"),$("#tb12"),$("#tb13"),$("#tb14"),$("#tb15")]
var v_bx = [$("#vb1"),$("#vb2"),$("#vb3"),$("#vb4"),$("#vb5"),$("#vb6"),$("#vb7"),$("#vb8"),$("#vb9"),$("#vb10"),$("#vb11"),$("#vb12"),$("#vb13"),$("#vb14"),$("#vb15")]


var recipient = $("#mail-recipient")
var subject = $("#mail-subject")
var intro = $("#mail-intro")
var body = $("#mail-body")
var outro = $("#mail-outro")




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
function box_input(value){
    value.find("input").val()
}

function cl_tv_vals(){
    function h4(value){
        value.find("h4").html("")
    }
    for(i = 0; i < 15; i++){
        h4(tk_bx[i])
        h4(v_bx[i])
    }
}

function custom(){
    cl_tv_vals()
}
function order_lpg(){
    cl_tv_vals()
    subject.html(`Account: ${act_no.val()}|Premier LPG Order Request`)
    if(snd_to.val() == "Customer"){
        chnge_h4(v_bx[0], "Gauge Reading (%)")
        if(v_bx[0].find("input").val().length > 0){
            if(v_bx[0].find("input").val() <= 10){
                body.html(`
I have forwarded your request to our scheduling department who will arrange the delivery for you and noted the urgency.

I know that our distribution team will make every effort to get a delivery to you as soon as possible. 
<br><br>
I understand it is easy to overlook gauge readings however we do ask that in future to avoid a run out that you try to order when the gauge reads between 20 - 30 %. `)
            }else{
                body.html(`
I have forwarded your request to our distribution team who will arrange the delivery for you. We do advise to expect a lead time of 7-10 working days.`)
            }
        }else{
            body.html(`Please forward me your current gauge reading so that I can proceed with your order.`)
        }



    }else if(snd_to.val() == "Department"){
        chnge_h4(v_bx[0], "Gauge Reading (%)")
        chnge_h4(v_bx[1], "Company")
        chnge_h4(v_bx[2], "Amount requested (L)")
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
    // use s_input change or snd_input if this breaks
});


