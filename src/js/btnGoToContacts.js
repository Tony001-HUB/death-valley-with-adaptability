const contactUsBtn = document.querySelector('.header__btn'),
      contactSection = document.querySelector('.contacts');


function goToSpecificPageCoordinates(listeningElement, whichElementMove) {
    listeningElement.addEventListener('click', (event) => {
        event.preventDefault();
        whichElementMove.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
}
goToSpecificPageCoordinates(contactUsBtn, contactSection);
