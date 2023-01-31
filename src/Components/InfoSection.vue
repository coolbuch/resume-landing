<template>
    <div class = "this">
        <div class="name">
            <h2 class="name">{{ data.name }}</h2>
            <h3>{{ data.target }}</h3>
        </div>
        <div class="img-about-wrapper">
            <div class="image">
                <img :src="data.img"/>
            </div>
            <div class="about" > <h3>Обо мне</h3>{{data.about }}</div>
        </div>
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
.this{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    padding-top: 0;
    
    border: 1px solid; 
}

.img-about-wrapper{
    display: flex;
    flex-direction: reverse;
    justify-content: center;
    align-items: center;
}

.image{
        width: 18vh;
    }
    

img{
    width: inherit;
}
.about{
    margin-left: 10px;
    text-align: justify;
}

@media screen and (min-width:720px)  {
    .this{
        flex-direction: column;
        justify-content: flex-start;
        

    }

    .img-about-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .image{
        width: 30vh;
    }
    

    img{
        width: inherit;
    }


    .about{
        margin-left: 10px;
        text-align: justify;
        width: 30vh;
        margin: 0px;
    }


    .name{
        max-width: 250px;
    }
}

@media screen and (min-height:1079px) 
{
    .image{
        width: 25vw;
    }
    

    img{
        width: inherit;
    }


    .about{
        margin-left: 10px;
        text-align: justify;
        width: 25vw;
        margin: 0px;
    }
}

</style>
