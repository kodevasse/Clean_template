<template>
  <div class="row">
    <div
      class="col-1 row mx-auto flex flex-row justify-start gap-x-1 sm:ml-40 sm:gap-x-3"
    >
      <button class="btn btn-primary button" @click="addNew">Ny todo</button>
      <select class="select w-35 max-w-xs text-xs">
        <option disabled selected>Velg type aktivitet</option>
        <option>Arbeid</option>
        <option>Kontakt</option>
        <option>Bestille</option>
        <option>Per</option>
        <option>VIKTIG</option>
      </select>
      <select class="select w-15 max-w-xs text-xs">
        <option disabled selected>Prioritet</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <p
      class="text-font-serif ml-4 mt-5 text-lg font-bold text-teal-400 sm:ml-32"
    >
      {{ textSiri.title }}
    </p>
    <div class="relative mt-5 flex w-full flex-col px-2 sm:ml-5 sm:w-3/4">
      <h3 class="text-lg font-bold">Pågår 🔥🔥🔥 {{ draggingInfo }}</h3>
      <input type="text" v-model="text" placeholder="Filter By Skill" />
      <div class="flex flex-row">
        <button class="btn btn-active btn-ghost" @click="sorting0">Alle</button>
        <button class="btn btn-active btn-ghost" @click="sorting1">1</button>
        <button class="btn btn-active btn-ghost" @click="sorting2">2</button>
        <button class="btn btn-active btn-ghost" @click="sorting3">3</button>
        <button class="btn btn-active btn-ghost" @click="arbeidSort">
          arbeid
        </button>
        <button class="btn btn-active btn-ghost" @click="siriSort">siri</button>
      </div>
      <draggable
        tag="ul"
        :list="filterProducts"
        class="flex w-full flex-col"
        handle=".handle"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element, index }">
          <div>
            <span
              class="indicator-item badge indicator-bottom text-2xs absolute z-0 p-0 opacity-50"
              >{{ element.name }}</span
            >
            <li
              class="my-0.5 flex flex-row justify-between border-2 border-gray-700 bg-gray-700"
            >
              <div class="flex flex-col">
                <div class="flex">
                  <MenuIcon
                    class="handle mt-5 w-6 text-teal-500 sm:mt-3 sm:w-5"
                  />

                  <span
                    class="text text-md mt-5 w-5 font-extrabold sm:mx-1 sm:mt-3 sm:text-xl"
                    >{{ element.priority }}
                  </span>
                </div>
                <!-- <span
                  class="text w-12 text-xs text-gray-400 sm:ml-1 sm:w-12 sm:text-base"
                  >{{ element.name }}
                </span> -->
              </div>

              <div class="flex w-full flex-col">
                <textarea
                  style="overflow: hidden"
                  type="text"
                  class="input form-control h-12 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:h-10 sm:text-base"
                  v-model="element.text"
                />

                <textarea
                  style="overflow: hidden"
                  v-if="element.moreInfo"
                  type="text"
                  class="input form-control h-10 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:text-base"
                  v-model="element.extra"
                />
              </div>
              <div class="mt-1 flex flex-col sm:flex-row">
                <ArrowNarrowDownIcon
                  @click="element.moreInfo = !element.moreInfo"
                  class="handle w-5 text-teal-500"
                />
                <TrashIcon
                  class="w-5 text-red-500"
                  @click="removeAt(index)"
                ></TrashIcon>
              </div>
            </li>
          </div>
        </template>
      </draggable>
    </div>
    <div class="relative flex w-full flex-col px-2 sm:ml-5 sm:w-3/4">
      <h3 class="text-lg font-bold">
        Arbeidsliste 😶‍🌫️😶‍🌫️😶‍🌫️{{ draggingInfo }}
      </h3>

      <draggable
        tag="ul"
        :list="list2"
        class="flex w-full flex-col"
        handle=".handle"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element, index }">
          <div>
            <span
              class="indicator-item badge indicator-bottom text-2xs absolute z-0 p-0 opacity-50"
              >{{ element.name }}</span
            >
            <li
              class="my-0.5 flex flex-row justify-between border-2 border-gray-700 bg-gray-700"
            >
              <div class="flex flex-col">
                <div class="flex">
                  <MenuIcon
                    class="handle mt-5 w-6 text-teal-500 sm:mt-3 sm:w-5"
                  />

                  <span
                    class="text text-md mt-5 w-5 font-extrabold sm:mx-1 sm:mt-3 sm:text-xl"
                    >{{ element.priority }}
                  </span>
                </div>
                <!-- <span
                  class="text w-12 text-xs text-gray-400 sm:ml-1 sm:w-12 sm:text-base"
                  >{{ element.name }}
                </span> -->
              </div>

              <div class="flex w-full flex-col">
                <textarea
                  style="overflow: hidden"
                  type="text"
                  class="input form-control h-12 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:h-10 sm:text-base"
                  v-model="element.text"
                />

                <textarea
                  style="overflow: hidden"
                  v-if="element.moreInfo"
                  type="text"
                  class="input form-control h-10 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:text-base"
                  v-model="element.extra"
                />
              </div>
              <div class="mt-1 flex flex-col sm:flex-row">
                <ArrowNarrowDownIcon
                  @click="element.moreInfo = !element.moreInfo"
                  class="handle w-5 text-teal-500"
                />
                <TrashIcon
                  class="w-5 text-red-500"
                  @click="removeAt(index)"
                ></TrashIcon>
              </div>
            </li>
          </div>
        </template>
      </draggable>
    </div>
    <div class="relative flex w-full flex-col px-2 sm:ml-5 sm:w-3/4">
      <h3 class="text-lg font-bold">Backlog 😰😰😰{{ draggingInfo }}</h3>

      <draggable
        tag="ul"
        :list="list3"
        class="flex w-full flex-col"
        handle=".handle"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element, index }">
          <div>
            <span
              class="indicator-item badge indicator-bottom text-2xs absolute z-0 p-0 opacity-50"
              >{{ element.name }}</span
            >
            <li
              class="my-0.5 flex flex-row justify-between border-2 border-gray-700 bg-gray-700"
            >
              <div class="flex flex-col">
                <div class="flex">
                  <MenuIcon
                    class="handle mt-5 w-6 text-teal-500 sm:mt-3 sm:w-5"
                  />

                  <span
                    class="text text-md mt-5 w-5 font-extrabold sm:mx-1 sm:mt-3 sm:text-xl"
                    >{{ element.priority }}
                  </span>
                </div>
                <!-- <span
                  class="text w-12 text-xs text-gray-400 sm:ml-1 sm:w-12 sm:text-base"
                  >{{ element.name }}
                </span> -->
              </div>

              <div class="flex w-full flex-col">
                <textarea
                  style="overflow: hidden"
                  type="text"
                  class="input form-control h-12 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:h-10 sm:text-base"
                  v-model="element.text"
                />

                <textarea
                  style="overflow: hidden"
                  v-if="element.moreInfo"
                  type="text"
                  class="input form-control h-10 w-full bg-gray-800 text-xs text-white caret-pink-500 focus:bg-teal-700 sm:text-base"
                  v-model="element.extra"
                />
              </div>
              <div class="mt-1 flex flex-col sm:flex-row">
                <ArrowNarrowDownIcon
                  @click="element.moreInfo = !element.moreInfo"
                  class="handle w-5 text-teal-500"
                />
                <TrashIcon
                  class="w-5 text-red-500"
                  @click="removeAt(index)"
                ></TrashIcon>
              </div>
            </li>
          </div>
        </template>
      </draggable>
    </div>
    <rawDisplayer class="col-3" :value="list" title="List" />
    <rawDisplayer class="col-3" :value="list2" title="List 2" />
    <rawDisplayer class="col-3" :value="list3" title="List 2" />
  </div>
</template>
<script setup>
import draggable from "vuedraggable";
import { MenuIcon, TrashIcon, ArrowNarrowDownIcon } from "@heroicons/vue/solid";
import { happyList } from "../../store/happy.js";

import { ref, computed, onMounted } from "vue";
let id = null;
const name = ref("");
const display = ref("Handle");
const order = ref(14);
const dragging = ref(false);
const instruction = ref("Drag using the handle icon");
const moreInfo = ref(false);
const textSiri = ref("");
const skill = ref("");
const priority = ref("");
const text = ref("");
onMounted(() => {
  var value = getRandomInt(happyList.length);
  console.log(value);
  textSiri.value = happyList[value];
  console.log(textSiri);
});
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let list = ref([
  {
    name: "Arbeid",
    id: 0,
    priority: "3",
    text: "mucho to do",
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "ring bustillo",
    priority: "2",
    id: 1,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Bestille",
    text: "Ingen har kontroll på det der!",
    priority: "5",
    id: 2,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Per",
    text: "Alltid hør med Siri",
    priority: "1",
    id: 3,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "Bestill kontaker til Siri",
    priority: "1",
    id: 4,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Siri",
    text: "Mal 24 bilder",
    priority: "1",
    id: 5,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
]);
let list2 = ref([
  {
    name: "Arbeid",
    id: 6,
    priority: "3",
    text: "mucho to do",
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "ring bustillo",
    priority: "2",
    id: 7,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Bestille",
    text: "Ingen har kontroll på det der!",
    priority: "5",
    id: 8,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Per",
    text: "Alltid hør med Siri",
    priority: "1",
    id: 9,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "Bestill kontaker til Siri",
    priority: "1",
    id: 10,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Siri",
    text: "Mal 24 bilder",
    priority: "1",
    id: 11,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
]);
let list3 = ref([
  {
    name: "Arbeid",
    id: 12,
    priority: "3",
    text: "mucho to do",
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "ring bustillo",
    priority: "2",
    id: 13,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Bestille",
    text: "Ingen har kontroll på det der!",
    priority: "5",
    id: 14,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Per",
    text: "Alltid hør med Siri",
    priority: "1",
    id: 15,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Kontakt",
    text: "Bestill kontaker til Siri",
    priority: "1",
    id: 16,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
  {
    name: "Siri",
    text: "Mal 24 bilder",
    priority: "1",
    id: 17,
    extra: "EKSTRA TEKST HER",
    moreInfo: false,
  },
]);
const drag = ref(false);

const draggingInfo = computed(() => {
  return dragging.value ? "under drag" : "";
});
// FUNCTIONS

const add = () => {
  id++;
  list.value.push({ name: "Juan12" + id, id, text: "", priority: 1 });
};
const addNew = () => {
  id++;
  list.value.push({ name: "Juan12" + id, id, text: "", priority: 1 });
};
const removeAt = (idx) => {
  if (confirm("VIL DU SLETTE DENNE?")) {
    list.value.splice(idx, 1);
    console.log("SLETTET");
  } else {
    // Do nothing!
    console.log("SLETTET IKKE");
  }
};
const add2 = () => {
  list2.value.push({ name: "Juan" + id, id: id++ });
};
const replace2 = () => {
  list2.value = [{ name: "Edgard", id: id++ }];
};
const log = (evt) => {
  window.console.log(evt);
};

// Filtering DOING
// FILTER BY priority
const filterListsByPriority = () => {
  return list.value.filter((element) => {
    return (
      element.priority.toLowerCase().indexOf(priority.value.toLowerCase()) != -1
    );
  });
};

const filterListsByType = (element) => {
  return element.filter((list) => !name.value.indexOf(name));
};
const filterProductsByText = () => {
  return list.value.filter((element) => {
    return element.text.toLowerCase().indexOf(text.value.toLowerCase()) != -1;
  });
};
const filterProducts = computed(() => {
  return filterProductsByText(), filterListsByPriority(), filterListsByType();
});

const sorting0 = function () {
  priority.value = "";
};
const sorting1 = function () {
  priority.value = "1";
};
const sorting2 = function () {
  priority.value = "2";
};
const sorting3 = function () {
  priority.value = "3";
};
const arbeidSort = function () {
  name.value = "Arbeid";
};
const siriSort = function () {
  name.value = "Siri";
};
</script>
