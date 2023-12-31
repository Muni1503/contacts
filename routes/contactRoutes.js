const express=require("express");
const router=express.Router();
const{getcontacts,getcontact,updatecontact,createcontact,deletecontact}=require("../contollers/contactcontroller");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getcontacts);

router.route("/").post(createcontact);

router.route("/:id").get(getcontact);

router.route("/:id").put(updatecontact);

router.route("/:id").delete(deletecontact);

module.exports=router;