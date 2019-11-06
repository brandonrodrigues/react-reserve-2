import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }

}, {collection : 'comments'});

export default mongoose.models.Product ||  mongoose.model('Product', ProductSchema);