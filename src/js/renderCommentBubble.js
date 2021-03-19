const imgTeams = document.querySelectorAll('.popup-small-team-img')

function renderCommentBubble(className, personName) {
    return `
    <div id = "comment_bubble" class="${className}-comment"><font class="text-font-merriweather">${personName} / UI Designer<br> Rand text <br> ... </font> 
            <br>
            <br>
            <br>
            <br>
            <img class="small-team-icon-pinter" src="src/images/pinter.png"> 
            <img class="small-team-icon-twiter" src="src/images/twiter.png">
            <img class="small-team-icon-facebook" src="src/images/facebook.png">
            <img class="small-team-icon-facebook-copy" src="src/images/copy.png">
    </div>
    `;
}

function createCommentBubble() {
    let imgClassName = '';
    console.log(imgTeams);
    
    imgTeams.forEach((item) => {
        item.addEventListener('mouseover', () =>{
            imgClassName = item.className.split(' ')[0];
            document.querySelector(`.small-team__container-img`).insertAdjacentHTML('beforeend', renderCommentBubble(imgClassName, item.dataset.name));
        });
    })

    imgTeams.forEach((item) => {
        item.addEventListener('mouseout', () =>{
            document.querySelector(`.${imgClassName}-comment`).remove();
        });
    })
}

createCommentBubble();