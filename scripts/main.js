Vue.createApp({
    data(){
        return{
            datos: [],
            juguetes: [],
            farmacia:[],
            productos_carrito:[],
            productos:[],
            contador:0,
            subtotalProducto:0,
            subtotalTotal:0,
            productosEnStorage:[],
            productosEnStorageFiltrados:[],
        }
    },
    created(){
        fetch('https://apipetshop.herokuapp.com/api/articulos')
            .then(responde => responde.json())
            .then(data => {
                this.datos = data.response
                this.productos = data.response
                this.productosEnStorage = JSON.parse(localStorage.getItem("carrito"))
                if(this.productosEnStorage ){
                    this.productos_carrito = this.productosEnStorage                
                }
            })
    },
    methods:{

        limiteCantidadMas(tarjeta){
            tarjeta.__v++

            if(tarjeta.__v > tarjeta.stock){
                tarjeta.__v = tarjeta.stock
            }
        },

        limiteCantidadMenos(tarjeta){
            tarjeta.__v--
            if (tarjeta.__v < 0){
                tarjeta.__v = 0
            }
        },

        añadirAlCarrito(tarjeta){
            tarjeta.__v ++
        
            this.subtotalProducto = tarjeta.precio * tarjeta.__v
            this.subtotalTotal += this.subtotalProducto

            if(!this.productos_carrito.includes(tarjeta) )
            {
                this.productos_carrito.push(tarjeta)
                localStorage.setItem("carrito",JSON.stringify(this.productos_carrito))
            }
        
        },

        quitarProductoCarrito(tarjeta){
            this.productos_carrito = this.productos_carrito.filter(tarj => tarj.nombre !== tarjeta.nombre)
            this.productosEnStorage = this.productos_carrito    
            localStorage.setItem("carrito",JSON.stringify(this.productos_carrito))
            
            this.subtotalTotal -= this.subtotalProducto

            if(this.productos_carrito.length == 00)
            {
                this.subtotalTotal = 0
            }
        }

    },
    computed:{
        renderTarjetasJuguetes(){
            this.juguetes = this.datos.filter(dato => dato.tipo == "Juguete")
            
        },
        renderTarjetasFarmacia(){
            this.farmacia = this.datos.filter(dato => dato.tipo == "Medicamento")
        }
    }
}).mount('#app')