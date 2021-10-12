var db = require('../dbConnection');


const getSecurityQuestions = (req, res) => {
    db.query('SELECT * FROM security_questions', (err, results) => {
        if (err) throw err;
        //res.status(200).json(results.rows)
        res(results)
    });
}
