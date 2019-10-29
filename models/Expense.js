
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new mongoose.Schema({

    expense: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required:true
    }
    

});


module.exports = mongoose.model('Expense',ExpenseSchema);



