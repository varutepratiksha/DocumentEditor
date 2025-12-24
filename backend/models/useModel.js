var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://satyanandgupta845:Docify24@cluster0.pusn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    username: String,
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
