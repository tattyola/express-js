import express from 'express';
const app = express();
const port = 9000;

app.get('/', home);
app.get('/info', info);

function home(req, res) {
  res.send('Hello World!!!!!--');
}
function info(req, res) {
  res.send('Info');
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log('tatty hi!');
