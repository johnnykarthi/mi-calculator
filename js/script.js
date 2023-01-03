let output = document.querySelector(".output");
let result = '';
let c = 0;
function display(num) {
    let n = result.length;
    if ((num == '+' || num == '-' || num == '*' || num == '/' || num == '%') && (c == 1)) {
        c=0;
        result = result+num;
        output.innerHTML = result;
    }
    else if (c == 1) {
        c=0;
        result='';
        result=result+num;
        output.innerHTML = result;
    }
    else if (n > 0) {
        let last = result.charAt(n-1);
        if ((last == '+' || last == '-' || last == '*' || last == '/' || last == '%') && (num == '+' || num == '-' || num == '*' || num == '/' || num == '%')) {
            output.innerHTML = result;
        }
        else{
            result = result + num;
            output.innerHTML = result;
        }
    }
    else {
        result = result + num;
        output.innerHTML = result;
    }
}

function sk() {
    output.innerHTML = 0;
    result = '';
}

function del() {
    result = result.slice(0, -1);
    output.innerHTML = result;
    if (result == '') {
        output.innerHTML = 0;
    }
}

function cal() {
    if(result!='')
    {
        result = ''+eval(result);
        output.innerHTML = "= " + result;
        c=1;
    }
    else
    {
        output.innerHTML = "= " + '0';
    }
   

}
