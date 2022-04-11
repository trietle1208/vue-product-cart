<template>
  <div class="container">
    <div class="flex">
      <div>
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/products-and-services.jpeg"
          alt=""
          style="width: 360px; height: 500px"
        />
      </div>
      <div class="surface-section">
        <div class="font-medium text-3xl text-900 mb-3">Product Information</div>
        <ul class="list-none p-0 m-0">
          <li
            class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
          >
            <div class="text-500 w-6 md:w-2 font-medium">Name</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ product.name }}
            </div>
          </li>
          <li
            class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
          >
            <div class="text-500 w-6 md:w-2 font-medium">Price</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              ${{ product.price }}
            </div>
          </li>
          <li
            class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
          >
            <div class="text-500 w-6 md:w-2 font-medium">Description</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              {{ product.description }}
            </div>
          </li>

          <li
            class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"
          >
            <div class="text-500 w-6 md:w-2 font-medium">Reviews</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              dignissimos quis, vel itaque praesentium unde sint nihil corporis blanditiis
              veritatis recusandae officiis ad sequi tenetur nostrum pariatur soluta
              nulla?
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        image: "",
        image_url: "",
      },
    };
  },
  created() {
    let id = this.$route.params.id;
    if (id) {
      this.getProduct(id);
    }
  },
  methods: {
      getProduct(id) {
      this.$request
        .get(`http://127.0.0.1:8000/api/product/products/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.data;
          this.product.image = res.data.image;
          this.product.image_url = res.data.image;
        });
    },
  }
};
</script>

<style>
.container {
  margin-top: 56px;
}
</style>
