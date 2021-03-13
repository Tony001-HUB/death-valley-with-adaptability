function render(arr) {
    return `
    <img class="${arr.name}-${arr.id}  popup-${arr.name} img" src="${arr.image}">
    `;
}

export default render;