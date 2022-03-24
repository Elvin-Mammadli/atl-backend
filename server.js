const fs = require('fs')
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db.json');
// const db1 = require('./db1.json');

app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false}))

app.get('/users', (req, res) => {
  res.send(db.users)
})

app.get('/employeesAll', (req, res) => {
  res.send(db.employeesAll)
})

app.get('/login', (req, res) => {
  res.send(db.login)
})

app.get('/lastQueries', (req, res) => {
  res.send(db.lastQueries)
})

app.get('/myQueries', (req, res) => {
  res.send(db.myQueries)
})

app.get('/employees', (req, res) => {
  res.send(db.employees)
})

app.get('/anniversary', (req, res) => {
  res.send(db.anniversary)
})

app.get('/dayOff', (req, res) => {
  res.send(db.dayOff)
})

app.get('/vacation', (req, res) => {
  res.send(db.vacation)
})

app.get('/birthday', (req, res) => {
  res.send(db.birthday)
})

app.get('/trip', (req, res) => {
  res.send(db.trip)
})

app.get('/advertisements', (req, res) => {
  res.send(db.advertisements)
})

app.get('/vacationBalance', (req, res) => {
  res.send(db.vacationBalance)
})

app.get('/queries', (req, res) => {
  res.send(db.queries)
})

app.get('/userroles', (req, res) => {
  res.send(db.userroles)
})

app.listen(process.env.PORT || 3003, () => {
  console.log('server works')
});