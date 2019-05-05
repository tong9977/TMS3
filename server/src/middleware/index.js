const uploadRes = require('./upload-res');
const multer = require('multer');
const path = require('path');
const crypto = require("crypto");



const allowedExtentions = ['.png', '.jpeg']
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => {
    let id = crypto.randomBytes(2).toString('hex');
    let ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${id}${ext}`)
  }
});

const upload = multer({
  storage,
  limits: {
    fieldSize: 100 // 100 MB
  },
  fileFilter: (req, file, cb) => cb(null, allowedExtentions.includes(path.extname(file.originalname)))
});


// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.post('/upload', upload.array('files'), uploadRes());
};
