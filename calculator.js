let input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

let string = "";
let t=0;
let finstring="";
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            t=0;
            string = eval(finstring+string);
            input.value = string;
        }
        else if(e.target.innerHTML == '+'||e.target.innerHTML == '-'||e.target.innerHTML == '*'||e.target.innerHTML == '/'||e.target.innerHTML == '%'){
           if(t==0){
            t=1;
            finstring=string+e.target.innerHTML;
            string="";
           }
           else{
            t=0;
            string="Wrong Operator";
            input.value=string;
            finstring="";
           }
        }
        else if(e.target.innerHTML == 'AC'){
            t=0;
            string = "";
            finstring="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

