//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const RoverSchema = new Schema(
    {
        id: {
            type: Number
        },
        sol: {
            type: Number
        },
        camera: {
            id: {
                type: Number
            },
            name: {
                type: String
            },
            rover_id: {
                type: Number
            },
            full_name: {
                type: String
            }
        },
        img_src: {
            type: String
        },
        earth_date: {
            type: Date
        },
        rover: {
            id: {
                type: Number
            },
            name: {
                type: String
            },
            landing_date: {
                type: Date
            },
            launch_date: {
                type: Date
            },
            status: {
                type: String
            }
        }
    });


module.exports = mongoose.model('rover', RoverSchema);