const Vacanta = require('../models/vacanta.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.destination) {
        return res.status(400).send({
            message: "Vacanta content can not be empty"
        });
    }

    // Create a Note
    const vacanta = new Vacanta({
        destination: req.body.destination || "Untitled Vacanta",
        nrNights: req.body.nrNights,
        price: req.body.price
    });

    // Save Note in the database
    vacanta.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Vacanta."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Vacanta.find()
        .then(vacante => {
            res.send(vacante);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving vacante."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

    Vacanta.findById(req.params.vacantaId)
        .then(vacanta => {
            if(!vacanta) {
                return res.status(404).send({
                    message: "Vacanta not found with id " + req.params.vacantaId
                });
            }
            res.send(vacanta);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Vacanta not found with id " + req.params.vacantaId
            });
        }
        return res.status(500).send({
            message: "Error retrieving vacanta with id " + req.params.vacantaId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Vacanta content can not be empty"
        });
    }

    // Find note and update it with the request body
    Vacanta.findByIdAndUpdate(req.params.vacantaId, {
            destination: req.body.destination || "Untitled Vacanta",
        nrNights: req.body.nrNights,
        price: req.body.price
    }, {new: true})
        .then(vacanta => {
            if(!vacanta) {
                return res.status(404).send({
                    message: "Vacanta not found with id " + req.params.vacantaId
                });
            }
            res.send(vacanta);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Vacanta not found with id " + req.params.vacantaId
            });
        }
        return res.status(500).send({
            message: "Error updating vacanta with id " + req.params.vacantaId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Vacanta.findByIdAndRemove(req.params.vacantaId)
        .then(vacanta => {
            if(!vacanta) {
                return res.status(404).send({
                    message: "Vacanta not found with id " + req.params.vacantaId
                });
            }
            res.send({message: "Vacanta deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Vacanta not found with id " + req.params.vacantaId
            });
        }
        return res.status(500).send({
            message: "Could not delete vacanta with id " + req.params.vacanteId
        });
    });
};