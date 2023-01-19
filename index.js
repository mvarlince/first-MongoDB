// Let's connect to MongoDB and do some cool stuff

// Import our library (just the tools we need)
import { MongoClient } from "mongodb";

// Import our credentials to connect
import { uri } from "./secrets.js";

// Connect to our Mongo server
const client = new MongoClient(uri)
// Create a reference to our databse
const db = client.db("mongo0")

// Let's add a document to our collection

// Let's create a piece of furniture
const stool = {
    name: 'Ergo Stool',
    brand: 'Autonomous',
    color: 'Evergreen',
    price: 169.99,
    warranty: '2 years',
    isCool: true
}

const chair = {
    name: 'Ergo Chair',
    brand: 'Autonomous',
    color: 'Cobalt Blue',
    price: 69.99,
    warranty: '5 years',
    isCool: true
}


async function addOneItem(item){
await db.collection('items').insertOne(item)
   console.log('Item was added')
}

addOneItem(stool)
addOneItem(chair)