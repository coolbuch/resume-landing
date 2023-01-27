<template>
    <div>
       <span>{{ item.title }} </span> 
       <span v-if="item.faculty">,{{ item.faculty }}</span>
       <div v-if="item.dateFrom" class = "date">{{ item.dateFrom }} - {{ item.dateTo ? item.dateTo : "по текущее время"}}</div>
       <div v-if="item.direction" class = "direction">{{ item.direction }}</div>
       <div v-if="item.profile"> {{ item.profile }}</div>
       <div v-if="item.info"> {{ item.info }} </div>
       <a v-if="item.link" :href="item.link" target="_blank"> [Ссылка]</a>
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
}



.direction{
    font-weight: bold;
}

</style>
