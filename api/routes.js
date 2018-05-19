
const postController = require('../controllers/postController');
const formidable = require('formidable');
const path = require('path');

module.exports = (app) => {

  app.post('/api/posts/', (req, res) => {

    
  })

  app.get('/', function (req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../', 'index.html'));
  });

  app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = path.join(__dirname, '../uploads/', file.name);
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(path.join(__dirname, '../', 'index.html' ));
  });
}