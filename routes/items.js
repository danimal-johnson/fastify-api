const items = require('../Items');
const { getItems, getItem } = require('../controllers/items');

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
    handler: getItems
  }

  // Options for 'get single item'
  const getItemOpts = {
    schema: {
      response: {
        200: Item
      }
    },
    handler: getItem
  }

  // Get all items
  fastify.get('/items', getItemsOpts);
  
  // Get single item
  fastify.get('/items/:id', getItemOpts);
  
  done();
}

module.exports = itemRoutes;
