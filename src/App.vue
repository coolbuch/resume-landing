<template>
    <div>
        
        <InfoSection :data = "data.info"></InfoSection>
        <div class = "sections">
            <MySection v-for="section in data.sections" :title="section.title" :items="section.items">

            </MySection>
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
