<template>
    <div>
        {{ title }}
       <slot></slot>
    </div>
</template>

<script>  
    export default{
        data()
        {
            return {
                title: "Block",
            }
        },
        props:
        {
            title: String,
            dateFrom: String,
            dateTo: String,
            
        },
        methods:
        {
            
        }
    }
</script>

<style>
</style>
