const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');

})

app.get('/', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `
    );
});


// const http = require('http');
// // Criação do servidor Web
// const servidor = http.createServer(function(req, resp) {
//     let html = '';
//     if (req.url == '/') {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Casa do Código </h1>
//             </body> 
//         </html>
//     `;
//     } else if (req.url == '/livros') //outra rota
//         html = `
//     <html>
//         <head>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <h1> Listagem de livros </h1>
//         </body> 
//     </html>
// `;
//     resp.end(html);
// });
// servidor.listen(3000);