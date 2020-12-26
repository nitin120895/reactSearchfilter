const express = require('express');
const router = express.Router();
const mysql = require('mysql');


//connect database
const con = mysql.createConnection({
    user: "root",
    password: "root",
    port: "3306",
    host: "localhost",
    database: 'cmsdb'
}, (err, result) => {
    if (err)
        throw err;
    else
        console.log(result);
})





router.get('/', (req, res) => {

    res.json({ msg: 'api testing   ok' })
})




// ///////////api's/////////////////////////



//view all customers/////////
router.get('/viewusers', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");


    let sql = "select*from names";
    con.query(sql, (err, result) => {
        if (err)
            throw err;
        else
            res.json({ data: result })
    })

})



router.post('/addusers', (req, res) => {

    let name = req.body.name;
    let address = req.body.address;

    let sql = "insert into names(name,address)values(?,?)"
    let values = [name, address]
    sql = mysql.format(sql, values)
    con.query(sql, (err, result) => {
        console.log(result);
        if (err)
            throw err
        else
            res.json({ msg: "user added. . . " })

    })
})





module.exports = router;
