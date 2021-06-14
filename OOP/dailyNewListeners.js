class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.watchers = new Set();
  }
  howMany(watchers) {
    let size = this.watchers.size;
    for (let str of watchers) {
      this.watchers.add(str.toLowerCase());
    }
    return this.watchers.size - size;
  }
}
const mountMoose = new Song("Mount Moose", "The Snazzy Moose");

mountMoose.howMany(["John", "Fred", "BOb", "carl", "RyAn"]);
mountMoose.howMany(["JoHn", "Luke", "AmAndA"]);
