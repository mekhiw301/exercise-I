const memeForm = document.getElementById('meme-form');  
const memeContainer = document.getElementById('meme-container');  
const memeImage = document.getElementById('meme-image');  
const topTextContainer = document.getElementById('top-text-container');  
const bottomTextContainer = document.getElementById('bottom-text-container');  
  
memeForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const imageUrl = document.getElementById('image-url').value;  
   const topText = document.getElementById('top-text').value;  
   const bottomText = document.getElementById('bottom-text').value;  
  
   memeImage.src = imageUrl;  
   topTextContainer.innerText = topText;  
   bottomTextContainer.innerText = bottomText;  
});