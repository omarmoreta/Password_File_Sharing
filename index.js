require("dotenv").config();
const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const File = require("./models/file");

const upload = multer({ dest: "uploads" });

mongoose.connect(MONGO_URI);

app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };
  if (req.body.password != null && req.body.password !== "") {
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }
  const file = await File.create(fileData);
  console.log(file);
  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
});

app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id);

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password");
      return;
    }

    if (!(await bcrypt.compare(req.body.password, file.password))) {
      res.render("password", { error: true });
      return;
    }
  }

  file.downloadCount++;
  await file.save();
  console.log(file.downloadCount);

  res.download(file.path, file.originalName);
}

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
