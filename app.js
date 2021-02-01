 // genarate randome number 
 function getPinNumber(){
    let inputpin = document.getElementById('input-pin');
    let inputPinNumber =(Math.random()*10000+'').split('.')[0];
    if( inputPinNumber > 999){
     inputpin.value = inputPinNumber;
    }
    }


     // user input pin number
     let digitArray =[];
    function getuserinputNumber(num){
       let res = '';
        let inputDigit = document.getElementById('input-digit');
        digitArray.push(num); 
     for (let i = 0; i < digitArray.length; i++) {
         const result  = digitArray[i];
         res = res + result ;   
     }
      inputDigit.value = res; //this  value is strings
      if(num < 0) // new button condition 
     {
         inputDigit.value = ''; 
         digitArray = [''];
    } 

     // submit button function 
    document.getElementById('submit-button').addEventListener('click',function(){ 
      let inputpin = document.getElementById('input-pin');
        let submitBtnNum = parseInt(inputpin.value);
    let  submitBtnuserInput = parseInt(inputDigit.value);
     if(submitBtnNum == submitBtnuserInput){
         const pinMached =   document.getElementById('pin-matched');
             pinMached.style.display = "block";
             pinMached.style.backgroundColor = "green";
           }
           else{
               const pinNoMatch = document.getElementById('pin-nomatch');
               pinNoMatch.style.display = "block";
               pinNoMatch.style.backgroundColor = "red";
           } 

         })    
 }
            // try left three time
            document.getElementById('submit-button').addEventListener('click',function(){
             let tryLeft =   document.getElementById('try-left');
            let tryLeftNumber = parseInt(tryLeft.innerText);
            let tryLeftCount = tryLeftNumber  - 1 ;
            tryLeft.innerText = tryLeftCount;
            if(tryLeftCount > 0){
              
              
            }
            else{
             tryLeft.innerText = 0;
              alert("Pin Number Isn't Valid,, Waiting A five Minute") ;
            }
            })     
        