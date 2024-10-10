const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route dasar
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
