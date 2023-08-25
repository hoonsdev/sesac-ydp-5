const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('/views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
