const container = document.querySelector('.container')
const card = document.querySelector('.card');

container.addEventListener('mousemove', function(e){
    
    //定義旋轉角度
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container.addEventListener('mouseenter',function(e){
    card.style.transition = `none`
})

container.addEventListener('mouseleave',function(e){
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})