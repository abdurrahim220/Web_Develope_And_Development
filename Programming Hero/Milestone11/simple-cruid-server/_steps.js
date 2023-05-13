/**
 * -------------------
 * mongodb connection
 * ------------
 * create account
 * create an user with password
 * whitelist ip address
 * database > connection> driver > Node > show all code
 * change the password the uri
 * ------------------------
 * 1.create ---- post
 * 2.app.post('users',async(req,res)=>{})
 * 3.make the function async to use await inside it
 * 4.make sure you use the express.json() middleware
 * 5.access data from the body : const user = req.body
 * 6.const result = await userCollection.insertOne(user);
 * 7.res.send(result)
 * 
 * 
 */


/**
 * -----------------
 * client
 * ----------------
 * create fetch
 * add second parameter as an object
 * provide method 'post'
 * add headers : {'content-type' : 'application/json'}
 * add boyd: JSON.Stringify(user)
 *   
 */

/**
 * ---------------
 * read many
 * -----------------
 * 
 * 1.create a cursor = userCollection.find();
 * 2.const result = await cursor.toArray()
 * 
 * 
 * ------------------
 * delete
 * -----------------------
 * 1.create app.delete('/user/:id', async(req,res)=>{})
 * 2.specify unique objectId to delete the right user 
 * 3.const query = { _id : new Object(id)}
 * 4.const result = await new userCollection.deleteOne(query)
 * 
 * -------
 * Client
 * -------
 * 1.create a dynamic url with id
 * 2.mention the delete method
 */
