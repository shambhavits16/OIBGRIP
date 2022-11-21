let input = document.getElementById("input");
let output = document.getElementById("output");
const symbols = ["+","-","x","÷","(",")","%"]
var answer = "0";
var string = ""
function storedata(data){
    if(symbols.includes(input.innerHTML[input.innerHTML.length-1])   && 
       input.innerHTML!=""   && 
       symbols.includes(data)){
        input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length - 1);
        input.innerHTML+=data
    }
    else if (data == "CLEAR"){
        input.innerHTML = "";
        output.innerHTML = "";
        answer = "0";
    }
    else if(data == "ENTER"){
        calculate()
        
    }
    else if(data=="±"){
        calculate()
        console.log(answer)
            if ((parseInt(answer))>0){
                answer = -1*(parseInt(answer));
                answer = answer.toString();
                input.innerHTML = "-"+"("+input.innerHTML+")";
                
            }
            else{
                answer = -1*(parseInt(answer));
                answer = answer.toString();
                
            }
            output.innerHTML = answer;
    }
    else if (data == "DEL"){
        input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length - 1);
    }
    else if (data == "ANS"){
        output.innerHTML = answer;
        input.innerHTML = answer
    }


    else{
        input.innerHTML += data;
    }
}

function calculate(){
    string = input.innerHTML
        string = string.replace(/x/g,"*");
        string = string.replace(/÷/g,"/");
        string = string.replace(/∞/g,"Infinity");
        try{
            if (math.evaluate(`${string}`) == "Infinity"){
                output.innerHTML = "∞"
                answer = "∞"
            }
            else {
                output.innerHTML = math.evaluate(`${string}`);
                answer = math.evaluate(`${string}`);
            }
            
        }
        catch(e) {
            input.innerHTML = e.name
        }
}