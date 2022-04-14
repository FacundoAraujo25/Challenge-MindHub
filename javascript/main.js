Vue.createApp({
    data(){
        return{

        }
    },
    created(){
        fetch('https://apipetshop.herokuapp.com/api/articulos')
    },
    methods:{

    },
    computed:{

    }
}).mount('#app')