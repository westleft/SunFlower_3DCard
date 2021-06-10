const container = document.querySelector('.container');
const card = document.querySelector('.card');
const post = document.querySelector('.post');
const img = document.querySelector('.img_box');
const title = document.querySelector('.title');

container.addEventListener('mousemove', function(e){    
    //定義旋轉角度
    let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 18;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   
})

//滑鼠進入作用區域
container.addEventListener('mouseenter',function(e){
    card.style.transition = `all 0.1s ease`;
    title.style.transform = `translateZ(50px) rotateX(10deg)`;
    post.style.transform = `translateZ(150px)`;
    img.style.transform = `translateZ(50px)`;

    post.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.2)";
})

//滑鼠離開作用區域
container.addEventListener('mouseleave',function(e){
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = `translateZ(0px) rotateX(0deg)`;
    post.style.transform = `translateZ(0px)`;
    img.style.transform = `translateZ(0px)`;

    post.style.boxShadow = "none";
})


const player = document.querySelector('.player')
const myAudio = document.querySelector('.myaudio')

let count = 0

//設定音樂事件
player.addEventListener('click',function(){
    if(count == 0){
        count = 1;
        myAudio.play();
        player.style.backgroundImage = "url('image/play.png')";
        player.classList.add('music_animation')
    }else{
        count = 0;
        myAudio.pause();
        player.style.backgroundImage = "url('image/pause.png')";
        player.classList.remove('music_animation')
    }
})