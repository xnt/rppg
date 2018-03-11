var technologies = [
  'Rails',
  'Node',
  'Java',
  'C#',
  'C',
  'Go'
];


export default function getRandomTechnology() {
  var tech = technologies[Math.floor(Math.random()*technologies.length)];
  return tech;
}