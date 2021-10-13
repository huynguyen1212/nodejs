const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, required: true, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  image: { type: String, maxlength: 255 },
  slug: { type: String, maxlength: 255 },
  videoId: { type: String, required: true, maxlength: 255 },
  level: { type: String, maxlength: 255 },
  slug: { type: String, slug: "name", unique: true }
}, {
  timestamps: true
});

//add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);