import featuredImgArr from './arr/featuredImgArr.js';
import render from './render.js';

const featuredWorkImgContainer = document.querySelector('.featured-works-img-container');

function createFeaturedWorksImg(arr) {
    let  HTMLCode = "";
    for (let i = 0; i < arr.length; i++) 
    {
        HTMLCode += render(arr[i]);
    }  
    return HTMLCode;
}

featuredWorkImgContainer.insertAdjacentHTML('beforeend', createFeaturedWorksImg(featuredImgArr));
