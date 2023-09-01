const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const idxrouter = require('./routes/index');
app.use('/', idxrouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
