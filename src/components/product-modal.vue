<template>
  <transition name="modal" mode="out-in">
    <div
      class="relative z-10 transition all ease-in-out duration-1000"
      role="dialog"
      aria-modal="true"
      v-show="open"
    >
      <div
        class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
      ></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4"
        >
          <div
            class="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl"
          >
            <div
              class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
              <button
                type="button"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                @click="open = false"
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

              <div
                class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
              >
                <div
                  class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                >
                  <img
                    :src="product.image"
                    :alt="product.description"
                    class="object-center object-cover"
                  />
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
                    {{ product.name }}
                  </h2>

                  <section aria-labelledby="information-heading" class="mt-2">
                    <p class="text-2xl text-gray-900">
                      {{ product.Price | currency }}
                    </p>

                    <div class="mt-6">
                      <div class="flex items-center"></div>
                    </div>
                  </section>
                  <section aria-labelledby="information-heading" class="mt-2">
                    <p class="text-lg text-gray-900">
                      {{ product.description }}
                    </p>

                    <!-- Reviews -->
                  </section>
                  <div class="mt-5">
                    <label
                      for="quantity"
                      class="block text-sm font-bold text-gray-700"
                      >Quantity</label
                    >
                    <input
                      type="number"
                      v-model="quantity"
                      id="quantity"
                      class="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-solid border-2 border-gray-600 rounded-md"
                    />
                  </div>
                  <section aria-labelledby="options-heading" class="mt-10">
                    <button
                      @click="submitOrder"
                      :disabled="quantity <= 0 ? true : false"
                      type="submit"
                      class="mt-6 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      :class="
                        !quantity || quantity <= 0
                          ? 'bg-gray-500'
                          : 'bg-primary hover:bg-primaryHovered'
                      "
                    >
                      Add to Order
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      open: false,
      quantity: 1,
      product: {},
    };
  },
  methods: {
    submitOrder() {
      let order = { ...this.product, quantity: this.quantity };

      eventBus.$emit("orderSubmitted", order);
      (this.quantity = 1), (this.open = false);
    },
  },
  created() {
    eventBus.$on("showModal", (product) => {
      this.product = product;
      this.open = true;
    });
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
