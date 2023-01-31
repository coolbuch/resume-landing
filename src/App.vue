<template>
    <div>
        <div class="flex-wrapper">
            <div class="left">
                <div class="section">
                    <InfoSection  :data = "data.info"></InfoSection>
                    
                </div>
            </div>
            
            <div class="right">
                <div class="menu">
                    <button>123</button>
                    <button>123</button>
                    <button>123</button>
                </div>
                <MySection class="section" v-for="section in data.sections" :title="section.title" :items="section.items">
            </MySection>
            </div>
            
        </div>


    </div>


</template>

<script>  
import Section from "./Components/MySection"
import InfoSection from "./Components/InfoSection.vue"
import data from "./data"
    export default{
        components:{
            MySection: Section,
            InfoSection,
        },
        data()
        {
            return {
                data : data
            }
        },
        methods:
        {
            
        },
        mounted()
        {
            console.log(data.sections);
            
        }
    }
</script>

<style>


.section{
    padding: 3px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.menu{
        margin-bottom: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;

    }
.menu button{
    min-width: 100px;
    font-family: inherit;
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
}

.menu button:hover {
  background: #1d49aa;
}

.menu button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}

ul{
    margin: 0;
    padding: 0;
    list-style-position: inside;
}

@media screen and (min-width:720px) {
    body{
        background-color: gainsboro;
    }
    #app{
        margin: 0 auto;
        width: 95%;
        margin-top: 10px;
    }

    .flex-wrapper
    {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }

    .left{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }

    .right{
        flex-grow: 1;
    }

    
}



</style>
