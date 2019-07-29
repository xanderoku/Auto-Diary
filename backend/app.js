// Фреймворк веб-приложений.
const express = require("express");
const dotenv = require('dotenv')
const app = express();
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
// const redis   = require("redis");
// const RedisStore = require('connect-redis')(session);
// const client  = redis.createClient();
const {cookiesCleaner} = require('./middleware/auth');

require('dotenv').config();

app.use(morgan("dev"));
// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
// app.use(session({
//   store: new RedisStore({ 
//     client,
//     host: 'localhost', 
//     port: 6379, 
//     ttl :  260
//   }),
//   key: 'user_sid',
//   secret: 'anything here',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     expires: 600000
//   }
// }));


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use(cookiesCleaner);


// Импорт маршрутов.
const indexRouter = require("./routes/index");
const carRouter = require("./routes/car")


// Подключаем mongoose.
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/autoDiary', { useNewUrlParser: true });


// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/car', carRouter);
app.use('/uploads', express.static('uploads'));

// Обработка ошибок.
// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   });
// });

module.exports = app;
