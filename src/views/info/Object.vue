<template>
  <div
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900"
  >
  <ul><li v-for="car in cars" :key="car">{{car.color}} {{car.type}} {{car.capacity}}</li></ul>
    <p class="text-xs">{{ cars }}</p>
    <p class="mt-2 border-t-2 text-xs">{{ carFind }}</p>
    <p class="mt-2 border-t-2 text-xs">{{ carsFind }}</p>
    <p class="mt-2 border-t-2 text-xs">{{ redFinder }}</p>
    <p class="mt-2 border-t-2 text-xs">{{ sizes }}</p>
    <p class="mt-2 border-t-2 text-xs">{{ carsProperties }}</p>
  </div>
  <ul v-for="x in redFinder" :key="x">
    {{
      x.capacity
    }}
  </ul>
  <button @click="startIt" class="btn btn-primary">Last</button>
  <button @click="startFront" class="btn btn-primary">First</button>
  <button @click="startMiddle" class="btn btn-primary">Middle</button>
  <button @click="checker" class="btn btn-primary">Checker</button>
  <button @click="$router.push('filtercat')" class="btn btn-primary">FilterCat</button>
</template>
<script setup>
import { ref } from "vue";

let cars = ref([
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2016-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 5,
  },
  {
    color: "purple",
    type: "station wagon",
    registration: new Date("2018-01-03"),
    capacity: 3,
  },
  {
    color: "purple",
    type: "roadster wagon",
    registration: new Date("2019-01-03"),
    capacity: 1,
  },
  {
    color: "yellow",
    type: "station wagon",
    registration: new Date("2019-01-03"),
    capacity: 1,
  },
]);
// ADDS PROPERTIES TO THE ORGINAL ARRAY
cars.value.forEach((car) => {
  car["size"] = "large";
  if (car.capacity <= 5) {
    car["size"] = "medium";
  }
  if (car.capacity <= 3) {
    car["size"] = "small";
  }
});
// CREATE NEW ARRAY WITH ONLY THE NEW PROPERTIES
let carsProperties = cars.value.map((car) => {
  let properties = { capacity: car.capacity, size: "large" };
  if (car.capacity <= 5) {
    properties["size"] = "medium";
  }
  if (car.capacity <= 3) {
    properties["size"] = "small";
  }
  return properties;
});
// MAPPS OUT HOW MANY WIT THESE PROPERTIES AND PUT THEM INTO A NEW ARRAY ONLY NEW VALUES
let sizes = cars.value.map((car) => {
  if (car.capacity <= 3) {
    return "small";
  }
  if (car.capacity <= 5) {
    return "medium";
  }
  return "large";
});
// FILTER RETURNS ONLY MANY; FILTER RETURNS ONLY 1, CAN ADD MORE CRITERIAS WITH &&
let redFinder = cars.value.filter((car) => car.color === "purple");
let carFind = cars.value.find((car) => car.color === "purple");
let carsFind = cars.value.find(
  (car) => car.color === "purple" && car.type === "station wagon"
);
let car = {
  color: "purple",
  type: "minivan",
  registration: new Date("2016-01-03"),
  capacity: 1,
};
// ADD IN THE END OF ARRAY
const startIt = () => {
  cars.value.unshift(car);
  console.log(cars);
};
// ADD IN THE START OF ARRAY
const startFront = () => {
  cars.value.push(car);
  console.log(cars);
};
// START IN THE MIDDLE (FIRST VALUE TELLS HOW FAR BEFORE PLACE)(SECOUND VALUE TELLS HOW MANY TO REMOVE)
const startMiddle = () => {
  cars.value.splice(4, 0, car);
  console.log(cars);
};
const checker = () => {
  console.log(carFind);
};
</script>
