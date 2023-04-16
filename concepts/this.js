// Method => object

const video = {
  show: "Peaky Blinders",
  printShow() {
    console.log(this);
  },
};

// video.printShow(); //  { show: 'Peaky Blinders', printShow: [Function: printShow] }

video.stop = function () {
  console.log(this);
};

// video.stop();
// {
// show: 'Peaky Blinders',
// printShow: [Function: printShow],
// stop: [Function (anonymous)]
// }

function Video(show) {
  this.show = show;
  console.log(this);
}

const v = new Video("Vampire Diaries");
