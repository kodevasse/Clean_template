<script>
import Background from "@/components/Background.vue";
</script>
<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900"
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
      <div
        class="flex flex-col items-center justify-center text-center opacity-80 sm:-ml-40 sm:-mr-40"
      >
        <h2 class="p-5 text-4xl font-extrabold text-white sm:p-10 sm:text-7xl">
          <span class="animation-delay-3000 animate-pulse text-teal-200">
            Lær</span
          >
          webutvikling og web3.0 gratis!
        </h2>
        <div class="px-8 py-6">
          <!-- Glowing button -->
          <div class="grid items-start justify-center gap-8">
            <div class="group relative">
              <div
                class="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-400 to-teal-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
              ></div>
              <button
                class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none"
              >
                <span class="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 -rotate-6 text-pink-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span class="pr-6 text-gray-100"></span>
                </span>
                <span
                  class="pl-6 text-teal-300 transition duration-200 group-hover:text-gray-100"
                  >Kom i gang &rarr;</span
                >
              </button>
            </div>
          </div>
        </div>
        <!-- <div
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
        </div> -->
      </div>
    </div>
  </div>
</template>
