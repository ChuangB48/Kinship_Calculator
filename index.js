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