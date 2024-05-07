const express = require('express');

const router = express.Router();

router.post('/account', (req, res) => {
    res.send("Controle de pagamentos")
});


module.exports = router;