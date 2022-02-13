<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref } from "vue";

const array = [2, 3, 1, 3, 2, 1, 1];
const counter = useCounterStore();

counter.count++;
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 });
// or using an action instead
</script>
<template>
  <p class="text-white">{{ counter.value }}</p>
  <div class="text-white" v-for="a in array" :key="a">{{ value }}1</div>
</template>
