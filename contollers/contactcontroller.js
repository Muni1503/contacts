const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
//@desc-get all contacts
//route-GET/api/contacts
//@access private

const getcontacts=asyncHandler(async(req,res)=>{
    contacts=await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});

//@desc-get all contacts
//route-GET/api/contacts
//@access private

const getcontact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});

//@desc-get all contacts
//route-GET/api/contacts
//@access private

const createcontact=asyncHandler(async(req,res)=>{
    console.log("The body is ",req.body);
    const{name,email,phone}=req.body;
    if(!name||!email||!phone){
        req.status(400);
        throw new error("all fields are mandatory");
    }

    const contact=await Contact.create({
        name,//if we donot define name earlier then it will be req.body.name
        email,
        phone,
        user_id:req.user.id,
    })
    res.status(201).json(contact);
});


//@desc-get all contacts
//route-GET/api/contacts
//@access private

const updatecontact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }

    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("user donot have permission to update another user contacts");

    }

    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(201).json(updatedContact);
});

//@desc-get all contacts
//route-GET/api/contacts
//@access private

const deletecontact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const result = await Contact.deleteOne({ _id: contact });

    if (result.deletedCount === 0) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("user donot have permission to delete another user contacts");

    }
    await Contact.deleteOne({_id:req.params.id});

    res.status(204).json(contact);
});


module.exports={getcontacts,getcontact,updatecontact,createcontact,deletecontact}
