import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import dashoardRoutes from './routes/dashboard.routes';
import inventarioRoutes from './routes/inventario.routes';
import productosRoutes from './routes/productos.routes';
import ventasRoutes from './routes/ventas.routes';
import cookieParser from 'cookie-parser';
import reportesRoutes from './routes/reportes.routes';
import clientesRoutes from './routes/clientes.routes';
import usuariosRoutes from './routes/usuarios.routes';
import configuracionRoutes from './routes/configuracion.routes';
import promocionesRoutes from './routes/promociones.routes';
import cuentasRoutes from './routes/cuentas.routes';

dotenv.config();

const app = express();

app.use(cors({
  origin: function (origin, callback) {
    const allowed = [
      'http://localhost:3000',
      'https://sistema-aysel.vercel.app',
      'https://sistema-aysel-v2-6gm81ljb5-aysel2.vercel.app'
    ];
    if (!origin || allowed.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashoardRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/configuracion', configuracionRoutes);
app.use('/api/promociones', promocionesRoutes);
app.use('/api/cuentas', cuentasRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: 'BACKEND FUNCIONANDO' });
});

export default app;
