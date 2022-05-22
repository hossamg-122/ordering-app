<template>
  <div class="bg-gray-200">
    <div class="container mx-auto">
      <div
        class="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-4 xl:gap-x-4"
      >
        <div class="py-16 sm:py-18 order-1 sm:order-none">
          <!-- this is a generic component responsible for handling selected  products and sending them to the API and it takes the selected products with the power of event Bus -->
          <OrderSummary />
        </div>
        <div class="col-span-3 self-start py-16 px-4 sm:py-18 sm:px-6 lg:px-8">
          <!-- this component is responsible for rendering the products from the api -->
          <ProductsList />
        </div>
      </div>
      <!-- this is a generic component responsible for handling selecting a product and taking the selected product with the power of event Bus -->
      <ProductModal />
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products-list.vue";
import OrderSummary from "../components/order-summary.vue";
import ProductModal from "@/components/product-modal.vue";

export default {
  name: "HomeView",
  components: { ProductsList, OrderSummary, ProductModal },
};
</script>
