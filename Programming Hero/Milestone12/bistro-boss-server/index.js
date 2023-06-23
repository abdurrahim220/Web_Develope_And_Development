require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())
app.use(express.json())

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorize access' })
  }
  //bearer token
  const token = authorization.split(' ')[1]

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: 'unauthorize access' })
    }
    req.decoded = decoded;
    next();
  })
}

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hncbqqn.mongodb.net/?retryWrites=true&w=majority`;

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


    const userCollection = client.db('bistroDB').collection('user');
    const menuCollection = client.db('bistroDB').collection('menu');
    const reviewCollections = client.db('bistroDB').collection('reviews');
    //? to store shopping details or browse details
    const cartCollections = client.db('bistroDB').collection('cart');


    // JWT TOKEN
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
      })

      res.send({ token })
    })

    // verify admin

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      if (user?.role === 'admin') {
        return res.status(403).send({ error: true, message: 'Forbidden message' });
      }
      next();

    }

    /**
     * 0.do not show secure link to show those to other based on data
     * 1.use jwt token: verifyToken
     * 2.use verifyAdmin middleware
     * 
     */

    // user related apis
    app.get('/users', verifyJWT, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists" });
      }
      console.log("existing user ", existingUser);
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    // update user 
    //security layer : verify JWT
    //email send
    //check admin
    app.get('/users/admin/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== false) {
        res.send({ admin: false })
      }
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const result = { admin: user?.role === 'admin' }
      res.send(result);
    })


    app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new Object(id) };
      const updateDoc = {
        $set: {
          role: 'admin'
        },
      };

      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result)
    })


    //menu apis
    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result)
    })
    app.get('/reviews', async (req, res) => {
      const result = await reviewCollections.find().toArray();
      res.send(result)
    })


    // ! cart collection
    app.post('/carts', async (req, res) => {
      const item = req.body;
      // console.log(item);
      const result = await cartCollections.insertOne(item);
      res.send(result);
    })
    // get cart result 
    app.get('/carts', verifyJWT, async (req, res) => {
      const email = req.query.email;
      // console.log(email);
      if (!email) {
        res.send([])
      }

      const decodedEmail = req.decoded.email;
      if (email !== decodedEmail) {
        return res.status(404).send({ error: true, message: 'forbidden access' })
      }

      const query = { email: email };

      const result = await cartCollections.find(query).toArray();
      res.send(result)


    });

    // get delete cart item
    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: id }
      const result = await cartCollections.deleteOne(query)
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
  res.send("Bistro Boss Sever is Running");
})

app.listen(port, () => {
  console.log(`Bistro boss is running on ${port}`);
})


/**
 * ---------------
 *  
 * Naming Convention
 * 
 * ------------------
 * 
 * users: userCollection
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.patch('/users/:id')
 * app.put('/users/:id')
 * app.delete('/users/:id')
 * 
 */