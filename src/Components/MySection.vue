<template>
    <div>
        <div class="section-header">
            <h2 class="title"> 
                {{title}} 
            </h2>
            <div v-if="sortable" class="dropdown">
                <my-drop-down-menu :title="111" :items="['По дате', 'По наличию исходного кода']"></my-drop-down-menu>
            </div>
        </div>
        <block class="block" v-for="item in items" 
            :item="item">
            </block>
    </div>
</template>

<script>  
import Block from "./Block"
import MyDropDownMenu from "@/UI/MyDropDownMenu.vue";
    export default{
        components:
        {
            Block,
            MyDropDownMenu,
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
.block{
    padding: 15px;
    /*border: 1px solid;*/
    box-shadow: 2px 2px 10px 1px var(--shadow-color);
    background-color: var(--light-color);
    margin-top: 15px; 
}

.section-header{
    display: flex;
    justify-content: space-between;
}

</style>
