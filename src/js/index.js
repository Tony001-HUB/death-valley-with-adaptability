import featuredImgArr from './arr/featuredImgArr.js';
import footerImgArr from '../js/arr/footerImgArr.js'
import renderFeaturedImg from './renderFeaturedImg.js';
import renderFooterImg from './renderFooterImg.js';

const featuredWorkImgContainer = document.querySelector('.featured-works__img-container'),
footerImgContainer = document.querySelector('.footer_icon-container');

function createFeaturedWorksImg(arr) {
    let  HTMLCode = "";
    for (let i = 0; i < arr.length; i++) 
    {
        HTMLCode += renderFeaturedImg(arr[i]);
    }  
    return HTMLCode;
}
function createFooterImg(arr) {
    let  HTMLCode = "";
    for (let i = 0; i < arr.length; i++) 
    {
        HTMLCode += renderFooterImg(arr[i]);
    }  
    return HTMLCode;
}

featuredWorkImgContainer.insertAdjacentHTML('beforeend', createFeaturedWorksImg(featuredImgArr));
//footerImgContainer.insertAdjacentHTML('beforeend', createFooterImg(footerImgArr));