const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hncbqqn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// middlewares
const logger = (req, res, next) => {
  console.log("log: info", req.method, req.url);
  next();
};

const verifyJWT = (req, res, next) => {
  const token = req?.cookies?.token;
  console.log("token from verify jwt", token);
  if (!token) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  // console.log('token inside verify jwt', token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
    if (error) {
      return res
        .status(403)
        .send({ error: true, message: "unauthorize access" });
    }
    req.decode = decode;
    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db("carDoctor").collection("services");

    const bookingCollection = client.db("carDoctor").collection("bookings");

    // jwt
    app.post("/jwt", logger, async (req, res) => {
      try {
        // Assuming req.body contains user information (e.g., username)
        const user = req.body;

        // Replace 'your-secret-key' with your actual secret key
        const token = jwt.sign(user, "your-secret-key", {
          expiresIn: "1h",
        });

        // Set the JWT as an HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: true, // Use 'false' for non-HTTPS development
          sameSite: "none", // Adjust based on your requirements
        });

        res.status(200).json({ success: true, token: token });
      } catch (error) {
        console.error("Error creating and sending JWT:", error);
        res
          .status(500)
          .json({ success: false, message: "Failed to create and send JWT" });
      }
    });

    app.post("/logout", (req, res) => {
      // Clear the JWT cookie by setting it to an empty value and expiring it immediately
      res.clearCookie("token");

      // Send a response indicating successful logout
      res.status(200).json({ success: true, message: "Logout successful" });
    });

    // all services related data in here
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // specific item to find by id
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, service_id: 1, img: 1 },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // send data to server from client site bookings

    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    // get the data form server to show on client with sort or query
    app.get('/bookings', logger, verifyToken, async (req, res) => {
        console.log(req.query.email);
        console.log('token owner info', req.user)
        if(req.user.email !== req.query.email){
            return res.status(403).send({message: 'forbidden access'})
        }
        let query = {};
        if (req.query?.email) {
            query = { email: req.query.email }
        }
        const result = await bookingCollection.find(query).toArray();
        res.send(result);
    })

    /*
        app.get('/bookings',async(req,res)=>{
            console.log(req.query.email)
            let query = {};
            if(req.query?.email){
                query = {email:req.query.email}
            }
           const result = await bookingCollection.find(query).toArray();
            res.send(result)
        })
        */

    //delete
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Doctor is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
