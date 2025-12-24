const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pratikshavarute05_db_user:document@123@documenteditor.r01zxdn.mongodb.net/?appName=DocumentEditor")

  .then(console.log("Connected"))
  .catch((error) => console.log(error))

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