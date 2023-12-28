const {response} = require('express');
const usuariosGet = (req, res) => {
    res.json({
        msg: 'get APi - controlador'
    });
}

const usuariosPut = (req,res) => {
        res.json({
            msg: 'put APi - controller'
        });
    };

const usuarioPost = (req, res) => {
    res.json({
        msg: 'post APi - controller'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete APi - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuarioPost,
    usuariosDelete
}