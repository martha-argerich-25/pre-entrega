import { Route,json } from "express";

let cart = []

const cartsRouter = Route();

cartsRouter.use(json());
//---------------RUTA POST PARA CREAR UN CARRITO-----------
cartsRouter.post("/",(req,res)=>{

const {id} = req.body




})