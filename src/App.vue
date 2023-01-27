<template>
    <div>
        <MySection v-for="section in sections" :title="section.title" :items="section.items">

        </MySection>
    </div>
</template>

<script>  
import Section from "./Components/MySection"
import data from "./data"
    export default{
        components:{
            MySection: Section,
        },
        data()
        {
            return {
                sections : data.sections
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#app{
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
}
</style>
