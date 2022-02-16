<template>
  <div class="row">
    <div class="col-1">
      
      <button class="btn btn-success button" @click="addNew">Legg til flere</button>
      <select class="select w-full max-w-xs">
  <option disabled selected>Velg type aktivitet</option>
  <option >Arbeid</option>
  <option>Kontakt</option>
  <option>Bestille</option>
  <option>Per</option>
  <option>VIKTIG</option>
</select>
    </div>

    <div class=" px-2 sm:ml-5 flex flex-col w-full sm:w-3/4">
      <h3>Gjøremål {{ draggingInfo }}</h3>

      <draggable
        tag="ul"
        :list="list"
        class="flex flex-col w-full"
        handle=".handle"
        item-key="id"
      >
        <template #item="{ element, index }">
          
          <li class=" bg-gray-700 flex flex-row justify-between my-0.5 border-2 border-gray-700">
            
            <div class="flex flex-col">
              <div class="flex">
      <MenuIcon class="sm:w-7 w-4  text-teal-500 handle"/>
      
            

            <span class="text sm:mx-2 w-5 text-xs sm:text-2xl  sm:mt-0.5 font-extrabold">{{ element.priority }} </span>
            </div>
            <span class="text sm:ml-1 sm:w-12 w-12  text-xs sm:text-base  text-gray-400">{{ element.name }} </span>

</div>
    
        <div class="flex flex-col w-full">
            <textarea type="text" class="h-16 sm:text-base text-xs  focus:bg-teal-700 bg-gray-800 text-white input form-control w-full caret-pink-500 " v-model="element.text" />


    <textarea  v-if="element.moreInfo" type="text" class="sm:text-base text-xs focus:bg-teal-700 bg-gray-800 text-white input  w-full caret-pink-500" v-model="element.extra" />
</div><ArrowNarrowDownIcon @click="element.moreInfo = !element.moreInfo" class="w-7  text-teal-500 handle"/>
            <TrashIcon class="sm:ml-2  w-7 flex justify-self-end text-red-500 sm:mr-2" @click="removeAt(index)"></TrashIcon>
            
          </li>
          
        </template>
        
      </draggable>
      
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>
<script setup>
import draggable from "vuedraggable";
import { MenuIcon, TrashIcon, ArrowNarrowDownIcon } from '@heroicons/vue/solid'

import { ref, computed } from "vue";
let id = null;
const name = ref("Handle");
const display = ref("Handle");
const order = ref(14);
const dragging = ref(false);
const instruction = ref("Drag using the handle icon");
const moreInfo = ref(false)
const list = ref([
  {
    name: "Arbeid",
    id: 0,
    priority: "3",
    text: "mucho to do",
    extra: "EKSTRA TEKST HER",
    moreInfo: true
  },
  {
    name: "Kontakt",
    text: "ring bustillo",
    priority: "2",
    id: 1,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Bestille",
    text: "Ingen har kontroll på det der!",
    priority: "5",
    id: 2,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Per",
    text: "Alltid hør med Siri",
    priority: "1",
    id: 3,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Kontakt",
    text: "Bestill kontaker til Siri",
    priority: "1",
    id: 4,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Siri",
    text: "Mal 24 bilder",
    priority: "1",
    id: 5,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
]);
const list2 = ref([
  {
    name: "Arbeid",
    id: 0,
    priority: "3",
    text: "mucho to do",
    extra: "EKSTRA TEKST HER",
    moreInfo: true
  },
  {
    name: "Kontakt",
    text: "ring bustillo",
    priority: "2",
    id: 1,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Bestille",
    text: "Ingen har kontroll på det der!",
    priority: "5",
    id: 2,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Per",
    text: "Alltid hør med Siri",
    priority: "1",
    id: 3,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Kontakt",
    text: "Bestill kontaker til Siri",
    priority: "1",
    id: 4,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
  {
    name: "Siri",
    text: "Mal 24 bilder",
    priority: "1",
    id: 5,
    extra: "EKSTRA TEKST HER",
    moreInfo: false
  },
]);
const drag = ref(false);

const draggingInfo = computed(() => {
  return dragging.value ? "under drag" : "";
});
// FUNCTIONS

const add = () => {
  id ++;
  list.value.push({ name: "Juan12" + id, id, text: "", priority:1 });
};
const addNew = () => {
  id ++;
  list.value.push({ name: "Juan12" + id, id, text: "", priority:1 });
};
const removeAt = (idx) => {
  if (confirm("VIL DU SLETTE DENNE?")) {
  list.value.splice(idx, 1);
  console.log('SLETTET');
} else {
  // Do nothing!
  console.log('SLETTET IKKE');
}
  
};
const add2 = () => {
  list2.value.push({ name: "Juan" + id, id: id++ });
};
const replace2 = () => {
  list2.value = [{ name: "Edgard", id: id++ }];
};
</script>
