var http =  require('http'); //menginport module core node.js

var server = http.createServer(function (req, res){ //membuat server
//menghendle request datang ke sini

	//mengecek permintaan URL saat ini
	if(req.url == '/'){
		// mengeset jawaban header
		res.writeHead(200, {'Content-Type': 'text/html' });

		//mengeset jawaban content
		res.write('<html><body><p>Ini adalah halaman home. </p></body></html>');
		res.end();
	}

	else if(req.url == "/student"){

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><body><p>Ini adalah halaman murid. </p></body></html>');
		res.end();
	}

	else if(req.url == "/admin"){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><body><p>Ini adalah halaman admin. </p></body></html>');
		res.end();
	}
	else
		res.end('Permintaan Tidak Valid');

});

server.listen(5000); //mencari request yang datang

console.log('Node.js web server di port 5000 berjalan');