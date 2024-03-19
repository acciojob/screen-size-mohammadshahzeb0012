//your JS code here. If required.
const sizeInfo =  document.getElementById('sizeInfo')

function updateSizeInfo (params) {
	let width = window.screen.width
let height = window.screen.height
   sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}
updateSizeInfo()
window.addEventListener('resize', updateSizeInfo);