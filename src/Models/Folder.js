const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    childFolders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Folder',
        }
    ],
    childFiles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'File',
        }
    ],
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;