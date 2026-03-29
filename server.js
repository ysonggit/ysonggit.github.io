const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from root directory but exclude sensitive files
app.use(express.static(__dirname, {
  dotfiles: 'deny',
  index: 'index.html',
  redirect: true
}));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});