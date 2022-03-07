//Hanneka Rose C. Puri
//WD-201

const express = require('express');
const app = express();

// Figure 2. Code for the Express Application
app.get('/', (req,res) => {
  res.send('My New App!');
});

// Figure 3. Code for the resource
app.get('/api/heroes', (req, res) => {
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

// Figure 4. Single params code
app.get('/api/heroes/:id', (req, res) => {
  res.send(req.params.id);
});

// Figure 5. Multi params code
app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send(req.params);
});

//Figure 6. Query parameter code
app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send([req.params, req.query]);
});

app.listen(3000, () => console.log('Listening on port 3000'));
