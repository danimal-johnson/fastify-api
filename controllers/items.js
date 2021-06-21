const { v4:uuidv4 } = require('uuid');
let items = require('../Items');

const getItems = (req, res) => {
  res.send(items);
}

const getItem = (req, res) => {
  const {id} = req.params;
  res.send(items.find(item => item.id === id));
}

const addItem = (req, res) => {
  const { name } = req.body;
  const newItem = {
    id: uuidv4(),
    name
  }
  items.push(newItem);

  res.code(201).send(newItem);
}

const deleteItem = (req, res) => {
  const {id} = req.params;
  items = items.filter(item => item.id !== id);
  res.send({ message: `Item ${id} successfully deleted.` });
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem
}

