var http = require('http');
var url = require('url');
var mat = require('./matematica.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    
    var q = url.parse(req.url, true).query;
    var txt;
    var fim;
    var numA = parseInt(q.num1);
    var numB = parseInt(q.num2);

    if(q.opcao == "somar"){
        txt = mat.soma(numA, numB);
    }else if(q.opcao == "subt"){
        txt = mat.sub(numA, numB);
    }else if(q.opcao == "multi"){
        txt = mat.mult(numA, numB);
    }else if(q.opcao == "divi"){
        txt = mat.div(numA, numB);
    }else{
        txt = "ERRO!!!"
    }

    fim = "O resultado é: " + txt;


    res.end(fim);
}).listen(9000);