<template>
    <div>
        <button @click="toogle">{{ title }}</button>
        <transition name="fade">
            <div v-click-outside="hide" v-if="opened" class="buttons">
                <button v-for="item in items" @click="choose">{{ item }}</button>
            </div>
        </transition>
    </div>
</template>

<script>  
import ClickOutside from 'vue-click-outside'
    export default{
        directives: {
            ClickOutside
        },
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
                this.opened = true;
            },
            hide(){
                this.opened = false;
            },
            choose(event){
                let type = 0;
                switch (event.target.innerHTML) {
                    case "Сначала новые":
                        type = 1;
                        break;
                    case "Сначала старые":
                        type = 2;
                        break;
                    case "По наличию исходного кода":
                        type = 3;
                        break;
                    default:
                        break;
                }
                this.$emit('sort', {
                    type,
                })
                this.hide();
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
    width: 150px;
    padding: 3px;
    text-align: center;
    background-color: var(--light-color);
    box-shadow: 2px 2px 10px 1px var(--shadow-color);
}
.buttons{
    position:absolute;
}

.buttons button{
    background-color: var(--light-color);
    margin-top: 3px;
}
.fade-enter{
    opacity: 0;
}
.fade-enter-to, .fade-leave-to {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
