const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://roman:roman123@ds161391.mlab.com:61391/legacy-project`
);

let db = mongoose.connection;
db.once('open', () => {
  console.log('the database is up and running');
});
/*
mlab login info:
parkermuir
moodvie1
*/

// stores the username, password and history of that user's watched movies and what they tagged them with
let UserSchema = mongoose.Schema({
  username: {
    type: String,
    uniq: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: String,
  history: {
    type: Array,
    default: [],
    required: true
  },
  purchased: {
    type: Array,
    default: []
  },
  theme: String
});

// Lists the information from the API about the movie
// Also lists the total times a movie has been listed with a given mood
let MovieSchema = mongoose.Schema({
  id: Number,
  original_title: String,
  poster_path: String,
  release_date: Number,
  overview: String,
  whimsical: Number,
  intense: Number,
  thriller: Number,
  heartfelt: Number,
  gripping: Number,
  boring: Number,
  "thought provoking": Number,
  uplifting: Number,
  light: Number,
  "tear jerker": Number,
  challenging: Number,
  "mind screw": Number,
  nostalgic: Number,
  powerful: Number,
  despair: Number,
  exhausting: Number,
  paranoid: Number,
  motivated: Number,
  uncomfortable: Number,
  review_count: Number
});

let PurchasedSchema = mongoose.Schema({
  id: Number,
  original_title: String,
  poster_path: String,
  release_date: String,
  overview: String,
  trailer: String
});

let User = mongoose.model('User', UserSchema);
let Movie = mongoose.model('Movie', MovieSchema);
let Purchased = mongoose.model('Purchased', PurchasedSchema);

module.exports = {
  db,
  User,
  Movie,
  Purchased
}