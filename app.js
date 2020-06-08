const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs')
const youtubedl = require('youtube-dl')

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/home", (req, res) => {
    res.render("home");
})

app.post("/home", (req, res) => {
  const url = req.body.myURL
 
  const video = youtubedl(url,
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  )
 
// Will be called when the download starts.
video.on('info', function(info, error) {
    if(error){
        console.log(error)
    }else{
        console.log('Download started')
        console.log( info._filename)
        console.log('size: ' + info.size)
        video.pipe(fs.createWriteStream(info.title + ".mp3"))
        res.render("home")
    }
})  

})




app.listen(3000, () => {
    console.log("Server is listening...");
})

