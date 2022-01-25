console.log('script.js loaded...')

document.querySelector('#btnLoad').addEventListener('click', ()=>{

    getDinoName();
    getDinoImage();
    var audio = new Audio("https://soundbible.com/mp3/Tyrannosaurus%20Rex-SoundBible.com-2136096676.mp3");
    audio.play();

})



async function getDinoName() {
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoName = data[0].join(' ');
    console.log(dinoName);
    document.querySelector('#dinoName').textContent = dinoName;
}

async function getDinoImage(){
    console.log('image function entered');
    
    const response = await fetch('/dinoimage');
    const data = await response.json();
    console.log(data.thumbnailUrl, data.name);
    
    if(document.querySelector('#dinoImage') !== null){

        document.querySelector('#dinoImage').remove();
    }

    let img = document.createElement('img');
    img.id = 'dinoImage';
    img.src = data.thumbnailUrl;
    img.alt = data.name;
    document.querySelector('.generator').appendChild(img);
    //document.getElementById('#dinoImage').appendChild(img);
}