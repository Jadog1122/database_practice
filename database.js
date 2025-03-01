import mongoose from 'mongoose'

// Define a Schema 
const CatSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    lives: {type: Number, required: true}
})

// Schema define the shgape of documents in MONGODB 
// Enforce these constraints ensures that only valid data can be stored 


//Create a Model
const Cat = mongoose.model('Cat', CatSchema)
// Naming rules: mongoose automatically converts 'Cat' to 'cats' as the mongoDB collection name 


//Connecting to MongoDb
mongoose.connect('mongodb://localhost/sp25')

//Create a Document
const c = new Cat({name:'Cat stevens', lives:5})
const saveCat = await c.save()
console.log(saveCat)
// Create a new document c using Cat model 
// .save() persists the document to MongoDB and returns the saved object 


//query the database
const cats = await Cat.find({})
console.log(cats)