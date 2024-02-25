function add(){
    var num=document.getElementById("num_one").innerHTML;
 z= Number(num);
var  output=z+1;
document.getElementById("num_one").innerHTML=output;
}
function add2(){
    var num=document.getElementById("num_two").innerHTML;
 z= Number(num);
var  output=z+1;
document.getElementById("num_two").innerHTML=output;
}
function reset(){
    document.getElementById("num_one").innerHTML=0;
    document.getElementById("num_two").innerHTML=0;
}