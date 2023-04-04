const express=require("express");
const app=express();
const route=require("./route")
const cors=require("cors")
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use(route)
app.listen(4465,()=>{
    console.log("server is running")
})