//your JS code here. If required.
const sizeInfo =  document.getElementById('sizeInfo')
let width = window.screen.width
let height = window.screen.height
let h1 = document.createElement('h1');
h1.innerText = `Width: ${width} and Height: ${height}`
sizeInfo.append(h1)