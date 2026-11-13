let memory=0;
function calculate(event){
    rollback();
    document.getElementById("question_text").innerHTML+="&nbsp;的&nbsp;"+relatives[event];
    memory=relatives_table[memory][event];
    if(memory===-1){
        document.getElementById("answer_text").innerHTML="無法查詢";
    }
    else{
        document.getElementById("answer_text").innerHTML=relatives[memory];
    }
}
function all_clear(){
    rollback();
    document.getElementById("question_text").innerHTML="我";
    document.getElementById("answer_text").innerHTML="我";
    memory=0;
}
function equal(){
    rollback();
    document.getElementById("answer_text").style.fontSize="xx-large";
    let w=40;
    let h=40;
    let time=window.setInterval(()=>{
        document.getElementById("answer").style.width=w.toString()+"%";
        document.getElementById("answer").style.height=h.toString()+"%";
        w++;
        h++;
        if(w>100||h>100){
            window.clearInterval(time);
        }
    },3);
}
function rollback(){
    document.getElementById("answer").style.width="40%";
    document.getElementById("answer").style.height="40%";
    document.getElementById("answer_text").style.fontSize="x-large";
}