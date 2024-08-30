'use strict'
const contEl = document.querySelector('.container');
const workArr = ['mae', 'asd', '123123', 'masdw']
let worksindex = 0;
let charindex = 0;
update()
const ke= document.cl



function update() {
    charindex++;
  const firstChar=workArr[worksindex][0];
    const aOrAn=firstChar==='a'||firstChar==='i'?`an `:`a `;
  contEl.innerHTML = `<h1>i am ${aOrAn} ${workArr[worksindex].slice(0,charindex)}</h1>`;
  
  if (charindex===workArr[worksindex].length) {
    worksindex++;
   charindex=0; 
  }
  if (worksindex===workArr.length) {
   worksindex=0; 
  }
  setTimeout(update , 400)
}      
