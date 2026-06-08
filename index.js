import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

const app = express()
const PORT = 3000

//  MIDDLEWARES


app.use(cors());
app.use(express.json());
app.use(morgan ('dev'));

//corregi "dev": "node --watch index"
console.log('el primer mensaje de este backend')
console.log('segundo mensaje para editar')

// ENDPOINTS
app.get('/api/productos', (req, res) => {
    const menú = [
        { id: 1, nombre: "Cappuccino", precio: 2800 },
        { id: 2, nombre: "Medialuna ", precio: 1500 },
        { id: 3, nombre: "Tostado de Jamon y Queso", precio: 3500 },
        { id: 4, nombre: "Cafe con leche", precio: 2200 }
    ];
    
    res.json(menú);
});

app.get('/api/promo', (req, res) => {
    // Respondemos con un objeto JSON anunciando el beneficio del día
    res.json({
        promoDelDia: "¡Hoy 2x1 en licuados de frutilla y bananas con tu tostado!"
    });
});


app.get('/api/horarios', (req, res) => {
    
    res.json({
       "Lunes a Viernes": "08:00 a 20:00 hs",
        "Sábados": "09:00 a 13:00 hs",
        "Domingos": "Cerrado"
    });
});

// 4. INICIAR EL SERVIDOR
app.listen(PORT , ()=>{
    console.log(`Servidor de la Cafetería corriendo en http://localhost:${PORT}`);
})