<template>
    <div>
        <div>
            <h2>{{title}}</h2> 
            <div v-if="sortable" class="menu">
                
            </div>
        </div>
        <block class="block" v-for="item in items" 
            :item="item">
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
            sortable: String,
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
        mounted(){}
    }
</script>

<style scoped>
.menu{
    margin: 0px;
    padding: 0px;
    display: flex;
}
.block{
    padding: 15px;
    border: 1px solid;
    margin-top: 15px; 
}
</style>
