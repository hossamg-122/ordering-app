<template>
  <div
    class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  >
    <!--  displaying component for each product -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./product-card.vue";
import { sharedData } from "../mixins";
export default {
  // this mixin file is responsible of handling api requests
  mixins: [sharedData],
  name: "ProductsList",

  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      // fetching products from  the api
      this.products = await this.getProducts();
    } catch (error) {
      alert("something went wrong ")
      console.log("error", error.response.data);
    }
  },
};
</script>

<style></style>
