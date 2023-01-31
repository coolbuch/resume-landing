<template>
    <div class = "this">
        <div class="name">
            <h2 class="name">{{ data.name }}</h2>
        <h3>{{ data.target }}</h3>
        </div>
        
        <div class="image">
            <img :src="data.img"/>
        </div>
        <div class="about" >{{data.about }}</div>
    
        <div class = "skills">
            <h3>Навыки</h3>
            <ul><li v-for="elem in data.skills">{{ elem }}</li></ul>
            
        </div>
        
    </div>
</template>

<script>  
    export default{
        components:
        {

        },
        props:{
            data : {}
        },
        data()
        {
            return {
                
            }
        },
        methods:
        {
            
        },
        mounted(){}
    }
</script>

<style scoped>

.image{
    width: 17vh;
}

img{
    width: inherit;
}


.about{
    max-width: 200px;
    margin-left: 10px;
}
.this{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    border: 1px solid;
    margin-top: 15px; 
}


@media screen and (min-width:720px)  {
    .this{
        flex-direction: column;
        justify-content: center;
    }

    .image{
        width: 30vh;
    }
    
    .about{
        margin: 0px;
    }
    .name{
        max-width: 250px;
    }
}


</style>
