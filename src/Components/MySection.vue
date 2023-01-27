<template>
    <div>
        <h2>{{title}}</h2> 
        {{ length }}
        <block class="block" v-for="item in items" 
            :item="item">
                {{i}}
            </block>
    </div>
</template>

<script>  
import Block from "./Block"
    export default{
        components:
        {
            Block,
        },
        props:{
            title: String,
            length: Number,
            items : []
        },
        data()
        {
            return {
                
            }
        },
        methods:
        {
            
        },
        mounted(){console.log(length)}
    }
</script>

<style scoped>

.block{
    padding: 15px;
    border: 1px solid;
    margin-top: 15px; 
}
</style>
