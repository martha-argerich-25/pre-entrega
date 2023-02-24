import express from "express"
import ProductManager from "./ProductManager.js"
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js"

const manager = new ProductManager("./productos.json");

const app = express();



app.use("/api/products",productsRouter)
app.use("api/carts",cartRouter)






// ESCUCHA LA LLAMADA
app.listen(8080,()=>{
    console.log(" el servidor esta escuchando el puerto 8080")
});