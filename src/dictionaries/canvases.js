var canvases = [
  'Web App',
  'REST API',
  'Android App',
  'iOS App',
  'Desktop App',
  'Framework',
  'DB'
];

export default function getRandomCanvas() {
  var canvas = canvases[Math.floor(Math.random()*canvases.length)];
  return canvas;
}