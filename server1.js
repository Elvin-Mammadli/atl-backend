const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require('./models/Users');
const UserRolesModel = require('./models/UsersRoles');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://elvin:19920719@cluster0.5p4yg.mongodb.net/xezertv?retryWrites=true&w=majority")
  .then(res => console.log("connected to mongodb"))
  .catch(err => console.log(err));

// --------------------------------------------------

app.get('/users', (req, res) => {
  UserModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.post('/users', async (req, res) => {
  const user = {
    fullName: req.body.fullName,
    username: req.body.username,
    position: req.body.position,
    password: req.body.password,
  }

  const newUser = new UserModel(user);
  await newUser.save();
  res.send(user)
})

app.patch('/users/:id', async (req, res) => {
  UserModel.updateOne({
    _id: req.params.id
  }, {
    $set: {
      username: req.body.username,
      position: req.body.position
    }
  })
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

app.delete('/users/:id', async (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id
  })
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

//-----------------------------------------

app.get('/userroles', (req, res) => {
  UserRolesModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.post('/userroles', async (req, res) => {
  const userRoles = req.body
  const newUserRoles = new UserRolesModel(userRoles);
  await newUserRoles.save();
  res.send(userRoles);
})














app.listen(process.env.PORT || 3003, () => {
  console.log('server works')
});