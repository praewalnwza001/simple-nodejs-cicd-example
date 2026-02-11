const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Sawasdee Zin! Exam Passed 100%</h1><p>Jenkins to Vercel Success!</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});