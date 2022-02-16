<template>
  <div>
    <div>
      <form @submit.prevent>
        <input
          type="text"
          placeholder="Name"
          class="input w-full max-w-xs"
          v-model="form.name"
        /><input
          type="text"
          placeholder="Email"
          class="input w-full max-w-xs"
          v-model="form.email"
        />
        <input
          type="text"
          placeholder="Password"
          class="input w-full max-w-xs"
          v-model="form.password"
        />
        <input
          type="text"
          placeholder="Status"
          class="input w-full max-w-xs"
          v-model="form.status"
        />
        <input
          type="text"
          placeholder="Phone"
          class="input w-full max-w-xs"
          v-model="form.phone"
        />
        <button class="btn btn-success" @click="submitForm">Submit Data</button>
        <button class="btn btn-warning" @click="getPosts">Get Posts</button>
      </form>
    </div>
    <li v-for="post in posts" :key="post.id">
      id: {{ post.id }} title: {{ post.title }}
    </li>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
const form = reactive({
  name: "",
  email: "",
  password: "",
  status: "",
  phone: "",
});
const posts = ref(null);
const submitshit = () => {
  console.log("Formdata is:", form);
};
// SUBMIT POSTS
const submitForm = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", form)
    .then((res) => {
      console.log("SUCCESSFULL CREATED POSTS");
      console.log(res);
    })
    .catch((error) => {
      error.response.status;
    })
    .finally(() => {
      console.log("DID THE JOB DONT KNOW RESULT");
    });
};

// GET POSTS
const getPosts = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res);
      posts.value = res.data;
    })
    .catch((error) => {
      error.response.status;
    })
    .finally(() => {
      console.log("DID THE JOB DONT KNOW RESULT");
    });
};
</script>
