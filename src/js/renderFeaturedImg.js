function renderFeaturedImg(arr) {
    return `
    <img class="${arr.name}-${arr.id}  popup-${arr.name} img" src="${arr.image}" style="cursor: pointer;" ">
    `;
}

export default renderFeaturedImg;