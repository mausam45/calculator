 document.getElementById('d').innerHTML="CALCULATOR";
 function insert(data){
     document.show.text.value=document.show.text.value+data;
 }
 function equal(){
     d=document.show.text.value
     document.show.text.value=document=eval(d);
 }
 function Backspace(){
     d1=document.show.text.value;
     document.show.text.value = d1.substring(0,d1.length-1);
 }

