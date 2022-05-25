import mongoose from "mongoose";

const Tour = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    kategori: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    jamOperasional: {
        type: String,
        required: true
    },
    tiket: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    }
});

export default mongoose.model('Tours', Tour);