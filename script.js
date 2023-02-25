var users=[{id:1 ,name:"ram",email:"mishrasmiriti1@gmail.com",password:"Abhishek123#!"}];


let doc=document.getElementById("name");
  let em=document.getElementById("emsg")



let named=document.getElementById("nameentry");
let emails=document.getElementById("email");
let message=document.getElementById("msg");
let conpass=document.getElementById("confirm");
let pass=document.getElementById("password");
let conmsg=document.getElementById("con");

var sum=0;
var flag=false;


var ecount=0;
function Emailcheck(data)
 {
     if(!data.includes('@'))
     {
         em.innerHTML="email must include @";ecount=0;
     }
     else
     {
         em.innerHTML="";
         ecount=1;
     }
 }



let ncount=0;
function Namecheck(data) {
    if(data.length<2)
    {
       // console.log("")
      doc.innerHTML=`Name should be of 2 characters`;
      doc.style.color="red";ncount=0;
      
    }
    else{
        doc.innerHTML="";ncount=1;
        
    }
}
var count=0;

 function Passcheck(data)
 {

    let names=named.value;
    let email=emails.value;


 

  let fir=0;let sec=0;let thir=0;let four=0;let passame=0;

     var passClass=document.getElementsByClassName('password-check');
     const lowerCase=new RegExp('(?=.*[a-z])');
     const upperCase=new RegExp('(?=.*[A-Z])');
     const number=new RegExp('(?=.*[0-9])');
     const specialchar=new RegExp('(?=.*[!@#\$%\^&\*])');
     if(lowerCase.test(data))
     {
         passClass[0].style.color="green";
         flag=true;sum++;fir=1;

     }
       else  
        {
         passClass[0].style.color="red";
         flag=false;sum--;fir=0;
        }

       if(upperCase.test(data))
     {
         passClass[1].style.color="green";
         flag=true;sum++;sec=1;

     }
     else{
         passClass[1].style.color="red";
         flag=false;sum--;sec=0;
     }

     if(number.test(data))
     {
         passClass[2].style.color="green";
         flag=true;sum++;thir=1;

     }
     else{
         passClass[2].style.color="red";
         flag=false;sum--;thir=0;
     }
 
     if(specialchar.test(data))
     {
         passClass[3].style.color="green";
         flag=true;sum++;four=1;

     }
     else{
         passClass[3].style.color="red";

        flag=false;sum--;four=0;
     }
     /*if(!email.value.includes('@'))
     {
         message.innerHTML="@ should be in email";
     }*/


  if(named.value==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;passame=0;
  }
  
  if(email==data)
  {
    message.innerText="password cannot be same as name or email";
    message.style.color="red";
    flag=false;sum--;passame=0;
  }
  else{
      message.innerText="";
      flag=true;sum++;passame=1;
  }
  
   if(fir==1 && sec==1 && thir==1 && four==1 && passame==1)
{
     count=5;
}





 }
 var concount=0;
 function concheck(data)
 {
     if(pass.value!=data)
     {
         conmsg.innerHTML=` confirm password should be same as password `;
         conmsg.style.color="red";sum--;concount=0;
     }
     else{
         conmsg.innerHTML="";flag=true;sum++;concount=1;
     }
 }
 /*function add()
 {
     let len =arr.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     arr.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
 }*/
// let btn=document.getElementById("add");
 //btn.addEventListener("click",add)

 



let lastmsg=document.getElementById("doneval");
let submitbtn=document.getElementById("submit");
 function validate()
 {


   
   



if(count==5 && ncount==1 && ecount==1 && concount==1)
{ 
    
    
    
    sum=0;
 lastmsg.innerHTML=`All good to go`;
 lastmsg.style.color="green";;
 let len =users.length;
     len++;
     let name=named.value;
     let email=emails.value;
     let password=pass.value;
     let brr={ id:len, name:name,email:email,password:password}
     users.push(brr);
     named.value="";
     emails.value="";
     pass.value="";
     conpass.value="";
     //location.replace('/new.html');
     localStorage.setItem("data" , JSON.stringify(users))
 window.location.href = "login.html";

}


else{
    lastmsg.innerHTML=`not ready`;
}
 }

 /*function verify()
 {
     let email=document.getElementById("vemail");
     let pass=document.getElementById("vpass");
     let Email=email.value;
     let Pass=pass.value;
     arr.forEach((item)=>{
 if(item.email===Email && item.password===Pass)
{
let msg=document.createElement("div");
msg.innerText="matched";
msg.style.color="green"
     }
     else
     {
         let msg=document.getElementById("div");
         msg.innerText="NOT MATCHED";
        msg.style.color="red";
     }
    }
     )
 }
 let vbtn=document.getElementById("sign");
vbtn.addEventListener("click",verify);*/

 submitbtn.addEventListener("click",validate);
 //module.exports={arr};

 