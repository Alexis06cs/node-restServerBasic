const { Router } = require('express');
const { usuariosGet, usuariosPut, usuarioPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();
        router.get('/', usuariosGet);

        router.put('/', usuariosPut);

        router.post('/',usuarioPost );

        router.delete('/',usuariosDelete);


module.exports = router;
