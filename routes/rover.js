var express = require('express');
var router = express.Router();
var Rover = require('../models/rover')
const axios = require("axios");
/* GET home page. */
router.get('/', async function (req, res, next) {
  let res_ = await sendRequest(req.query)
  await Rover.insertMany(res_.data.photos)
  res.send({ "status": 200 });
});

router.get('/aggregation', async function (req, res, next) {
  let rover_name = 'Opportunity';
  if (req.query.rover_name) rover_name = req.query.rover_name
  const rover = await Rover.aggregate([
    { $match: { "rover.name": rover_name } },
    { $sort: { "rover.launch_date": -1 } },
    {
      $group: {
        _id: "$rover.name", "images": {
          "$push": {
            "image": "$img_src",
            "launch_date": "$rover.launch_date",
            "earth_date": "$earth_date",
          },
        },
      }
    }
    
  ])

res.send({ "status": 200, data: rover })
});



async function sendRequest(params) {
  try {
    let result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${params.type}/photos?sol=${params.sol}&api_key=DEMO_KEY`)
    return result;
  } catch (err) {
    console.log(err)
    //throw error
  }

}


module.exports = router;
