var topics = [
  'chat',
  'URL shortener',
  'To-Do',
  'notepad',
  'journal'
];

export default function getRandomTopic() {
  var topic = topics[Math.floor(Math.random()*topics.length)];
  return topic;
}