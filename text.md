const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("*", (req, res) => {
    console.log("<h1> WEBSITE NOT FOUND </h1>")
})


app.listen(3000, () => {
    console.log("Server is listening...");
})





  const video = youtubedl('https://www.youtube.com/watch?v=s4l1Y5lWuz0&list=RDMMbeamS4GZ5T8&index=3',
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  )
 
// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log( info._filename)
  console.log('size: ' + info.size)
  video.pipe(fs.createWriteStream(info.title + ".mp3"))
})
 