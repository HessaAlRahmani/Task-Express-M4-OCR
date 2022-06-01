const express = require("express");
const upload = require("../../middleware/multer");
const { ocrCreate } = require("./ocr.controllers");
const router = express.Router();

router.post("/", upload.single("image"), ocrCreate);

module.exports = router;
