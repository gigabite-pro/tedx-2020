const sahilBtn = document.querySelector('.sahil-btn');
const sahiltext = document.querySelector('.sahil');
const sahilcard = document.querySelector('.sahil-card');


sahilBtn.addEventListener("click",(e)=>{
    sahiltext.classList.toggle('showMore');
    sahilcard.classList.toggle('newHeight');
    if(sahilBtn.innerText === 'Read More'){
        sahilBtn.innerText = 'Read Less';
    }else{
        sahilBtn.innerText = 'Read More';
    }
})

const bipashaBtn = document.querySelector('.bipasha-btn');
const bipashatext = document.querySelector('.bipasha');
const bipashacard = document.querySelector('.bipasha-card');


bipashaBtn.addEventListener("click",(e)=>{
    bipashatext.classList.toggle('showMore');
    bipashacard.classList.toggle('newHeight');
    if(bipashaBtn.innerText === 'Read More'){
        bipashaBtn.innerText = 'Read Less';
    }else{
        bipashaBtn.innerText = 'Read More';
    }
})

const ravinderBtn = document.querySelector('.ravinder-btn');
const ravindertext = document.querySelector('.ravinder');
const ravindercard = document.querySelector('.ravinder-card');


ravinderBtn.addEventListener("click",(e)=>{
    ravindertext.classList.toggle('showMore');
    ravindercard.classList.toggle('newHeight');
    if(ravinderBtn.innerText === 'Read More'){
        ravinderBtn.innerText = 'Read Less';
    }else{
        ravinderBtn.innerText = 'Read More';
    }
})

const aishBtn = document.querySelector('.aish-btn');
const aishtext = document.querySelector('.aish');
const aishcard = document.querySelector('.aish-card');


aishBtn.addEventListener("click",(e)=>{
    aishtext.classList.toggle('showMore');
    aishcard.classList.toggle('newHeight');
    if(aishBtn.innerText === 'Read More'){
        aishBtn.innerText = 'Read Less';
    }else{
        aishBtn.innerText = 'Read More';
    }
})

