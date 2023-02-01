<template>
    <div>
        <button @click="toogle">{{ title }}</button>
        <div v-if="opened" class="buttons">
            <button v-for="item in items">{{ item }}</button>
        </div>
    </div>
</template>

<script>  
    export default{
        components:
        {
        },
        props:{
            title: String,
            items: []
        },
        data()
        {
            return {
                opened: false,
            }
        },
        methods:
        {
            toogle(){
                this.opened = !this.opened
            }
        },
        mounted(){}
    }
</script>

<style scoped>

div, button{
    display: block;
}

button{
    width: 100px;
    padding: 5px;
    text-align: center;
    background-color: var(--dark-color);
}
.buttons{
    position:absolute;
}

.buttons button{
    background-color: var(--light-color);
}
</style>
