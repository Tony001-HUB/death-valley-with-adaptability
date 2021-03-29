const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
       throw new Error(`Error status:" ${res.status} from ${res.url}`)
    }

    return await res.json();
}

function bindData() {
    getData('db.json')
        .then(data => data.person.forEach(item => { 
            document.querySelector(".small-team_content").insertAdjacentHTML('beforeend', `
            <li class="height-content">
            <div class="height-content">
            <img class="small-team_img" src="${item.img}" alt="alt">
            <div class="small-team_container">
            <span class="small-team_text">
                <p class="small-team__text-merriweather-bubble">${item.name} / <span class="small-team__text-merriweather-italic">${item.position}</span><br></p>
                <p class="small-team__text-raleway">  Lorem Ipsum is not simply is an
                action designer random text 
                It has roots in a piece</p>
            </span>
            <span class="small-team_icon">
                <a type="button" class="small-team__btn"><i class="fa fa-facebook"></i></a>
                <a type="button" class="small-team__btn"><i class="fa fa-twitter"></i></a>
                <a type="button" class="small-team__btn"><i class="fa fa-pinterest"></i></a>
                <a type="button" class="small-team__btn"> <i class="fa fa-envelope-o"></i> </a>
            </span>
            </div>
            </div>
            </li>`
        );
        }));
}
bindData();