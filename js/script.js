let output = document.querySelector(".output");
let result= '';
function display(num){
    result = result+num;
    output.innerHTML = result;
}

function sk(){
    output.innerHTML = 0;
    result='';
}

function del(){
    result = result.slice(0,-1);
    output.innerHTML = result;
    if(result == '')
    {
        output.innerHTML = 0;
    }
}

function cal(){
    result = eval(result);
    output.innerHTML ="= "+result;

}