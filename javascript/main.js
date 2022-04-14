Vue.createApp({
    data(){
        return{

        }
    },

    created(){
        fetch('https://apipetshop.herokuapp.com/api/articulos')
            .then(response => response.json())
    },
    methods:{

    },
    computed:{

    }
}).mount('#app')