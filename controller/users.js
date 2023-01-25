const mongodb = require("../mongodb-config")

let Users = {}

Users.login = async (req, res) => {
  try {
    // call mongodb
    const db = await mongodb();

    // destructure data from request body
    const { username, password } = req.body

    // query data
    const [user] = await db.find({ username: username, password: password}).toArray();
    
    if (!user) {
      throw {message: "username and password not found!"}
    }

    delete user.password
  
    res.status(200).json({statusCode: 200, message: "successfully login!", data: user});
  } catch (error) {
    res.status(200).json({statusCode: 422, message: error.message});
  }
}

Users.register = async (req, res) => {

  try {
    // call mongodb
    const db = await mongodb();

    // destructure data from request body
    const {username, password, first_name, last_name, age, gender, birth_date} = req. body;
  
    let collectionDataRegister = {
      username,
      password,
      first_name,
      last_name,
      age,
      gender,
      birth_date
    }

     // query data
     const [user] = await db.find({ username: username }).toArray();
    
     if (user) {
       throw {message: "username already exists!"}
     }
  
    // query
    await db.insertOne(collectionDataRegister);
  
    res.status(200).json({statusCode: 200, message: "successfully registered!"});
  } catch (error) {
    res.status(200).json({statusCode: 422, message: error.message});
  }
}
module.exports = Users