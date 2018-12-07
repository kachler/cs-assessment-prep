const Data = require('../models/dataModel');

function getData(req, res) {
    console.log('get called');
}

function postData(req, res) {
  console.log('post called');
}

module.exports = { getData, postData };
