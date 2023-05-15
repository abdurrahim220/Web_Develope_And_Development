const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');

const port = process.env.PORT || 5000;

//middleware 

app.use(cors());
app.use(express.json())

/**
 * userManagementPractice
 * m1gM0CsZXx4ITBSe
 */

// mongodb server all code 


const uri = "mongodb+srv://userManagementPractice:m1gM0CsZXx4ITBSe@cluster0.hncbqqn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db('userManagerDB').collection('userManager');


        // add information form client to server 
        app.post('/userInfo', async (req, res) => {
            const addInfo = req.body;
            console.log(addInfo);
            const result = await userCollection.insertOne(addInfo);
            res.send(result)
        });

        // get server information to client 
        app.get('/userInfo', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray(cursor);
            res.send(result);
        });

        // delete operation 
        app.delete('/userInfo/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });

        //data update operation

        app.put('/userInfo/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upset: true }
            updateUserInfo = req.body;
            const newUserInfo = {
                $set: {
                    name: updateUserInfo.name,
                    email: updateUserInfo.email,
                    gender: updateUserInfo.gender,
                    status: updateUserInfo.status
                }
            }
            const result = await userCollection.updateOne(filter, newUserInfo, options);
            res.send(result);
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("This is practice server");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})