import renderDarkeningBackground from './darkeningBackground.js'

const images = document.querySelectorAll('.popup-featured-works-img');
const imgAlert = document.querySelector('.featured-works__popup-img-container');

function showBigFeaturedWorksImage(imgSrc) {
    return `
    <div class = "featured-works-image-container">
    <img class="image-show-featured-works" src="${imgSrc}"></img>
    </div>
    <button class="close material-icons">cancel</button>
    `;
}

function showBigFeaturedWorksImg() {

    images.forEach((item) => {
        item.addEventListener('click', (event) =>{
            console.log(item.src)
            renderDarkeningBackground('src/images/bigImgBackground.jpg');
            imgAlert.innerHTML = showBigFeaturedWorksImage(item.src);
            event.preventDefault();
            document.querySelector('.image-show-featured-works').scrollIntoView({
            behavior: 'auto',
            block: 'center'
            })
            document.body.style.overflow = "hidden";
        });
    })

    imgAlert.addEventListener('click', () =>{
        document.querySelector('.image-show-featured-works').remove();
        document.querySelector('.darkening-background').remove();
        document.querySelector('.close').remove();
        document.body.style.overflow = "visible";
    });
}

showBigFeaturedWorksImg();