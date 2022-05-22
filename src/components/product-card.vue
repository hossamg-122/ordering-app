<template>
  <div  class="group cursor-pointer" @click="handleCardClick">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
          <img :src="product.image" :alt="product.description" class="w-full h-full object-center object-cover group-hover:opacity-75 ">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{product.name}}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">{{product.Price | currency}} </p>
      </div>
</template>

<script>
import { eventBus } from '@/main'
export default {
    props:{
    product:{
       
        required:true,
        default:{}
    }
},
methods:{
  // fires an event to the event bus
    handleCardClick(){
        eventBus.$emit('showModal',this.product)
    }
}

}
</script>

<style>

</style>