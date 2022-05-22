import mockApi from "../api's/mockApi";
// this mixin file is responsible for handling api requests
export const sharedData = {
  methods: {
    async getProducts() {
      const {data} = await mockApi.get("/products");
      return data
     
    },
    async orderProducts(order) {
      const {data} = await mockApi.post("/orders",order);
      return data
     
    },
  },
};
