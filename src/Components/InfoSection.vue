<template>
    <div class = "this">
        <div class="name">
            <h2 class="name">{{ data.name }}</h2>
            <h3 class="target">{{ data.target }}</h3>
        </div>
        <div class="img-about-wrapper">
            <div class="image">
                <img src="../img/phot.jpg"/>
            </div>
            <div class="about" > <h3>Обо мне</h3>{{data.about }}</div>
        </div>
        <div class = "skills">
            <h3>Навыки</h3>
            <ul><li v-for="elem in data.skills">{{ elem }}</li></ul>
        </div>
        <div>
            <div class="location"><h3>Город:</h3> {{ data.location }}</div>
            <div class="links">
                <h3>Ссылки:</h3> 
                <ul>
                    <li v-for="elem in data.links">
                        <a target="_blank" :href="elem"> {{ elem.substring(8).substr(0,elem.indexOf("/")) }} </a>
                    </li>
                </ul>
            </div>
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
    box-shadow: 2px 2px 10px 1px var(--shadow-color);
    background-color: var(--light-color);
}

.img-about-wrapper{
    display: flex;
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

h3{
    margin-bottom: 2px;
}

.target{
    font-style: italic;
    color: gray;
    opacity: 0.9;
    font-weight: 700;
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
