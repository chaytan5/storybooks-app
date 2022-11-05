const mongoose = require("mongoose");

async function connectDB() {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`DB connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;
