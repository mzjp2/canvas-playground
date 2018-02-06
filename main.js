document.addEventListener('DOMContentLoaded', function() {

  const canvas = document.querySelector('#draw');
  const body = document.querySelector('#body');
  const ctx = canvas.getContext('2d');
  canvas.width = body.offsetWidth;
  canvas.height = body.offsetHeight

  document.querySelector('#button1').onclick = setColour;

  function setColour() {
    var obj = document.querySelector('#mySelect');
    var col = obj.options[obj.selectedIndex].text;
    if (col == "red"){ctx.strokeStyle = '#FF0000'}
    if (col == "blue"){ctx.strokeStyle = '#0000FF'}
    //ctx.strokeStyle = '#BADA55';
  }

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

})
