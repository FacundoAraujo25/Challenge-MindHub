Vue.createApp({
    data(){
        return{ 
            productos_carrito:[],
            productos:[]

        }
    },
    created(){
        fetch('https://apipetshop.herokuapp.com/api/articulos')
        .then(response => response.json())
            .then(data =>{
                this.productos = data.response
                
                let productosEnStorage = JSON.parse(localStorage.getItem("carrito"))
                if(productosEnStorage){
                    this.productos_carrito = productosEnStorage
                }
            })


    },
    methods:{
        modal_contacto(){
            let formulario = document.querySelector('#form')
            formulario.reset()
        },

        añadirAlCarrito(producto){
            this.productos_carrito.push(producto)

            localStorage.setItem("carrito",JSON.stringify(this.productos_carrito))
        }
        
    
    },
    computed:{
        


    }
}).mount('#app')
