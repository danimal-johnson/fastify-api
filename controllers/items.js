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

const updateItem = (req, res) => {
  const {id} = req.params;
  const {name}  = req.body;

  // Find the existing ID and replace the array element with our new record.
  items = items.map(item => (item.id === id ? {id, name} : item));

  res.send(items.find(item => item.id === id));
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem
}

