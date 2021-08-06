<template>
  <div class="flex items-center px-4 py-3 fixed top-0 w-full">
    <a href="#/" class="flex items-center">
      <div class="flex items-center justify-center pr-4">
        <svg
          class="h-9 w-9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#05A081"
            d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
          ></path>
          <path
            fill="#fff"
            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
          ></path>
        </svg>
      </div>

      <div class="font-bold text-white text-lg hover:text-gray-300">
        Pexels
      </div>
    </a>

    <!-- <div>
      <input />
    </div> -->

    <div class="ml-auto">
      <ul class="flex text-white items-center">
        <li class="ml-8 hover:text-gray-300">
          <button>Explore</button>
        </li>
        <li class="ml-8 hover:text-gray-300">
          <button>License</button>
        </li>

        <li class="ml-8 hover:text-gray-300">
          <button>Upload</button>
        </li>

        <li class="ml-8 hover:text-gray-300">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              ></path>
            </svg>
          </button>
        </li>

        <li>
          <button
            class="ml-8 py-2 px-7 font-bold rounded hover:opacity-80"
            style="background:#05A081"
          >
            Join
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
