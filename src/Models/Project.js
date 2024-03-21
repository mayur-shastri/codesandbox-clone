const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rootDirectory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
    },
    projectType: {
        type: String,
        enum: [
            'react',
            'plain-html-css-js',
        ],
        required: true,
    },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;