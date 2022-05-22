<template>
  <div class="pointer-events-auto w-full">
    <div class="flex h-full flex-col bg-white shadow-xl rounded-xl">
      <div class="flex-1 overflow-y-auto py-6 px-3 sm:px-4">
        <div class="flex items-start justify-center">
          <h2 class="text-lg font-bold text-gray-900">Order Summary</h2>
        </div>

        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              <li
                v-for="product in products"
                :key="product.id"
                class="flex py-6"
              >
                <div
                  class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                >
                  <img
                    :src="product.image"
                    :alt="product.description"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <h3>
                        {{ product.name }}
                      </h3>
                      <p class="ml-4">{{ product.Price | currency }}</p>
                    </div>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty {{ product.quantity }}</p>

                    <div class="flex">
                      <button
                        @click="handleRemove(product.id)"
                        type="button"
                        class="font-medium text-primary hover:text-primaryHovered"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{{ totalAmount | currency }}</p>
        </div>

        <div class="mt-6">
          <button
            @click="buyOrder"
            :disabled="products.length > 0 ? false : true"
            type="submit"
            class="mt-6 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            :class="
              products.length > 0
                ? 'bg-primary hover:bg-primaryHovered'
                : 'bg-gray-500'
            "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
    <NotificationModal :notifyUser="notifyUser" @toggleModal="toggleModal" />
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { sharedData } from "../mixins";
import NotificationModal from "./notification-modal.vue";
export default {
  // this mixin file is responsible of handling api requests
  mixins: [sharedData],
  data() {
    return {
      products: [],

      notifyUser: false,
    };
  },
  methods: {
    handleRemove(id) {
      let deletedProduct = this.products.find((el) => el.id === id);

      this.products.splice(this.products.indexOf(deletedProduct), 1);
    },
    // sending order to the api
    async buyOrder() {
      let order = this.products.map((product) => {
        return {
          id: parseInt(product.id),
          quantity: parseInt(product.quantity),
        };
      });

      try {
        await this.orderProducts(order);

        this.notifyUser = true;
      } catch (error) {
        alert("something went wrong ");
        console.log("error", error);
      }
    },
    // toggling notification modal
    toggleModal() {
      this.products = [];
      this.notifyUser = false;
    },
  },
  computed: {
    // calculating total price of order
    totalAmount() {
      return this.products.reduce((acc, com) => {
        return acc + com.Price * com.quantity;
      }, 0);
    },
  },
  // creating an event listener
  created() {
    eventBus.$on("orderSubmitted", (product) => {
      this.products.push(product);
    });
  },
  components: { NotificationModal },
};
</script>

<style></style>
