const asyncHandler=require("express-async-handler");
//@desc-get all contacts
//route-GET/api/contacts
//@access public

const getcontacts=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all contact"});
});

//@desc-get all contacts
//route-GET/api/contacts
//@access public

const getcontact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get a contact ${req.params.id}`});
});

//@desc-get all contacts
//route-GET/api/contacts
//@access public

const createcontact=asyncHandler(async(req,res)=>{
    console.log("The body is ",req.body);
    const{name,email,phonenum}=req.body;
    if(!name||!email||!phonenum){
        req.status(400);
        throw new error("all fields are mandatory");
    }
    res.status(201).json({message:"create contact"});
});


//@desc-get all contacts
//route-GET/api/contacts
//@access public

const updatecontact=asyncHandler(async(req,res)=>{
    res.status(201).json({message:`update the content of ${req.params.id}`});
});

//@desc-get all contacts
//route-GET/api/contacts
//@access public

const deletecontact=asyncHandler(async(req,res)=>{
    res.status(201).json({message:`${req.params.id} gets deleted`});
});


module.exports={getcontacts,getcontact,updatecontact,createcontact,deletecontact}
