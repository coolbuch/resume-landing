<template>
    <div class = "this">
        <div class="image">
            <img :src="data.img"/>
        </div>
        <div class = "info">{{data.info }}</div>
        
        <div class = "skills">{{ data.skills }}</div>
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
    width: 20vh;
}

img{
    width: inherit;
}
.info{
    margin-left: 10px;
}

.this{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    border: 1px solid;
    margin-top: 15px; 
}
</style>
