const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from root directory but exclude sensitive files
app.use(express.static(__dirname, {
  dotfiles: 'deny',
  index: false,
  redirect: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});