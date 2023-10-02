import { Router } from "express";
const documentosController = require('../controllers/documentos.controller');
const path = require('path');

const router = Router();


router.post('/subir-archivo', documentosController.subirArchivo);
router.get('/listado', documentosController.listarDocumentos);
// Obtener un tipo de documento por su ID
router.get('/:id', documentosController.getDocumentoById);

// Actualizar un tipo de documento existente
router.put('/:id', documentosController.updateDocumento);
// Configura una ruta para acceder a los archivos como una API
router.get('/archivos/:nombreArchivo', (req, res) => {
    const nombreArchivo = req.params.nombreArchivo;
    const rutaArchivo = path.join(__dirname, '..', 'uploads', nombreArchivo); // Utiliza '..', 'uploads' para subir un nivel y entrar en la carpeta 'uploads'

  
    // Envía el archivo como respuesta
    res.sendFile(rutaArchivo);
  });


export default router;
