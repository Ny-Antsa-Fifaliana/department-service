const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');
dotenv.config();

const app = express();
const http = require('http').Server(app);


const apiRoutes = require("./routes/api")

app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

db.sequelize.sync({ force: false})
  .then(async () => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Error syncing db: ", err.message);
  });


app.get('/', (req, res) => {
    res.json({ message: 'Hello World from department service API! 🌈🌈' });
});
app.use('/api', apiRoutes);

http.listen(process.env.PORT, () =>
    console.log(`App listening on http://localhost:${process.env.PORT} ! 🚀`)
);