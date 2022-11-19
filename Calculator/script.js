function storedata(v){
    var txtInp = document.getElementById('txtInp');
    var oldInp = txtInp.value;
    var l = oldInp.length;
    var lastch = oldInp[l-1];

    var opSym = ["+","-","*","/",".","ans","±","√","%"];
    if(opSym.includes(v)){
        if(opSym.includes(lastch)){
            var revlast = oldInp.slice(0,-1);
            txtInp.value = revlast+v;
        }
        else{
            txtInp.value = oldInp+v;
        }
    }
    else{
        txtInp.value = oldInp+v;
    }
}

function deldata(){
    var txtInp = document.getElementById('txtInp');
    var oldInp = txtInp.value;
    oldInp = oldInp.substring(0,oldInp.length-1);
    txtInp.value=oldInp;
}

function caldata(){
    var txtInp = document.getElementById('txtInp');
    var oldInp = eval(txtInp.value);
    txtInp.value = oldInp;
}

function clsdata(){
    document.getElementById('txtInp').value=''; 
}