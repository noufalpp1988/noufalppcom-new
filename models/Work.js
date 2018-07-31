var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    projCategory: String,
    projTitle: String,
    projDomain: String,
    projDuration: String,
    projTech: String,
    projCompany: String,
    projDescription:String,
    projRole:String,
    projDate: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Work', projectSchema);