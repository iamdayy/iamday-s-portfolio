<script setup lang="ts"></script>
<template>
  <div class="flex flex-wrap-reverse md:flex-wrap h-full md:min-h-full">
    <div class="w-full md:w-1/2 flex items-center">
      <form
        class="flex flex-wrap items-center justify-center gap-12 w-full p-8"
      >
        <!-- NAME -->
        <div class="relative z-0 w-full mb-6 group">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              class="w-5 h-5 fill-gray-500 dark:fill-gray-200"
              viewBox="0 0 24.00 24.00"
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="6" r="4" stroke-width="2"></circle>
                <path
                  d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
          </div>
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            class="block py-2.5 px-0 pl-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 ml-10 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-10"
            >Name</label
          >
        </div>
        <!-- EMAIL -->
        <div class="relative z-0 w-full mb-6 group">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 fill-gray-500 dark:fill-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 pl-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-200 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 ml-10 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-10"
            >Email address</label
          >
        </div>
        <!-- MESSAGE -->
        <div class="relative z-0 w-full mb-6 group">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              class="w-5 h-5 fill-gray-500 dark:fill-gray-200"
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
                ></path>
              </g>
            </svg>
          </div>
          <textarea
            type="text"
            name="floating_textarea"
            id="floating_textarea"
            class="block py-2.5 px-0 pl-10 w-full text-sm text-gray-900 bg-slate-400 bg-opacity-30 border-2 rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-200 dark:focus:border-blue-100 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            for="floating_textarea"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-12 ml-10 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12 peer-focus:-translate-x-10"
            >Message</label
          >
        </div>
        <button
          type="button"
          class="w-2/3 px-6 py-3.5 text-base font-medium text-white inline-flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4 text-white mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>
          Contact
        </button>
      </form>
    </div>
    <div
      class="flex w-full min-h-fit md:min-h-full md:w-1/2 items-center justify-center text-center"
    >
      <svg
        class="absolute w-4/5 md:w-2/5 stroke-white stroke-1 invisible md:visible"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="transparent"
          d="M28.7,-46.5C33.7,-41.4,31.7,-27.5,34.2,-17.1C36.7,-6.6,43.7,0.3,45.6,8.6C47.6,16.9,44.6,26.5,38.6,33.4C32.6,40.4,23.5,44.7,13.1,50.4C2.7,56.1,-8.9,63.1,-21,63.3C-33.1,63.5,-45.6,56.9,-47.1,45.9C-48.6,34.9,-39.1,19.6,-37.6,7.5C-36.2,-4.7,-42.7,-13.6,-43.2,-22.8C-43.8,-32,-38.3,-41.5,-30.1,-45.1C-21.9,-48.6,-10.9,-46.3,0.5,-47C11.9,-47.7,23.7,-51.5,28.7,-46.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <div class="text-5xl md:text-8xl font-semibold font-serif">
        <h1>Contact</h1>
        <div class="flex flex-wrap items-center justify-center">
          <hr class="w-3/5 h-1 bg-current border-0 mx-1 rounded-full" />
          <h1>Us</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
