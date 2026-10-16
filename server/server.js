import express from 'express';
import homeRoutes from './routes/home-routes.js'
import aboutRoutes from './routes/about-routes.js'
import contactRoutes from './routes/contact-routes.js'
import projectsRoutes from './routes/projects-routes.js'
import servicesRoutes from './routes/services-routes.js'

const app = express();

app.use('/home', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/projects', projectsRoutes);
app.use('/services', servicesRoutes);


app.listen(3000);

console.log("Server running on HTTP 3000!");