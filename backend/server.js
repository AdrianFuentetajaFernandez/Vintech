require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

//REQUERIMIENTO DE CONTROLLERS

//CONTROLADORES DE USUARIO
const { createUser } = require("./controllers/users/createUser");
const { activateUser } = require("./controllers/users/activateUser");
const { getMyUser } = require("./controllers/users/getMyUser");
const { getUser } = require("./controllers/users/getUser");
const { logUser } = require("./controllers/users/logUser");
const { editUser } = require("./controllers/users/editUser");
const { deleteUser } = require("./controllers/users/deleteUser");
const { recoverPwd } = require("./controllers/users/recoverPwd");
const { resetPwd } = require("./controllers/users/resetPwd");
const { changePwd } = require("./controllers/users/changePwd");
const { historyProducts } = require("./controllers/products/historyProducts");

//CONTROLADORES DE PRODUCTO
const { newProduct } = require("./controllers/products/newProduct");
const { getProduct } = require("./controllers/products/getProduct");
const { getUserProducts } = require("./controllers/products/getUserProducts");
const { listProducts } = require("./controllers/products/listProducts");
const { editProduct } = require("./controllers/products/editProduct");
const { deleteProduct } = require("./controllers/products/deleteProduct");
const { addImgProduct } = require("./controllers/products/addImgProduct");
const { deleteImgProduct } = require("./controllers/products/deleteImgProduct");
const { sellProduct } = require("./controllers/products/sellProduct");

//CONTROLADORES DE MENSAJE
const { sendMessage } = require("./controllers/messages/sendMessage");
const {
  listConversations,
} = require("./controllers/messages/listConversations");
const { listMessages } = require("./controllers/messages/listMessages");

//CONTROLADORES DE RESERVAS
const { newBooking } = require("./controllers/bookings/newBooking");
const { listBookingsIn } = require("./controllers/bookings/listBookingsIn");
const { listBookingsOut } = require("./controllers/bookings/listBookingsOut");
const { getBooking } = require("./controllers/bookings/getBooking");
const { cancelBookingOut } = require("./controllers/bookings/cancelBookingOut");
const { cancelBooking } = require("./controllers/bookings/cancelBooking");
const { responseBooking } = require("./controllers/bookings/responseBooking");

//CONTROLADORES DE FAVORITOS
const { addFav } = require("./controllers/favs/addFav");
const { deleteFav } = require("./controllers/favs/deleteFav");
const { listFavs } = require("./controllers/favs/listFavs");

//CONTROLADORES DE VOTOS
const { sendVote } = require("./controllers/votes/sendVote");
const { listVotes } = require("./controllers/votes/listVotes");
const { editVote } = require("./controllers/votes/editVote");
const { deleteVote } = require("./controllers/votes/deleteVote");

//REQUERIMIENTO DE MIDDLEWARES FUNCIONALIDADES
const { validAuth } = require("./middlewares/validAuth");
const { isSameUser } = require("./middlewares/isSameUser");
const { canEdit } = require("./middlewares/canEdit");
const { canVote } = require("./middlewares/canVote");
const { canEditVote } = require("./middlewares/canEditVote");

//APLICACIÓN DE MIDDLEWARES GENERALES
app.use(cors());
app.use(express.static("static"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(fileUpload());

//APLICACIÓN DE CONTROLADORES PARA ENDPOINTS

//USUARIO
//CREAR USUARIO
app.post("/user", createUser);
//ACTIVAR USUARIO
app.get("/activation/:activationCode", activateUser);
//LOGIN USUARIO
app.post("/login", logUser);
//OBTENER INFORMACIÓN DE MI USUARIO
app.get("/user/:id/myProfile", validAuth, isSameUser, getMyUser);
//OBTENER INFORMACIÓN DE OTRO USUARIO
app.get("/user/:id", getUser);
//EDITAR USUARIO
app.put("/user/:id", validAuth, isSameUser, editUser);
//BORRAR USUARIO
app.delete("/user/:id", validAuth, isSameUser, deleteUser);
//RECOVER PASSWORD
app.post("/recoverPwd", recoverPwd);
//RESET PASSWORD
app.put("/reset-password/:code", resetPwd);
//EDITAR PASSWORD
app.put("/user/:id/changePwd", validAuth, isSameUser, changePwd);
//HISTORIAL DE PRODUCTOS
app.get("/user/:id/history", validAuth, isSameUser, historyProducts);

//CONTROLADORES DE PRODUCTO
//CREAR PRODUCTO
app.post("/product", validAuth, newProduct);
//OBTENER PRODUCTO
app.get("/product/:id", getProduct);
//OBTENER PRODUCTOS DE UN USUARIO CONCRETO
app.get("/user/:id/products", getUserProducts);
//LISTAR PRODUCTOS
app.get("/products", listProducts);
//EDITAR PRODUCTO
app.put("/product/:id", validAuth, canEdit, editProduct);
//BORRAR PRODUCTO
app.delete("/product/:id", validAuth, canEdit, deleteProduct);
//AÑADIR FOTO DE PRODUCTO
app.post("/product/:id/images", validAuth, canEdit, addImgProduct);
//BORRAR FOTO DE PRODUCTO
app.delete("/product/:id/images/:imgId", validAuth, canEdit, deleteImgProduct);
//VENDER PRODUCTO
app.put("/product/:id/sell", validAuth, sellProduct);

//CONTROLADORES DE MENSAJES
//ENVIAR MENSAJE
app.post("/user/:id/messages", validAuth, sendMessage);
//LISTAR CONVERSACIONES
app.get("/user/:id/messages", validAuth, isSameUser, listConversations);
//LISTAR MENSAJES
app.get("/user/:id/messages/:userId", validAuth, isSameUser, listMessages);

//CONTROLADORES DE RESERVAS
//CREAR RESERVA
app.post("/product/:idProduct", validAuth, newBooking);
//VER LISTA RESERVAS RECIBIDA
app.get("/user/:id/bookings-in", validAuth, isSameUser, listBookingsIn);
//VER LISTA RESERVAS REALIZADAS
app.get("/user/:id/bookings-out", validAuth, isSameUser, listBookingsOut);
//VER UNA RESERVA
app.get("/user/:id/bookings/:idBooking", validAuth, isSameUser, getBooking);
//RESPONDER UNA RESERVA RECIBIDA
app.put(
  "/user/:id/bookings/:idBooking/:response",
  validAuth,
  isSameUser,
  responseBooking
);
//CANCELAR UNA RESERVA
app.put(
  "/user/:id/bookings/:idBooking/response/cancel",
  validAuth,
  isSameUser,
  cancelBooking
);

//CONTROLADORES DE VOTOS
app.post("/user/:id/votes", validAuth, canVote, sendVote);
app.get("/user/:id/votes", listVotes);
app.put("/vote/:id", validAuth, canEditVote, editVote);
app.delete("/vote/:id", validAuth, canEditVote, deleteVote);

//DE FAVS
app.post("/product/:id/fav", validAuth, addFav);
app.get("/user/:id/favs", validAuth, isSameUser, listFavs);
app.delete("/product/:id/fav", validAuth, deleteFav);

//MIDDLEWARE DE GESTIÓN DE ERRORES
app.use((error, req, res, next) => {
  if (error) {
    res.status(error.httpStatus || 500).send({ error: error.message });
  }
});

//INICIO DE PUERTO
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
