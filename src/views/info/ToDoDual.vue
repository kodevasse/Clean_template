<template>
  <div class="row">
    <div class="col-4">
      <h3 class="rounded bg-gray-700 p-1">First draggable with footer</h3>

      <draggable
        id="first"
        data-source="juju"
        :list="list"
        class="list-group"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>

        <template #footer>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-4">
      <h3 class="rounded bg-gray-700 p-1">Second draggable with header</h3>

      <draggable :list="list2" class="list-group" group="a" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div
            class="btn-group list-group-item"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add2">Add</button>
            <button class="btn btn-secondary" @click="replace2">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="list2" title="List2" />
  </div>
</template>
<script setup>
import draggable from "vuedraggable";

import { ref } from "vue";
let id = ref(1);
const name = ref("two-list-headerslots");
const display = ref("Two list header slot");
const order = ref(14);
const list = ref([
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

// FUNCTIONS

const add = () => {
  list.value.push({ name: "Juan" + id, id: id++ });
};
const replace = () => {
  list.value = [{ name: "Edgard", id: id++ }];
};
const add2 = () => {
  list2.value.push({ name: "Juan" + id, id: id++ });
};
const replace2 = () => {
  list2.value = [{ name: "Edgard", id: id++ }];
};
</script>
