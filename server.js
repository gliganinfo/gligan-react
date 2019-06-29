const express = require('express');
const path = require('path');

var Datastore = require('nedb'),
    db = new Datastore({ filename: 'database.db', autoload: true });

db.loadDatabase();


/*db.insert({
  "title": "【TUTORIAL】Personalizando de ⓪ a ❶⓿⓿ el BASH Prompt en Linux®",
  "imgb": "https://res.cloudinary.com/gligan/image/upload/photo-1545465270-b28c72a628f9.jpg",
  "imgs": "https://res.cloudinary.com/gligan/image/upload/w_300/photo-1545465270-b28c72a628f9.jpg",
  "date": "22nd of June, 2019",
  "url": "personalizar-bash-prompt-linux",
  "content": "Hola, Maricarmen. Añadir una carpeta con todos los markdowns y que esto sea un enlace que luego react pueda coger y convertir a html o lo que sea, tu ya me entiendes."
});*/


console.log(db);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/get-articles', function (req, res) {
	// res.json();
});

app.get('/api/upload-articles', function (req, res) {
  db.insert({
    date: Date.now()
  });
	res.json("OK");
});

app.get('/api/ejemplo', function (req, res) {
	res.json("respuesta");
});


// El index
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);