const btnEl=document.querySelector('.btn');

btnEl.addEventListener('mouseover',function(e){
const x=e.pageX - btnEl.offsetLeft

const y=e.pageY - btnEl.offsetTop

btnEl.style.setProperty('--xPos',x+'px')
btnEl.style.setProperty('--yPos',y+'px')


})
