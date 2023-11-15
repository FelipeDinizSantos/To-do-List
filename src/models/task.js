const mongoose = require('mongoose');

const tb_taskSchema = mongoose.Schema( // Modelo que vamos utilizar no nosso documento
    {
        name: {type: String, required: true},
        done: {type: Boolean, default: false},
        checklist: {type: mongoose.Schema.Types.ObjectId, ref: 'tb_cheklist', required: true}
    }) 

module.exports = mongoose.model('tb_task', tb_taskSchema);