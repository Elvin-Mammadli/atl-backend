const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { AdvertisementModel, AnniversaryModel, BirthdayModel, DayOffModel, EmployeesAllModel, EmployeesModel, LastQueriesModel, MyQueriesModel, QueriesModel, TripModel, UserModel, UserRolesModel, VacationBalanceModel, VacationModel } = require('./models')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://elvin:19920719@cluster0.5p4yg.mongodb.net/xezertv?retryWrites=true&w=majority")
  .then(res => console.log("connected to mongodb"))
  .catch(err => console.log(err));


// --------------------------------------------------

app.get('/employeesAll', (req, res) => {
  EmployeesAllModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/vacation', (req, res) => {
  VacationModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/trip', (req, res) => {
  TripModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/lastQueries', (req, res) => {
  LastQueriesModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/myQueries', (req, res) => {
  MyQueriesModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/employees', (req, res) => {
  EmployeesModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/anniversary', (req, res) => {
  AnniversaryModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/dayOff', (req, res) => {
  DayOffModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/advertisements', (req, res) => {
  AdvertisementModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/birthday', (req, res) => {
  BirthdayModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/vacationbalance', (req, res) => {
  VacationBalanceModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

app.get('/queries', (req, res) => {
  QueriesModel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

//--------------------------------------------

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