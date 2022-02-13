<template>
  // Cool filtered and blured background with 3 dots
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 px-16"
  >
    <div class="relative w-full max-w-lg">
      <div
        class="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-teal-300 opacity-40 blur-xl filter"
      ></div>
      <div
        class="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-pink-300 opacity-40 blur-xl filter"
      ></div>
      <div
        class="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-orange-300 opacity-40 blur-xl filter"
      ></div>
      <div class="relative m-8 space-y-4">
        <div
          class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5"
        >
          <div class="flex-1">
            <div class="h-4 w-48 rounded bg-gray-300"></div>
          </div>
          <div>
            <div class="h-6 w-24 rounded-lg bg-purple-300"></div>
          </div>
        </div>
        <div
          class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5"
        >
          <div class="flex-1">
            <div class="h-4 w-56 rounded bg-gray-300"></div>
          </div>
          <div>
            <div class="h-6 w-20 rounded-lg bg-yellow-300"></div>
          </div>
        </div>
        <div
          class="flex items-center justify-between space-x-8 rounded-lg bg-white p-5"
        >
          <div class="flex-1">
            <div class="h-4 w-44 rounded bg-gray-300"></div>
          </div>
          <div>
            <div class="h-6 w-28 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
