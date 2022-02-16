<template>
  <div class="row">
    <div class="col-1">
      <button class="btn btn-secondary button" @click="add">Add</button>
    </div>

    <div class="col-7">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        tag="ul"
        :list="list"
        class="list-group"
        handle=".handle"
        item-key="name"
      >
        <template #item="{ element, index }">
          <li class="flex flex-row">
            <div>
              <svg class="handle svg-icon" viewBox="0 0 20 20" width="50">
                <path
                  fill="none"
                  d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"
                ></path>
              </svg>
            </div>

            <span class="text">{{ element.name }} </span>

            <input type="text" class="form-control" v-model="element.text" />

            <span class="fa fa-times close" @click="removeAt(index)"></span>
          </li>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>
<script setup>
import draggable from "vuedraggable";

import { ref, computed } from "vue";
let id = 3;
const name = ref("Handle");
const display = ref("Handle");
const order = ref(14);
const dragging = ref(false);
const instruction = ref("Drag using the handle icon");
const list = ref([
  {
    name: "John",
    id: 0,
    priority: "3",
    text: "mucho to do",
  },
  {
    name: "Joao",
    text: "ring bustillo",
    priority: "2",
    id: 1,
  },
  {
    name: "Jean",
    text: "Alltid hør med Per",
    priority: "1",
    id: 2,
  },
]);
const list2 = ref([
  {
    name: "John",
    id: 0,
  },
  {
    name: "Joao",
    id: 1,
  },
  {
    name: "Jean",
    id: 2,
  },
]);
const drag = ref(false);

const draggingInfo = computed(() => {
  return dragging ? "under drag" : "";
});
// FUNCTIONS

const add = () => {
  list.value.push({ name: "Juan" + id, id, text: "" });
};
const removeAt = (idx) => {
  list.value.splice(idx, 1);
};
const add2 = () => {
  list2.value.push({ name: "Juan" + id, id: id++ });
};
const replace2 = () => {
  list2.value = [{ name: "Edgard", id: id++ }];
};
</script>
