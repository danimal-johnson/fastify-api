const items = require('../Items');
const { getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/items');

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

  // Options for 'get single item'
  const postItemOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' }
        }
      },
      response: {
        201: Item
      }
    },
    handler: addItem
  }

  // Options for 'delete item'
  const deleteItemOpts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    },
    handler: deleteItem
  }

  // Options for 'modify item'
  const putItemOpts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        }
      },
      response: {
        200: Item
      }
    },
    handler: updateItem
  }


  // Get all items
  fastify.get('/items', getItemsOpts);
  
  // Get single item
  fastify.get('/items/:id', getItemOpts);
  
  // Add item
  fastify.post('/items', postItemOpts);

  // Delete item
  fastify.delete('/items/:id', deleteItemOpts);

  // Update item
  fastify.put('/items/:id', putItemOpts);

  done();
}

module.exports = itemRoutes;
