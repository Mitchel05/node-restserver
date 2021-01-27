// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// ============================
//  Vencimiento
// ============================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
//  Semilla de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
     urlDB = process.env.MONGO_URI;
    
}

process.env.URLDB = urlDB;

//=====================
//Google client
//=====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '816827969285-sohf5frmravg38ip3fjri5ts1bjs9gog.apps.googleusercontent.com'




    // urlDB = 'mongodb+srv://mitchel:hfNyHctoYgGHO1gs@cluster0.vlmus.mongodb.net/cafe';
