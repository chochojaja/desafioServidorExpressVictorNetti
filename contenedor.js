
const fs = require('fs');

class contenedor {
    constructor(canal){
        this.canal = canal
    }


 async getAll(){ 
    try {
        let data = await fs.promises.readFile(this.canal, 'utf-8')
        const dataParse = JSON.parse(data)
        //console.log(dataParse)
        return dataParse
        }

    catch (error) {
        console.log(error)
    }
    
 } 


 async getByIdrandom(){
    try {
        let data = await fs.promises.readFile(this.canal, 'utf-8')
        let dataParse = JSON.parse(data)
        let producto = dataParse[Math.floor(Math.random()* dataParse.length)]
        return producto

    } catch (error) { console.log(error)
        
    }



}   }
module.exports = contenedor