const express = require('express');
const app = express();
const PORT = 8001;

const multer = require('multer');
const path = require('path');
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.userid + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('practice');
});

app.post('/result', uploadDetail.single('profile'), (req, res) => {
  console.log(req.file);
  res.render('result', { profileImg: req.file, userData: req.body });
});

app.listen(PORT, () => {
  console.log(`listening ${PORT} port!`);
});
