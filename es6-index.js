import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
const port = process.env.PORT || 3002;
app.listen(3002, () => {
  console.log(`Listening to port ${port}`);
});
