<template>
    <div>
        <div class="section-header">
            <h2 class="title"> 
                {{title}} 
            </h2>
            <div v-if="sortable" class="dropdown">
                <my-drop-down-menu @sort="sort" title="Сортировка" :items="['Сначала новые','Сначала старые', 'По наличию исходного кода']"></my-drop-down-menu>
            </div>
        </div>
        <block class="block" v-for="item in localItems" 
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
                localItems : [],
            }
        },
        methods:
        {
            copyItems(){
                this.localItems = [];
                this.items.forEach(element => {
                    this.localItems.push(element);
                });
            },
            revertSort(){
                this.localItems = this.items.slice().reverse();
            },
            parameterSort(){
                let endArray = [];
                this.localItems = [];
                this.items.forEach(element => {
                    if (element.link)
                        this.localItems.push(element);
                    else
                        endArray.push(element);
                });
                endArray.forEach(element => {
                    this.localItems.push(element);
                });
            },
            sort(data){
                if(data.type === 1)
                {
                    this.copyItems();
                }
                if (data.type === 2)
                {
                    this.revertSort();
                }
                if (data.type === 3)
                {
                    this.parameterSort();
                }
            }
        },
        mounted(){
            this.copyItems();
        }
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

.dropdown{
    margin-top: 5px;
}
</style>
