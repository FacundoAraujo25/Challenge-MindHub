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
                productos = data.response
            })
    },
    methods:{
        modal_contacto(){
            let formulario = document.querySelector('#form')
            formulario.reset()
        }

    },
    computed:{

        agregarProductos(){
            for(i=0;i<2;i++){
                if(!this.productos_carrito.includes(this.productos[i]))
                {
                    this.productos_carrito.push(this.productos[i])
                }
            }
        }

    }
}).mount('#app')