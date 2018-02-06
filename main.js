const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 10;

var lastX = 0;
var lastY = 0;
var isDrawing = false;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';


function draw(e) {
  if(!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  console.log(e);
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

addEventListener('mousedown', (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
  isDrawing = true;
});
addEventListener('mouseup', () => isDrawing = false);
addEventListener('mouseout', () => isDrawing = false);
addEventListener('mousemove', draw)
