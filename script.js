//your code here
// Get the canvas element and its context
const canvas = document.getElementById('clock');
const context = canvas.getContext('2d');

// Set the radius of the clock
let radius = canvas.height / 2;

// Move the origin of the canvas to the center of the clock
context.translate(radius, radius);

// Reduce the radius to make sure the hands don't go beyond the edges of the clock
radius = radius * 0.90;

// Draw the clock face
function drawClock() {
  context.beginPath();
  context.arc(0, 0, radius, 0, 2 * Math.PI);
  context.fillStyle = '#222';
  context.fill();

  context.beginPath();
  context.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  context.fillStyle = '#fff';
  context.fill();
}

// Draw the hour, minute and second hands
function drawHand(position, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = 'round';
  context.moveTo(0, 0);
  context.rotate(position);
  context.lineTo(0, -length);
  context.stroke();
  context.rotate(-position);
}

function drawHands() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourPosition = (hour * 30) + (minute / 2);
  const minutePosition = (minute * 6) + (second / 10);
  const secondPosition = second * 6;

  drawHand(hourPosition, radius * 0.5, radius * 0.07);
  drawHand(minutePosition, radius * 0.8, radius * 0.07);
  drawHand(secondPosition, radius * 0.9, radius * 0.02);
}

// Call the drawClock() and drawHands() functions every second
setInterval(() => {
  context.clearRect(-radius, -radius, canvas.width, canvas.height);
  drawClock();
  drawHands();
}, 1000);
