const text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nemo doloribus consectetur sequi ad dignissimos, asperiores repellat distinctio explicabo, officia inventore corrupti aliquam ";
const text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum voluptatum fuga atque amet, maxime consectetur ab tempore itaque nulla autem blanditiis harum.";
const text3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam voluptatem quod! Adipisci earum quis cum voluptatibus optio et porro voluptas officiis veniam repudiandae. Expedita ullam tenetur ";
const myInformation=[{picture:"divmilk.jpg",text:text1,profession:"Web Master", name:"divin Nkombo"},{picture:"divdork.jpg",text:text2,profession:"The Boss",name:"Alain NVOI"},{picture:"divnak.jpg",text:text3,profession:"the Builder", name:" Justin OKO"}];
let myValue=0;
const myName=document.querySelector("h2");
const myProfessional=document.querySelector("h3");
const myPicture=document.querySelector("img");
const myPara=document.querySelector(".boxParagraph p");

const addBookToList= function(book){

myPicture.setAttribute("src", book.picture);   
myName.textContent=book.name;
myProfessional.textContent=book.profession;
myPara.textContent=book.text;
}

const Cancelling=function(){
    myValue=0;
    return myValue;
}
const Adding=function(){
  myValue=myInformation.length;
  return myValue;
}
const AleatoireNumb=function(){
  myValue=Math.floor(Math.random()*3)
  return myValue;
}

document.querySelector(".chleft").addEventListener("click", (e)=>{

  if(myValue<0){
    Adding();
}  
  if (myValue>=0) {
    myValue--;
    addBookToList(myInformation[myValue]);
   
    }
   
})

document.querySelector(".chright").addEventListener("click", (e)=>{
  if((myValue===myInformation.length)){
    Cancelling();
}  
  if (myValue<myInformation.length) {
    addBookToList(myInformation[myValue]);
    myValue++;
    }
      
})

document.querySelector(".bestButton").addEventListener("click",(e)=>{
let j=AleatoireNumb();
  addBookToList(myInformation[j]);
})