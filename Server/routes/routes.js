import express from 'express'
import addEmp from '../user-controller/addEmp.js';
import getEmp from '../user-controller/getEmp.js';
import updateEmp from '../user-controller/updateEmp.js';
import deletEmp from '../user-controller/deleteEmp.js';
import getRecentEmp from '../user-controller/getRecentEmp.js';

const routes = express.Router();

routes.get('/getemp',getEmp)
routes.get('/recentemp',getRecentEmp)

routes.post('/addemp',addEmp)
routes.post('/updateemp',updateEmp)
routes.post('/deleteemp',deletEmp)

export default routes;