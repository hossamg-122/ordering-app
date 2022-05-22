<template>
  <header class="border-b-2 border-solid-gray-100">
    <div class="bg-header">
      <!--
    Mobile menu

  
  -->
      <transition name="modal" mode="out-in">
        <div
          class="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          v-show="open"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>

          <div class="fixed inset-0 flex z-40">
            <div
              class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col"
            >
              <!-- logo -->
              <div class="py-10 px-4 flex justify-between">
                <img src="../assets/foodics-logo.svg" class="h-auto" />
                <button
                  @click="open = false"
                  type="button"
                  class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Links -->
              <div class="mt-2">
                <div
                  id="tabs-1-panel-1"
                  class="pt-6 pb-8 px-0 space-y-10"
                  aria-labelledby="tabs-1-tab-1"
                  role="tabpanel"
                  tabindex="0"
                >
                  <div>
                    <ul
                      role="list"
                      aria-labelledby="women-clothing-heading-mobile"
                      class="mt-0 flex flex-col space-y-0"
                    >
                      <li
                        class="flow-root p-4 transition all duration-300 ease-in-out hover:bg-gray-100 cursor-pointer text-lg font-bold"
                      >
                        <a href="#"> Products </a>
                      </li>

                      <li
                        class="flow-root p-4 transition all duration-300 ease-in-out hover:bg-gray-100 cursor-pointer text-lg font-bold"
                      >
                        <a href="#" class="-m-2 p-2 block text-gray-500">
                          App Marketplace
                        </a>
                      </li>

                      <li
                        class="flow-root p-4 transition all duration-300 ease-in-out hover:bg-gray-100 cursor-pointer text-lg font-bold"
                      >
                        <a href="#" class="-m-2 p-2 block text-gray-500">
                          Business Types
                        </a>
                      </li>

                      <li
                        class="flow-root p-4 transition all duration-300 ease-in-out hover:bg-gray-100 cursor-pointer text-lg font-bold"
                      >
                        <a href="#" class="-m-2 p-2 block text-gray-500">
                          Become a Partner
                        </a>
                      </li>

                      <li
                        class="flow-root p-4 transition all duration-300 ease-in-out hover:bg-gray-100 cursor-pointer text-lg font-bold"
                      >
                        <a href="#" class="-m-2 p-2 block text-gray-500">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- Action Box -->
              <div class="md:flex items-center justify-end">
                <router-link to="/">
                  <button
                    class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-primary hover:bg-primaryHovered hover:scale-90 transform-gpu transition all duration-300"
                  >
                    Get a Demo
                  </button>
                </router-link>
                <router-link to="/">
                  <button
                    class="ml-2 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border-primary border-2 rounded-md shadow-sm text-base font-bold text-primary bg-white hover:bg-indigo-700 hover:bg-primaryHovered hover:text-white hover:scale-90 transform-gpu transition all duration-300"
                  >
                    Login
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <p
        class="container mx-auto h-10 px-4 flex items-center justify-center text-xx font-normal text-slate-900 md:text-sm lg:justify-start"
      >
        Saudi Arabia
        <i class="fa fa-solid fa-phone-volume text-primary mx-2"></i> 8001000119
        <span class="mx-2">l</span>
        United Arab Emirates
        <i class="fa fa-solid fa-phone-volume text-primary mx-2"></i> 8003663427
        <span class="mx-2">l</span> Egypt
        <i class="fa fa-solid fa-phone-volume text-primary mx-2"></i> 15796
      </p>
    </div>

    <nav
      class="flex justify-between items-center container mx-auto py-10 px-8 lg:px-2 md:space-x-10"
    >
      <div>
        <img src="../assets/foodics-logo.svg" />
      </div>
      <!-- Links -->
      <div class="flex text-sm font-normal hidden lg:ml-8 lg:block">
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:bg-gray-100"
          to="/"
          >Products</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:bg-gray-100"
          to="/"
          >App Marketplace</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:bg-gray-100"
          to="/"
          >Business Types</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:bg-gray-100"
          to="/"
          >Become a Partner</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:bg-gray-100"
          to="/"
          >Pricing</router-link
        >
      </div>
      <!-- Action Box -->
      <div class="hidden md:flex items-center justify-end">
        <router-link to="/">
          <button
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-primary hover:bg-primaryHovered hover:scale-90 transform-gpu transition all duration-300"
          >
            Get a Demo
          </button>
        </router-link>
        <router-link to="/">
          <button
            class="ml-2 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border-primary border-2 rounded-md shadow-sm text-base font-bold text-primary bg-white hover:bg-primaryHovered hover:text-white hover:scale-90 transform-gpu transition all duration-300"
          >
            Login
          </button>
        </router-link>
      </div>
      <button
        type="button"
        class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
        @click="open = !open"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: animatedModal 0.5s ease-in-out forwards;
}
.modal-leave-active {
  animation: animatedModal 0.5s ease-in-out reverse forwards;
}
@keyframes animatedModal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
