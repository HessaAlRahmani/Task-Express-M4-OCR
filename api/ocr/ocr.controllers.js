const Tesseract = require("tesseract.js");

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      //req.body.image = req.file.path; alternative way ...
      let result = await Tesseract.recognize(req.body.image, "eng");
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "File Not Found" });
    }
  } catch (error) {
    next(error);
  }
};
