db.createCollection('customers', {validator: {$jsonSchema: {bsonType: 'object',title: 'customers',required: ['name','nif','register_date'],properties:{name:{bsonType: 'string'},address:{bsonType: 'object',title: 'object',properties:{street:{bsonType: 'string'},num:{bsonType: 'int'},floor:{bsonType: 'int'},door:{bsonType: 'int'},city:{bsonType: 'string'},postal_code:{bsonType: 'string'},country:{bsonType: 'string'}}},phone:{bsonType: 'string'},email:{bsonType: 'string'},nif:{bsonType: 'string'},register_date:{bsonType: 'date'},recomendator:{bsonType: 'objectId'},sales:{bsonType: 'object',title: 'object',properties:{supplier:{bsonType: 'objectId'},brand:{bsonType: 'string'},graduation:{bsonType: 'object',title: 'object'},color_glass:{bsonType: 'object',title: 'object'},frame:{enum: },color_frame:{bsonType: 'string'},price:{bsonType: 'decimal'},employee:{bsonType: 'objectId'},sale_date:{bsonType: 'date'}}}}}}});