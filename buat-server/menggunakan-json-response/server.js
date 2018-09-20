var http =  require('http'); //menginport module core node.js

var server = http.createServer(function (req, res){ //membuat server
//menghendle request datang ke sini

	//mengecek permintaan URL saat ini
	if(req.url == '/data'){
		// mengeset jawaban header
		res.writeHead(200, {'Content-Type': 'application/json' });

		//mengeset jawaban content
		res.write(JSON.stringify({ message: "Hello World" }));
		res.end();
	}

	else
		res.end('Permintaan Tidak Valid');

});

server.listen(5000); //mencari request yang datang

console.log('Node.js web server di port 5000 berjalan');