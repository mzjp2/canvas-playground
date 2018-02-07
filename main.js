document.addEventListener('DOMContentLoaded', function() {

  const canvas = document.querySelector('#draw');
  const body = document.querySelector('#body');
  const ctx = canvas.getContext('2d');
  canvas.width = body.offsetWidth;
  canvas.height = body.offsetHeight

  ctx.lineWidth = 10;

  var lastX = 0;
  var lastY = 0;
  var isDrawing = false;
  var hue = 0;
  var direction = true;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 10;


  function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    console.log(e);
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if(direction) {
      ctx.lineWidth++
    } else {ctx.lineWidth--}

    hue++

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
