const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3005;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer")

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "images")
  }, filename: (req, file, cb)=>{
    cb(null, req.body.name)
  }
});

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req, res)=>{
  res.status(200).json("File has been uploaded")
})

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)


app.listen(port, () => {
  console.log(`Backend is running on ${port}`);
});