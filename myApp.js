require('dotenv').config();

let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name : {type : String , required : true },
  age : Number,
  favoriteFoods : [String]
});

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let jay = new Person({
    name:'jay',
    age:18,
    favoriteFoods: ['munchurian','noodles','chocolate-brownie'] 
  })

  jay.save((error, data)=>{
    if(error){
      console.error(error);
    }
    else{
      done(null,data);
    }
  })
};

let arrayOfPeople = [{
  name:'jarvis',
  age:1,
  favoriteFoods:['lithium','oil']
},
{
  name:'carry',
  age:1,
  favoriteFoods:['ramen','maggi']
},
{
  name:'rocky',
  age:1,
  favoriteFoods:['rocks','pebbles']
}]

const createManyPeople =function (arrayOfPeople, done){
  Person.create(arrayOfPeople, (err, data)=>{
    if(err){
      console.log(err);
    } 
    else {
      done(null, data);
  }
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};



/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
