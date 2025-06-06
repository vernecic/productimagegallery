<template>
  <div class="min-h-screen ">
    <div class="flex flex-col justify-center items-center mt-20 ">
    <div class=" flex flex-col ">
      <div class="flex gap-10 ">
      <div class=" relative">
        <img :src="curPic" alt="" class="w-128 rounded-lg " />
        <div class="absolute bottom-1 right-0 mr-2 flex mb-2 items-center justify-center">
        <img src="../images/left.svg" alt="" class="cursor-pointer" @click="prevPic">
    
        <div class="flex space-x-1" >
         <div 
    v-for="(image, index) in images" 
    :key="index"
    class="w-2 h-2 rounded-full transition-colors cursor-pointer focus:outline-none"
    :class="index === curPicIndex ? 'bg-black' : 'bg-gray-400'" @click="changePic(index)"
  ></div>
        </div>
        <img src="../images/right.svg" alt="" class="cursor-pointer" @click="nextPic">
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-robotoCondensed">Nike Air Force One</h1>
        <h2 class="font text-md mt-1 text-slate-600">Men's shoes</h2>
        <h3 class="text-lg mt-2 font-semibold">€119.99</h3>
        <div class="mt-5 grid grid-cols-6 gap-1">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            alt=""
            class="w-16 h-16 rounded-lg cursor-pointer focus:outline-none hover:scale-105 hover:shadow-lg transition duration-200"
            @click="change(img)"
            
          />
        </div>
        <h1 class="mt-5 text-lg">Select size</h1>
        <p class="text-slate-600 text-sm">Fits large; we recommend ordering half a size down</p>
        <div class="mt-2 grid grid-cols-6 gap-1 ">
          <div class="border border-slate-200 text-center rounded-lg p-3 cursor-pointer hover:bg-slate-200 hover:shadow-md" v-for="(size, index) in sizes" :key="index">{{ size }}</div>
          
        </div>
        <div class="mt-5 flex flex-col space-y-4">
          <button class="text-center bg-black text-white px-6 py-4 font-semibold rounded-full cursor-pointer w-full shadow-xl hover:bg-gray-800  transition duration-200">
           <h1>Add to Bag</h1>
          </button>
           <button class="text-center border border-black  px-6 py-4 font-semibold rounded-full cursor-pointer w-full shadow-xl hover:bg-slate-200  transition duration-200">
           <h1>Favourite</h1>
          </button>
          </div>
          </div>
        
          
        </div>
        <div >
          <h1 class="text-lg mt-10 font-semibold">Related products</h1>
          <div class="flex gap-8 mt-2">
 
            <div v-for="(product, index) in relatedProducts" :key="index" class="cursor-pointer  mt-2">
              <img :src="product.image" alt="" class="w-64 hover:scale-105 shadow-md hover:shadow-lg">
              <h1 class="text-lg font-medium mt-2">{{ product.name }}</h1>
                <p>{{ product.price }}</p></div>

          </div>
          </div>
      </div>
    
    </div>
    
  </div>
</template>

<script setup>

import { ref, computed } from 'vue'


const images = [
  new URL('../images/airforce-main.jpg', import.meta.url).href,
  new URL('../images/airforce-second.jpg', import.meta.url).href,
  new URL('../images/airforce-third.jpg', import.meta.url).href,
  new URL('../images/airforce-fourth.jpg', import.meta.url).href,

]

const sizes = ['40', '41', '42', '42.5', '43', '44', '44.5', '45', '46']

const curPic = ref(images[0])

const relatedProducts = ref([
  {
  name: 'Nike Initiator',
  price: 79.99,
  image: new URL('../images/initiator.jpg', import.meta.url).href
},
  {
    name: 'Nike Field General',
    price: 109.99,
   image: new URL('../images/general.jpg', import.meta.url).href
  },
  {
    name: 'Nike Shox TL',
    price: 189.99,
    image: new URL('../images/shoxtl.jpg', import.meta.url).href
  }
])

const curPicIndex = computed(() =>{
  return images.indexOf(curPic.value)
})

function nextPic(){

  const curIndex = images.indexOf(curPic.value)
  const nextIndex = curIndex === images.length - 1 ? 0 : curIndex + 1


 
  curPic.value = images[nextIndex]
  console.log(curPicIndex.value)

}

function prevPic(){
   const curIndex = images.indexOf(curPic.value)
   const prevIndex = curIndex === 0 ? images.length - 1 : curIndex - 1 
    
  
   curPic.value = images[prevIndex]
     console.log(curPicIndex.value)
  
  
}
function change(img){
  curPic.value = img
}
function changePic(index){
  curPic.value = images[index]

}





</script>
