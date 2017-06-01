import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
