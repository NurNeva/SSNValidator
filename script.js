const input = document.querySelector("#input");
const check = document.querySelector(".btn");
 const result= document.querySelector(".result")

check.addEventListener("click", () => {
    let ssn = input.value
   

    ssnIsValid(ssn)


})

    function ssnIsValid(ssn) {

      let part1 = ssn.substring(0, 3)
      let part2 = ssn.substring(4, 6)
      let part3 = ssn.substring(7)
      
      flag=true
     
  if(ssn.length!= 11){
    flag=false
    result.textContent= "SSN must be 11 character (9 numbers and two hypens)"
  } 

  else if( part1 =="000" || part1== 666 || (part1>=900&&part1 <=999)|| 
  part1.length != 3){
    flag=false
    result.textContent= `Entered SSN (${input.value}) is invalid`
  
  } else if(part2.length != 2|| !(part2>= 1 && part2 <=99) ) {

      flag=false
      result.textContent= `Entered SSN (${input.value}) is invalid`
     
    }else if(part3.length != 4 || !(part3>=1&& part3<=9999)) {

      flag=false
      result.textContent= `Entered SSN (${input.value}) is invalid`
    }else {
    
      result.textContent=`Entered SSN (${input.value}) is valid`
    }

    return flag;


    }

    check.addEventListener("click", () => {
      setTimeout(() => {
        input.value = "";
        result.textContent = "";
      }, 3000); 
    });