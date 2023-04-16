const video = {
  show: "Peaky Blinders",
  tag: [11, 22, 33, 44],
  showTags() {
    this.tag.forEach(function (tag) {
      console.log(this.show, tag);
    }, this);
  },
};
video.showTags();
