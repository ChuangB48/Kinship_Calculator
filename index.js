let memory=[];
function calculate(event){
    rollback();
    memory.push(event);
    render();
}
function all_clear(){
    rollback();
    memory=[];
    render();
}
function back(){
    rollback();
    memory.pop();
    render();
}
function render(){
    rollback();
    document.getElementById("question_text").innerHTML="";
    document.getElementById("answer_text").innerHTML="";
    let point=-2;
    for(let a=0;a<memory.length;a++){
        if(point===-2){
            document.getElementById("question_text").innerHTML=buttons[0][memory[a]];
            point=buttons[1][memory[a]];
            document.getElementById("answer_text").innerHTML=buttons[0][memory[a]];
        }
        else{
            document.getElementById("question_text").innerHTML+="&ensp;的&ensp;"+buttons[0][memory[a]];
            point=relatives_table[point][memory[a]];
            if(point===-1){
                document.getElementById("answer_text").innerHTML="無法顯示";
            }
            else{
                document.getElementById("answer_text").innerHTML=relatives[point];
            }
        }
    }
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
document.addEventListener("keydown",event=>{
    if(event.code==="Digit1"){
        calculate(0);
    }
    else if(event.code==="Digit2"){
        calculate(1);
    }
    else if(event.code==="Digit3"){
        calculate(2);
    }
    else if(event.code==="Digit4"){
        calculate(3);
    }
    else if(event.code==="KeyQ"){
        calculate(4);
    }
    else if(event.code==="KeyW"){
        calculate(5);
    }
    else if(event.code==="KeyE"){
        calculate(6);
    }
    else if(event.code==="KeyR"){
        calculate(7);
    }
    else if(event.code==="KeyA"){
        calculate(8);
    }
    else if(event.code==="KeyS"){
        calculate(9);
    }
    else if(event.code==="KeyD"){
        calculate(10);
    }
    else if(event.code==="KeyF"){
        calculate(11);
    }
    else if(event.code==="KeyZ"){
        calculate(12);
    }
    else if(event.code==="KeyX"){
        calculate(13);
    }
    else if(event.code==="Backspace"||event.code==="ArrowUp"||event.code==="ArrowDown"||event.code==="ArrowLeft"||event.code==="ArrowRight"){
        back();
    }
    else if(event.code==="Space"||event.code==="Delete"||event.code==="Escape"){
        all_clear();
    }
    else if(event.code==="Enter"||event.code==="Equal"){
        equal();
    }
});