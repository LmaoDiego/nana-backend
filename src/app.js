import express from 'express'
import usuariosRoutes from "./routes/usuarios.routes.js"
import authRoutes from "./routes/auth.routes.js"
import embarazoRoutes from "./routes/embarazo.routes.js"
const app = express();


/********************/
app.use(express.json());


app.use("/api/usuarios",usuariosRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/embarazos",embarazoRoutes);

export default app;