class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = new Set();
  }
  howMany(listeners) {
    let oldSize = this.listeners.size;
    for (let str of listeners) {
      this.listeners.add(str.toLowerCase());
    }

    return this.listeners.size - oldSize; //current size - oldSize = new size
  }
}
const mountMoose = new Song("Mount Moose", "The Snazzy Moose");

mountMoose.howMany(["John", "Fred", "BOb", "carl", "RyAn"]);
mountMoose.howMany(["JoHn", "Luke", "AmAndA"]);
