var express=require("express"),
    router=express.Router()

router.get("/",function(req,res){
    res.sendFile("index.html",{root:__dirname+'/../views'});
})
module.exports=router    