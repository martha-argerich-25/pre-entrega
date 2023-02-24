import fs from "fs"


class ProductManager {
           #path = "./productos.json"
  
    constructor(path){
   this.#path = path
    }
  
  // METODO PARA CREAR PRODUCTO//
  async addProduct(id,title, description, price, thumbnail,code,stock) {
    const newProduct = {
      id: id.length,
        title : title,
        description: description,
         price : price,
         thumbnail :  thumbnail,
        code:code,
         stock :stock,
         status:true
    };



// consultar los producto
    const products = await this.getProducts();
// desestructuro y agrego el nuevo producto

    const updateProducts = [...products, newProduct];
// escribo los usuarios actualizados
    await fs.promises.writeFile(this.#path, JSON.stringify(updateProducts));
  }
  
  
  // ----------------------METODO GETPRODUCT ---------------------------
    async getProducts() {
  
      try {
        const products =  await fs.promises.readFile(this.#path,"utf-8");
  // paso los usuarios en objetos
        return JSON.parse(products);
      } catch (e) {
        
        return []
      }
    }
  
  //-------------------METODO GETPRODUCTBYID-----------------------------------
  async getProductById(id) {        // Producto por ID
    const prod = await this.getProducts();
    let productget = prod.find((p) => p.id === id);
    if (productget) {
      await fs.promises.readFile(this.#path,"utf-8");
        return (productget);
    } else {
        throw new Error(`no se encuentra id`);
    }
  }
  
  //---------------------------METODO DELETEPRODUCT--------------------------------------
  
  async deleteProduct(id) {        // Elimina producto por ID lo filtro y me devuelve la actualizacion con un nuevo json
    const producto = await this.getProducts();
    let deleteProduct = producto.find((p) => p.id === id);
    if (deleteProduct) {
      let resto = producto.filter((p) => p.id !== id);
      fs.promises.appendFile("./listaActualizada.json",JSON.stringify(resto))
    } else {
      throw new Error(` no hay producto con el : ${id}`);
    }
  }
  
  
  //-----------------------------METODO UPDATEPPRODUCT------------------------------
  
  async updateProducts (id,data){
    
    const producto = await this.getProducts();
    // el metodo recorre el array y si ve algo lo cambia y sino te devuelve el objeto 
    const updatedProducts = producto.map((p)=>{
      if(p.id === id){
        return{
          ...p,
          data,
          id,
        };
         
      }
     return p;
    })
    
    await fs.promises.writeFile(this.#path,JSON.stringify(updatedProducts));
    }
  }



  export default ProductManager;