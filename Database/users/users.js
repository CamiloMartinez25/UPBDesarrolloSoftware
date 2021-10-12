var db = require('../dbConnection');

exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        //res.status(200).json(results.rows)
        res.status(200).send(results)
    });
}

exports.createUser = (req, res) => {
    const { username, contrasena, preguntaSeguridad, respuestaSeguridad }= req.body;
    
    db.query(`INSERT INTO users (username, password, id_question, answer) VALUES ('${username}', '${contrasena}','${preguntaSeguridad}','${respuestaSeguridad}')`, (err, results) => {
        if (err) throw err;
        
        res.status(200).send(results);
    })
}
