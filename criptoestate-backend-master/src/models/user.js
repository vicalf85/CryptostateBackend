const {Schema, model} = require('mongoose');

const userSchema = Schema ({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    wallet: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
});

module.exports = model('User', userSchema);
