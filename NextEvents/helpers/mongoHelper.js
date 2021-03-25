import { MongoClient } from 'mongodb'

const connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

const connectDatabase = async () => {
  return MongoClient.connect(connectionString, 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
}

export const insertDocument = async (collection, data) => {
  const client = await connectDatabase()
  let result;

  try {
    result = await client.db().collection(collection).insertOne(data)
  } finally {
    await client.close();

    return result
  }
}

export const getOneDocument = async (collection, query = {}, options = {}) => {
  const client = await connectDatabase()
  let result;

  try {
    result = await client.db().collection(collection).findOne(query, options)
  } finally {
    await client.close();

    return result;
  }
}

export const getAllDocuments = async (collection, query = {}, options = {}) => {
  const client = await connectDatabase()
  let result;

  try {
    result = await client.db().collection(collection).find(query, options).toArray()
  } finally {
    await client.close();

    return result;
  }
}
