import { Route,json } from "express";


let product = [];

const productsRouter = Route();

productsRouter.use(json());

//---------OBTENER LA LISTA DE PRODUCTOS-----GET---------

productsRouter.get("/", async (req,res) => {
    const {limit} = req.query;
  
    if(!limit){
       const products = await manager.getProducts(); 
       return res.send(products);
    }
    const products = await manager.getProducts()
    const filtered =  products.slice(0,limit);
  
     return res.send(filtered);
  });

  //--------OBTENER LOS PRODUCTOS SEGUN ID-----GET----------

  productsRouter.get("/",(req, res) => {
    const {id} = req.params
  
     const product = manager.getProductById(id);
 
     res.send(product)
  
    
  })

  //--------RUTA  AGREGAR NUEVO PRODUCTO------POST------

productsRouter.post("/",(req,res)=>{
   const {title,description,code,price,status,stock,category,thumbnails} = req.body

   const newProduct = {
      id: id.length,
        title : String,
        description: String,
         price : Number,
         thumbnail : [],
        code:string,
         stock :number,
         status:true,
         category:String
   }

   product = [...product , newProduct]

   res.send(newProduct)
})
//------------------MODIFICAR PRODUCTO RUTA PUT---------------

app.put("/:id",(req,res)=>{
const productId = number(req.params.id);

 product = product.map((p)=>{
// respetar el id
   if (productId === p.id){

      return {
      ...req.body,
      id: p.id


      }
   }
   return p;

 });

});
//------------------RUTA ELIMINAR PRODUCTO SEGUN ID-------------------

app.delete("/:id",(req,res)=>{
   const productId = (req.params.id);

   product = product.filter((p)=>p.id !== productId);

   res.send(product)



});


  export default productsRouter