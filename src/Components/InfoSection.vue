<template>
    <div>
        <img :src="data.img"/>
        {{data.info }}
        {{ data.skills }}
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

</style>
