const express = require('express');
const router = express.Router();

router.get('/get', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorno das locações'
    });
});


router.post('/post', (req, res, next) => {
    const locacao = {
        id_locacao:req.body.id_locacao,
        datainicial: req.body.datainicial,
        datatermino: req.body.datatermino,
        horarioinicial: req.body.horarioinicial,
        horariotermino: req.body.horariotermino,
        usuario_id_usuario: req.body.usuario_id_usuario,
        veiculo_id_veiculo: req.body.veiculo_id_veiculo,
    }
    res.status(200).send({
        mensagem: 'Locação criada',
        locacaoCriada: locacao
        
    })
});

router.get('/:id_locadora', (req, res, next) => { 
    const id = req.params.id_locadora; 
        
    if (id === 'id_locadora') {
        res.status(200).send({
            mensagem: 'Você encontrou o ID especial de uma locação',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
});

router.put('/put', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Locação alterada'
    });
});


router.delete('/del', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Locação deletada'
    });
});

module.exports = router; 