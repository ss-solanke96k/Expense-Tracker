const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET /api/expenses - all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/expenses - create expense
router.post('/', async (req, res) => {
  const { title, amount, category, date } = req.body;
  if (!title || amount == null) return res.status(400).json({ message: 'title and amount are required' });

  const expense = new Expense({
    title,
    amount,
    category: category || 'Other',
    date: date ? new Date(date) : undefined
  });

  try {
    const saved = await expense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/expenses/:id - delete expense
router.delete('/:id', async (req, res) => {
  try {
    const exp = await Expense.findById(req.params.id);
    if (!exp) return res.status(404).json({ message: 'Expense not found' });
    await exp.remove();
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/expenses/summary - optional summary by category
router.get('/summary', async (req, res) => {
  try {
    const summary = await Expense.aggregate([
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $project: { _id: 0, category: '$_id', total: 1 } }
    ]);
    const totalSpent = summary.reduce((s, item) => s + item.total, 0);
    res.json({ totalSpent, byCategory: summary });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
