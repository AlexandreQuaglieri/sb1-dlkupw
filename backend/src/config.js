import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://payloadcms:8vXsUX6mllh9L8Uo@cluster0.zbyil.mongodb.net/',
    dbName: 'admin',
  },
};

export default config;