function renderFooterImg(arr) {
    return `
    <img class="${arr.name}-${arr.id}  popup-${arr.name}" src="${arr.image}">
    `;
}

export default renderFooterImg;