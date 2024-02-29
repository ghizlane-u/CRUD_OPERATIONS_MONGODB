const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLenght: 3,
        maxLength: 300
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLenght: 3,
        maxLength: 300
    },

    author: {
        type:mongoose.Schema.Types.ObjectId,
         ref:"User",
        required: true,
    }
},{
    timestamps: true,
} 
);

const blog = mongoose.model('blog', AuthorSchema);

module.exports = blog