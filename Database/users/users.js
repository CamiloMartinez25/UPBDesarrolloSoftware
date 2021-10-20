var db = require('../dbConnection');

exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        //res.status(200).json(results.rows)
        res.status(200).send(results)
    });
}

exports.getUser = (req, res) => {
    const credentials = req.body;
    
    db.query(`SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.contrasena}'`, (err, results) => {
        if (err) throw err;
        if (JSON.parse(JSON.stringify(results)).length) {
            res.sendStatus(200).send(JSON.parse(JSON.stringify(results)).length);
        } else {
            res.status(404).send({"message": "Invalid credentials"});
        }
        
    })
}

exports.createUser = (req, res) => {
    const { username, contrasena, preguntaSeguridad, respuestaSeguridad }= req.body;
    
    db.query(`INSERT INTO users (username, password, id_question, answer) VALUES ('${username}', '${contrasena}','${preguntaSeguridad}','${respuestaSeguridad}')`, (err, results) => {
        if (err) throw err;
        
        res.status(200).send(results);
    })
}
