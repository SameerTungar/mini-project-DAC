const express = require('express');
const router = express.Router();

const bedC = require('../controllers/bedController');

// http://localhost:4000/api/users/
// http://localhost:4000/api/users/Rohan
// http://localhost:4000/api/users/?name=Rohan

// for delete
// http://localhost:4000/api/users/j12h3k1j2h3k12k123

//for update(put)
// http://localhost:4000/api/users/61d27e0f6157d81b0caef223

router
.get("/",bedC.getBed)
//.get("/:username",bedC.getUserByName)
.post("/",bedC.postBed)
.delete("/:userid" , bedC.deleteBed)
.put("/:userid" , bedC.updateBed)

module.exports = router;