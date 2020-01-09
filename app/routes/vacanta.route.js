module.exports = (app) => {
    const vacante = require('../controllers/vacanta.controller.js');

    // Create a new Note
    app.post('/vacante', vacante.create);

    // Retrieve all Notes
    app.get('/vacante', vacante.findAll);

    // Retrieve a single Note with noteId
    app.get('/vacante/:id', vacante.findOne);

    // Update a Note with noteId
    app.put('/vacante/:vacantaId', vacante.update);

    // Delete a Note with noteId
    app.delete('/vacante/:vacantaId', vacante.delete);
}