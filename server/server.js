const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const dataController = require('./controllers/dataController');

// USE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// Serving a static file using express.static
app.use(express.static(path.resolve(__dirname, '../client')));

// ROUTES
app.get('/get', dataController.getData);
app.post('/post', dataController.postData);

// Serving a html and css file using res.sendFile
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });
// app.get('/styles.css', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/styles.css'));
// });

// Serving a static file using fs.readFile to retrieve the html file from the filesystem
// const site = fs.readFileSync(path.resolve(__dirname, '../client/index.html'));
// app.get('/', (req, res) => {
//   fs.readFile(path.resolve(__dirname, '../client/index.html'), (error, pgRes) => {
//     if (error) {
//       res.writeHead(404);
//       res.write('Contents you are looking are Not Found');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(pgRes);
//     }
//     res.end();
//   });
// });

app.listen(3000, () => console.log(`Server listening on port ${port}...`));
