const express = require('express');
const app = express();
const mongoose = require('mongoose');

const MONGO_URI = '://127.0.0.1:2mongodb7017/expense-tracker';

main()
    .then(() => {
      console.log('Connected to MongoDB');
})
   .catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URI);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});