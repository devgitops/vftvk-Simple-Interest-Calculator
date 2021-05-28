function compute(){
    var flag = checkdata();

    if(flag){

        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal*rate*years/100;
        var amount =  interest;
        var year = new Date().getFullYear() + parseInt(years);

        var res_msg = 
        "If you deposit <mark>"+ principal +"</mark>,<br>\
        at an interest rate of <mark>"+ rate +"%</mark>.<br>\
        You will receive an amount of <mark>"+ amount +"</mark>,<br>\
        in the year <mark>"+ year +"</mark><br>";

        document.getElementById("result").innerHTML=res_msg

    }
    

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function checkdata(){
    var p = document.getElementById("principal");

    if(p.value<=0){
        alert('Enter a positive number')
        p.focus();
        return false
        
    }

    return true
    
}

function formReset(){
    document.getElementById("form1").reset();
    document.getElementById("result").innerHTML="";
    var rate = document.getElementById("rate");
    rate.value = 10.25;
    updateRate()

}