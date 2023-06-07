const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');

const port = 3001;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Listening route port ${port}`);
});
