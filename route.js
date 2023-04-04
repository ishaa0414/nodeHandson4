const route=require("express").Router()
const Bcrypt=require("bcrypt")
const saltround=10;
const arr=[];
route.post("/register",async(req,res)=>{
const data=req.body;
console.log((data))

const hashpassword= await Bcrypt.hash(data.password,saltround)

const obj={
    email:data.email,
    password:hashpassword
}
arr.push(obj)
res.send(arr)
})
route.post("/login",(req,res)=>{
    arr.forEach(async(data)=>{
       if(req.body.email===data.email){
const validate= await Bcrypt.compare(req.body.password,data.password)
if(validate){
res.send({msg:"login succcessful"})
}
else{
    res.send({msg:"password incorrect"})
}
       }
    })
})
module.exports=route;