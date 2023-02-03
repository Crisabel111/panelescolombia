const express = require ('express');
const path = require('path');
const productRoutes = require('./src/routes/productRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const userRoutes = require('./src/routes/userRoutes')
const loggedMw = require('./src/middlewares/loggedMw')
const cookieParser = require('cookie-parser');
const methodOverride =  require('method-override'); //Para PUT y DELETE
//const methodOverride =  require('method-override'); //Para PUT y DELETE
const session = require('express-session');

const app = express ();

//const publicPath = path.resolve(__dirname,'./public');

//app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use( express.static('public') );
app.use(cookieParser());
app.use(session({secret: 'Shhh, Secreto!',
resave: false,
saveUninitialized: false,
}))
app.use(loggedMw);
app.use(methodOverride('_method'));

app.listen(3030, () => {
    console.log ('Servidor corriendo en el puerto 3030');
});

app.set('view engine', 'ejs')  
app.set('views',(__dirname,'./src/views'));
 

app.use("/product", productRoutes);
app.use("/", mainRoutes);
app.use("/user", userRoutes);



