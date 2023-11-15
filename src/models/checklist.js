const mongoose = require('mongoose');

const tb_checklistSchema = mongoose.Schema( // Modelo que vamos utilizar no nosso documento
    {
        name: {type: String, required: true},
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tb_task'
        }]
    }) 

module.exports = mongoose.model('tb_cheklist', tb_checklistSchema);