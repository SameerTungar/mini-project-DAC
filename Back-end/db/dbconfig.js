const mongoose = require('mongoose');

async function conn(){
    return await mongoose.connect(process.env.MONGOURI);
}

module.exports = {
    conn
}