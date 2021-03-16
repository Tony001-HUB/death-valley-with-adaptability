const mainContainer = document.querySelector('.main-container')

function renderDarkeningBackground() {
    const pageMaxWidth = document.documentElement.scrollWidth;
    const pageMaxHeight = document.documentElement.scrollHeight;
    mainContainer.innerHTML += `
    <div class = "darkening-background" style="width: ${pageMaxWidth}px; height: ${pageMaxHeight}px;"></div>
    `;
}

export default renderDarkeningBackground;