const items = require('../Items');

function itemRoutes (fastify, options, done) {

  // Item schema
  const Item = {
    type: 'object',
    properties: {
      id: {type: 'string'},
      name: {type: 'string'}
    }
  }

  // Options for 'get all items'
  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item  
        }
      }
    },
    handler: function (req, res) {
      res.send(items)
    }
  }

  // Options for 'get single item'
  const getItemOpts = {
    schema: {
      response: {
        200: Item
      }
    },
    handler: function (req, res) {
      const {id} = req.params;
      res.send(items.find(item => item.id === id));
    }
  }

  // Get all items
  fastify.get('/items', getItemsOpts);
  
  // Get single item
  fastify.get('/items/:id', getItemOpts);
  
  done();
}

module.exports = itemRoutes;
