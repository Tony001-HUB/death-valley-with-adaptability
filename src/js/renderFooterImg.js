function renderFooterImg(arr) {
    return `
    <img class="${arr.name}-${arr.id}  popup-${arr.name}" src="${arr.image}">
    `;
}

export default renderFooterImg;

function renderFooterBootstrapIcon() {
    return `
	<ul>
	<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
	<li><a href="#"><i class="fab fa-instagram"></i></a></li>
	<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
	<li><a href="#"><i class="fab fa-twitter"></i></a></li>
    </ul>
    `;
}

export {renderFooterBootstrapIcon};