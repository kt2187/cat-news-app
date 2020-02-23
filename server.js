require('dotenv/config'); 
const mongoose = require("mongoose");
const app = require("./app");
const articles = require("./routes/articles");

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('could not connect to MongoDB...', err));

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port ${port}....`));