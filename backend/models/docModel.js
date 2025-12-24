const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://satyanandgupta845:Docify24@cluster0.pusn8.mongodb.net/?appName=Cluster0")
.then(console.log("Connected"))
.catch((error)=> console.log(error))

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', docSchema);