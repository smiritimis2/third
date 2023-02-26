let cbtn=document.getElementById("change");
let newpass=document.getElementById("newpassword");
    //  let old2=document.getElementById("oldpassword2");
let opass;
    let vbtn=document.getElementById("verify");
    let log=document.getElementById("logout");
      let msg=document.createElement("div");
let mains=document.getElementById("main");
mains.append(msg);
let data = JSON.parse(localStorage.getItem('data'));
let old1=document.getElementById("oldpassword1");


    function match()
    {


       
        let pass1=old1.value;
        //let pass2=old2.value;

    let count=0;
   data.forEach(element => {
       

      if(element!=null)
      {
       if(element.password==pass1)
       {
           msg.innerHTML="you can change password";
  msg.style.color="green";count=1;
  opass=old1.value;
  old1.value="";
       }
    } 

     })

     if(count===0)
     {
         msg.innerHTML="password doesnot match with old password";;
         msg.style.color="red";
     }

      /*if(pass1==pass2)
      {
          msg.style.color="red"
           msg.innerHTML="password does not match";
      }*/
    }

function change()
{
    let npass=newpass.value;

    let pass1=opass;
    //let pass2=old2.value;

let div=document.createElement("div");
mains.append(div);
let count=0;
data.forEach(element => {
   

  if(element!=null)
  {
   if(element.password==pass1 && pass1!="" && npass!="")
   {
       element.password=npass;

    div.innerHTML="Password changed suceesfully";
    div.style.color="green";
    newpass.value="";
   }
} 

 })



 

console.log(data);


}
function logout()
{
    let count=0;
      
let ldiv=document.createElement("div");
ldiv.innerHTML="logout successfully"
ldiv.style.colour="green";
mains.append(ldiv);
       delete data[data.length-1];
      
  console.log(data);
    
   
    
}

cbtn.addEventListener("click",change);
vbtn.addEventListener("click",match);
log.addEventListener("click",logout);
