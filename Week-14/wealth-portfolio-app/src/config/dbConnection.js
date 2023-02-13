
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { connectDB };