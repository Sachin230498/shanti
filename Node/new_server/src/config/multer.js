// config/multer.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, db) {
      if (file.fieldname === "image" && file.mimetype.includes("image")) {
        db(null, path.join(__dirname, "..", "uploads"));
      } else {
        db(new Error("Unsupported file type"), null);
      }
    },
    filename: function (req, file, b) {
      b(null, `${Date.now()}-${file.originalname}`);
    },
  });

// Init upload

const upload = multer({ storage: storage });
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 }, // 1MB
    
// });



module.exports = upload;
