var http = require('http')
var fs = require('fs')


function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) { responseCode = 200; }
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end("500 - Internal Error")
        }
        else {
            res.writeHead(responseCode, { 'Content-Type': contentType })
            res.end(data)
        }
    })
}

http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            serveStaticFile(res, '/desktop/endterm/index.html', 'text/html')
            break
        case '/about':
            serveStaticFile(res, '/desktop/endterm/about.html', 'text/html')
            break
        case '/img/gallery/graduation.jpg':
            serveStaticFile(res, '/desktop/endterm/img/gallery/graduation.jpg', 'image/jpeg')
            break
        case '/img/gallery/study.jpg':
            serveStaticFile(res, '/desktop/endterm/img/gallery/study.jpg', 'image/jpeg')
            break
        case '/video/memes.mp4':
            serveStaticFile(res, '/desktop/endterm/video/memes.mp4', 'video/mp4')
            break
        default:
            serveStaticFile(res, '/desktop/endterm/error.html', 'text/html', 404)
            break
    }


}), listen(3000)

console.log("Server started on localhost:3000; press Ctrl+C to terminate")


