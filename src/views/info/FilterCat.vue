<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900"
    
  >  <!-- FILTER BY PRICE --> 
        <h3>Filter By Price Range</h3> 
        <label for="vol">Price (between 0 and 1000):</label>
        <input type="range" v-model="range" min="0" max="1000" step="10"/> 
        Selected : {{range}}
         
        <h3 class="font-extrabold text-teal-500">Filter By Price</h3> 
      
        <ul >
            <li v-for="prod in filterProductsByRange" :key="prod"> Product Name : {{prod.name}} - Price : {{prod.price}} {{prod.category}} Skill: {{prod.skill}}</li>
        </ul>
       
  <!-- FILTER BY Name --> 
        <div v-if="switcher" class="flex justify-center items-center flex-col"> 
        <h3 class="font-extrabold text-teal-500">Filter By Name</h3> 
        <input type="text" v-model="name" placeholder="Filter By Name"/>
        <ul >
            <li v-for="prod in filterProductsByName" :key="prod"> Product Name : {{prod.name}} - Price : {{prod.price}} {{prod.category}} Skill: {{prod.skill}}</li>
        </ul>
        </div>
        <div v-if="!switcher" class="flex justify-center items-center flex-col">
                  <h3 class="font-extrabold text-teal-500">Filter By Skill</h3> 
        <input type="text" v-model="skill" placeholder="Filter By Skill"/>
        <ul >
            <li v-for="prod in filterProductsBySkill" :key="prod"> Product Name : {{prod.name}} - Price : {{prod.price}} {{prod.category}} Skill: {{prod.skill}} </li>
        </ul>
        </div>
        <button class="btn btn-accent" @click="switcher = !switcher">Skill/name</button>
        <!-- FILTER BY Category --> 
      <h3 class="font-extrabold text-teal-500">Filter By Category</h3> 
        <select  v-model="category">
            <option value="Accessories">Accessories</option>
            <option value="Laptop">Laptop</option>
            <option value="Stationary">Stationary</option>
          
        </select> 
        <ul>
            <li v-for="product in filterProductsByCategory" :key="product">Product Name : {{product.name}} - Price : {{product.price}} {{product.category}}  {{product.skill}}</li>
        </ul>
  <button @click="startIt" class="btn btn-primary">Last</button>
  <button @click="startFront" class="btn btn-primary">First</button>
  <button @click="startMiddle" class="btn btn-primary">Middle</button>
  <button @click="checker" class="btn btn-primary">Checker</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {computed} from 'vue'

let switcher = ref(false);
let category = ref("");
const name = ref("");
const skill = ref("");
const range = ref();
let products = ref([
                { name: "Keyboard", price: 44, category: 'Accessories', skill: "beginner"},
                { name: "Mouse", price: 20, category: 'Accessories', skill: "beginner"},
                { name: "Monitor", price: 399, category: 'Accessories', skill: "intermediate"},
                { name: "Dell XPS", price: 599, category: 'Laptop', skill: "pro"},
                { name: "MacBook Pro", price: 899, category: 'Laptop', skill: "student"},
                { name: "Pencil Box", price: 6, category: 'Stationary', skill: "intermediate"},
                { name: "Pen", price: 2, category: 'Stationary', skill: "pro"},
                { name: "USB Cable", price: 7, category: 'Accessories', skill: "beginner"},
                { name: "Eraser", price: 2, category: 'Stationary', skill: "beginner"},
                { name: "Highlighter", price: 5, category: 'Stationary', skill: "student"}
            ]);
// FILTER BY RANGE INPUT
const filterProductsByRange = computed(() =>  {
     
                return products.value.filter(product => (product.price > 0 && product.price < range.value) ? product : '')
            });
// FILTER BY SKILL
const filterProductsBySkill = computed(() =>  {
                  
                return products.value.filter((product) => {
                   return (
                      product.skill
                      .toLowerCase()
                      .indexOf(skill.value.toLowerCase()) != -1 
                ); 
            })
            });
// // FILTER BY NAME SEARCH
const filterProductsByName = computed(() =>  {
                  
                return products.value.filter((product) => {
                   return (
                      product.name
                      .toLowerCase()
                      .indexOf(name.value.toLowerCase()) != -1 
                ); 
            })
            });
// FILTER BY OPTION IN SELECTOR
const filterProductsByCategory = computed(() =>  {
         
                return products.value.filter(product => !product.category.indexOf(category.value))
            
        
        })
</script>
