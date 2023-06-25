const express = require('express');
const dotenv = require('dotenv').config()
const app = express();

const port = process.env.PORT || 5000;


app.get('/api/contacts',(req,res)=>{
    // res.json({message:"This is json format"})
    res.send("TR")
})

// app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
