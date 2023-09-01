const {constants}=require("../constants/constants");
const errorHandler=(err,req,res,next)=>{
    const statuscode=res.statuscode ? res.statuscode:500;

    switch(statuscode){
        case constants.Not_Found:
            res.json({title:"not found",message:err.message,stackTrace:err.stack});
            break;

        case constants.Unauthorized:
                res.json({title:"unauthorized",message:err.message,stackTrace:err.stack});
                break;
        case constants.Forbidden:
            res.json({title:"forbidden",message:err.message,stackTrace:err.stack});
                    break;
        case constants.Validation_Error:
            res.json({title:"validation",message:err.message,stackTrace:err.stack});
            break; 

        case constants.server_error:
                res.json({title:"servererror",message:err.message,stackTrace:err.stack});
                break; 
        default:
            console.log("No error All good");
            break;      
                
                
    };
   
};

module.exports=errorHandler;