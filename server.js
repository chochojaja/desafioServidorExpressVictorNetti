const express = require('express')
const app = express()
const Contenedor = require('./contenedor')
//app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/Productos', async (req, res) =>{
    const contenedor = new Contenedor('./Producto.txt')
    try {  const productos = await contenedor.getAll()
        //console.log(productos)
        res.json({
            productos
        })
     } catch {(error)
            console.log(error)} 
   
})

app.get('/Productosrandom', async (req, res) =>{
    const contenedor = new Contenedor('./Producto.txt')
    const producto = await contenedor.getByIdrandom()
    res.send({
        producto })
})
app.listen(4000,()=>{
    console.log('server escuchando en el puerto: ')
})