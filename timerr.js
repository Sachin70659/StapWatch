//onst cunterdata=document.querySelector("#cunter");
//et startcount=0;
//onst Startbtn = () =>{
//
//   setInterval(()=>{
//       cunterdata.innerText=startcount++ ;
//   },1000);
//;

const cunterdata = document.querySelector(".cunter");
const Data=document.querySelector(".ram");
let startcount = 0;
let intervalId;
const startTime = () => {
    intervalId= setInterval(() => {
        cunterdata.innerText = startcount++;
    },1000);
};
const stopTimer = ()=>{
    clearInterval(intervalId);
};
const reset=()=>{
    startcount=0;
    cunterdata.innerText=startcount;
    clearInterval(intervalId);
};
const show=()=>{
   const newPara=document.createElement("p");
   newPara.innerText=`the stop time ${startcount-1}`;
   Data.append(newPara);
};
const cleardata=()=>{
    Data.innerText=" ";
   
}
document.querySelector(".start").addEventListener("click",startTime);
document.querySelector(".stop").addEventListener("click",stopTimer);
document.querySelector(".restart").addEventListener("click",reset);
document.querySelector(".get").addEventListener("click",show);
document.querySelector(".clear").addEventListener("click",cleardata);
//    Clear();
//});