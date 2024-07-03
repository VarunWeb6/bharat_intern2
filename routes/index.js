const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.get('/', async (req, res) => {
  const transactions = await Transaction.find({});
  res.render('index', { transactions });
});

router.post('/add', async (req, res) => {
  const { type, amount, description } = req.body;
  const newTransaction = new Transaction({ type, amount, description });
  await newTransaction.save();
  res.redirect('/');
});

module.exports = router;
