const container= document.querySelectorAll('.content-container')
// console.log(container)
for(i=0;i<container.length;i++){
container[i].addEventListener('click',function(){
     this.classList.toggle('active')
})
}