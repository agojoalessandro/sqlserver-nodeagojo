
var express = require('express');
var router = express.Router();
const sql = require('mssql')
var createError = require('http-errors');

const config = {
  user: '4DD_01',  //Vostro user name
  password: 'xxx123##', //Vostra password
  server: "213.140.22.237",  //Stringa di connessione
  //Oppure
  //server: "213.140.22.237", //nel caso la stringa sopra non funzionasse
  database: '4DD_01', //(Nome del DB)
}


//Function to connect to database and execute query
let executeQuery = function (res, query, next, pagina) {
  sql.connect(config, function (err) {
    if (err) { //Display error page
      console.log("Error while connecting database :- " + err);
      res.status(500).json({success: false, message:'Error while connecting database', error:err});
      return;
    }
    var request = new sql.Request(); // create Request object
    request.query(query, function (err, result) { //Display error page
      if (err) {
        console.log("Error while querying database :- " + err);
        res.status(500).json({success: false, message:'Error while querying database', error:err});
        sql.close();
        return;
      }
      /*
      res.render('unita', { unit : result.recordset});*/ //Il vettore con i dati è nel campo recordset (puoi loggare result per verificare)
      renderizza(pagina, res, result.recordset)
      sql.close();
    });

  });
}

renderizza = function(pagina,res, dati)
{
    res.render(pagina, {unita : dati})
}
router.get('/', function (req, res, next) {
  let sqlQuery = "select * from dbo.[cr-unit-attributes]";
  executeQuery(res, sqlQuery, next, "unita");
}); 
router.get('/unit/:nome', function (req, res, next){
  
    let unita = `select * from dbo.[cr-unit-attributes] WHERE Unit = '${req.params.nome}'`;
    executeQuery(res, unita, next , "unit");
});

module.exports = router;
