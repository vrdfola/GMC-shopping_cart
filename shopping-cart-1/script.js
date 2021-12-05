
//plus event handler for cart 1

const increaseBtn = document.getElementById("increaseNumber");
increaseBtn.addEventListener("click",function(){
const increaseNumber = getInputNumber("Counter");


//update price in text 

addSpanUpdate("cart1Price",increaseNumber);
addSubtotalAmount("cart1Price","cart2Price","subtotalAmount")
getTotalAmount("subtotalAmount");


//const input =document.getElementById("plusCounter").value;
//const inputNumber = parseFloat(input);

//const inputNumber = parseInt(input) ;
//document.getElementById("plusCounter").value = inputNumber +1;
//const totalInput = inputNumber+1;
//console.log(totalInput);

//input.value = parseInt(input.value ) +1;

})

//event handler for decreament  for cart 1

const decreaseBtn = document.getElementById("decreaseNumber");
decreaseBtn.addEventListener("click",function(){

const decreaseNumber = getDecreaseNumber("Counter");

addSpanUpdate("cart1Price",decreaseNumber);
addSubtotalAmount("cart1Price","cart2Price", "subtotalAmount");
getTotalAmount("subtotalAmount");

})

//event handler for cart2  increament

const increaseBtn2 = document.getElementById("increaseNumber2");
increaseBtn2.addEventListener("click",function(){

const increaseNumber2 = getInputNumber("Counter2");

//function calling for cart price changed

addSpanUpdate2("cart2Price",increaseNumber2);
addSubtotalAmount ("cart1Price","cart2Price","subtotalAmount");
getTotalAmount("subtotalAmount");

})

//event handler for cart2  decreament 

const decreaseBtn2 = document.getElementById("decreaseNumber2");
decreaseBtn2.addEventListener("click",function(){
const decreaseNumber2 = getDecreaseNumber("Counter2");
addSpanUpdate2("cart2Price",decreaseNumber2);

addSubtotalAmount ("cart1Price","cart2Price","subtotalAmount");
getTotalAmount("subtotalAmount");
})








//increase plus value function

function getInputNumber (id){
const input = document.getElementById(id).value;
const inputNumber = parseFloat(input);
const totalNumber = inputNumber+1;
document.getElementById(id).value = totalNumber;
return totalNumber;


}
//decreaser value for minus function

function getDecreaseNumber (id){
const input = document.getElementById(id).value;
const inputNumber = parseFloat(input);
if(inputNumber>=1){
const total =inputNumber-1;
document.getElementById(id).value= total;
return total;


}

}

//update price in text  function 

 function addSpanUpdate(id,num){
   document.getElementById(id).innerText = 300;
   const number = document.getElementById(id).innerText;
   const parseNumber = parseFloat(number);
   if(num>0)
   {
   const total = parseNumber * num;
   document.getElementById(id).innerText = total;
   return total;
   }
   else{
    document.getElementById(id).innerText = 0;
   }
   

 }

 //update price in text function for cart 2 section

 function addSpanUpdate2(id,num){
    document.getElementById(id).innerText = 30;
   const number = document.getElementById(id).innerText;
   const parseNumber = parseFloat(number);
   if(num>0)
   {
   const total = parseNumber * num;
   document.getElementById(id).innerText = total;
   return total;
   }
   else{
    document.getElementById(id).innerText = 0;
   }
 }

 


 //update price in subtotal function 

 function addSubtotalAmount (id1,id2,id3){
   document.getElementById(id3).innerText = 0;
   const price  = document.getElementById(id1).innerText;
   const priceParse = parseFloat(price);
   //alert(priceParse);
   const subtotalValue = document.getElementById(id2).innerText;
   //alert(subtotalValue);
   const subtotalValueParse = parseFloat(subtotalValue);
   const totalValue = document.getElementById(id3).innerText;
   const totalValueParse = parseFloat(totalValue);
   //alert(totalValueParse);
   const total =parseFloat(priceParse + subtotalValueParse +totalValueParse) ;
   //alert(total);
   document.getElementById(id3).innerText = total;
   return total;
 }

 // function for total value including tax

 function getTotalAmount(id){

 const subtotal = document.getElementById(id).innerText;
 const subtotalNumber = parseFloat(subtotal);
 const total = document.getElementById("totalAmount").innerText;
 const totalNumber  = parseFloat(total);
 const netto = subtotalNumber + (subtotalNumber * 0.1);
 document.getElementById("totalAmount").innerText = netto;
 }
 const remove1 = document.getElementById("removeCart1");
 remove1.addEventListener("click",function(){

 document.getElementById("cart1Price").innerText = "0";
 document.getElementById("Counter").value = "0";
  //document.getElementById("cartArea1").style.display="none";
 
 })
 const remove2 = document.getElementById("removeCart2");
 remove2.addEventListener("click",function(){

 document.getElementById("cart2Price").innerText = "0";
 document.getElementById("Counter2").value = "0"
 //document.getElementById("cartArea2").style.display="none";

 
 })

 const finalPage = document.getElementById("CheckOutBtn");
 finalPage.addEventListener("click",function(){
 document.getElementById("transactionArea").style.display= "none";
 document.getElementById("thankYouSection").style.display= "block";
 })
