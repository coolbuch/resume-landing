<template>
    <div>
       <span>{{ item.title }} </span> 
       <div v-if="item.faculty" class="faculty">{{ item.faculty }}</div>
       <div v-if="item.dateFrom" class = "date">{{ item.dateFrom }} 
            <span v-if="item.dateTo" class = "date"> -{{ item.dateTo}}</span>
       </div>
       <div v-if="item.direction" class = "direction">{{ item.direction }}</div>
       <div v-if="item.profile"> {{ item.profile }}</div>
       
       <div v-if="item.list"> 
            <li v-for="element in item.list">{{ element }}</li>  
       </div>
       <div v-if="item.info"> {{ item.info }} </div>
       <div><a v-if="item.link" :href="item.link" target="_blank"> [Исходный код]</a></div>
       <div><a v-if="item.demoLink" :href="item.demoLink" target="_blank"> [Демонстрация]</a></div>
    </div>
</template>

<script>  
    export default{
        data()
        {
            return {
                
            }
        },
        props:
        {
            item: {},
        },
        methods:
        {
            
        }
    }
</script>

<style scoped>

.date{
    font-style: italic;
    color: gray;
    opacity: 0.9;
    font-size: 14px;
}

div , span, a{
    margin-top:3px;
}

.direction{
    font-weight: bold;
}

.faculty{
    font-style: italic;
    font-size: 12px;
}
</style>
