//video background
const desktopVideoSource = document.querySelector(".desktop-video > source");
const mobileVideoSource = document.querySelector(".mobile-video > source");

const desktopVideo = document.querySelector(".desktop-video");
const mobileVideo = document.querySelector(".mobile-video");
//clickable element
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

//array of video names

videos = [
  "https://media.istockphoto.com/videos/people-are-jumping-with-their-hands-up-holding-their-smartphones-and-video-id1166983946",
  "https://media.istockphoto.com/videos/sound-spectrum-loop-video-id1180768691",
  "https://media.istockphoto.com/videos/portrait-of-a-girl-who-listening-to-music-in-earphones-and-dancing-video-id1181820413",
  "https://media.istockphoto.com/videos/enjoy-woman-bikini-walking-at-swimming-pool-her-listening-music-happy-video-id1187489906",
  "https://media.istockphoto.com/videos/technology-digital-wave-background-concept-video-id1175377014"
];

one.addEventListener("mouseover", () => {
  desktopVideoSource.src = videos[0];
  mobileVideoSource.src = videos[0];
  desktopVideo.load();
  mobileVideo.load();
});
two.addEventListener("mouseover", () => {
  desktopVideoSource.src = videos[1];
  mobileVideoSource.src = videos[1];
  desktopVideo.load();
  mobileVideo.load();
});
three.addEventListener("mouseover", () => {
  desktopVideoSource.src = videos[2];
  mobileVideoSource.src = videos[2];
  desktopVideo.load();
  mobileVideo.load();
});
four.addEventListener("mouseover", () => {
  desktopVideoSource.src = videos[3];
  mobileVideoSource.src = videos[3];
  desktopVideo.load();
  mobileVideo.load();
});
five.addEventListener("mouseover", () => {
  desktopVideoSource.src = videos[4];
  mobileVideoSource.src = videos[4];
  desktopVideo.load();
  mobileVideo.load();
});
