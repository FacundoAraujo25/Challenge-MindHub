Vue.createApp({
    data(){
        return{ 

        }
    },
    created(){
        fetch('https://apipetshop.herokuapp.com/api/articulos')
    },
    methods:{
        modal_contacto(){
            let formulario = document.querySelector('#form')
            formulario.reset()
        }
    },
    computed:{

    }
}).mount('#app')