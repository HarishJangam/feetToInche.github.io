var feet=document.getElementById("feet");
var inche=document.getElementById("inches");

feet.addEventListener("input",function(){
    let f=this.value;
    let i=f*12;
    if(!Number.isInteger(i)){
        i=i.toFixed(2)
    }
    inche.value=i
});
inche.addEventListener("input",function(){
    let f=this.value;
    let i=f/12;
    if(!Number.isInteger(i)){
        i=i.toFixed(2)
    }
    feet.value=i
});

