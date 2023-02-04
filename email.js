
let check = document.querySelector(".check");
let password=document.querySelector(".password");
let text= document.querySelector(".text");

let regex= /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

  check.addEventListner("click",()=>{

if(password.value == ""){
  text.innerText="please enter an email address";
  text.style.color="#000";

}
else if (password.value.match(regex)) {
  text.innerText="congrats! your entered a valid email address";
  text.style.color="rgba(4,234,9,1)";


}
else{
  text.innerText="sorry! your email address is invlaid";
  text.style.color="rgba(255,0,0,1)";
}


});
