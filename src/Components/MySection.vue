<template>
    <div>
        {{title}} 
        <block>1</block>
        <block>1</block>
    </div>
</template>

<script>  
import Block from "./Block"
    export default{
        components:
        {
            Block,
        },
        data()
        {
            return {
                title: "Section",
            }
        },
        methods:
        {
            
        }
    }
</script>

<style>
</style>
