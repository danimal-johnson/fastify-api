const items = require('../Items');

const getItems = (req, res) => {
  res.send(items);
}

const getItem = (req, res) => {
  const {id} = req.params;
  res.send(items.find(item => item.id === id));
}

module.exports = {
  getItems,
  getItem
}