<template>
  <img
    style="position: absolute; inset: 0 0 0 0; margin: auto"
    class="logo teste"
    src="../../assets/images/f.jpeg"
    alt="Vg Company"
    @click.prevent="goTO('/')"
  />
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";

import Header from "../../components/Header/index.vue";
import Carousel from "../../components/Carousel/index.vue";
import FeaturedProducts from "../../components/FeaturedProducts/index.vue";
import Promotions2 from "../../components/Promotions/index2.vue";
import RecentsProducts from "../../components/RecentsProducts/index.vue";
import CategoriesSlide from "../../components/CategoriesSlide/index.vue";
import BestSellers from "../../components/BestSellers/index.vue";
import Bluestrip from "../../components/Bluestrip/index.vue";
import CarouselProducts from "../../components/CarouselProducts/index.vue";
import Categories from "../../components/Categories/index.vue";
import Brands from "../../components/Brands/index.vue";
import Footer from "../../components/Footer/index.vue";
import Products from "../../services/Products";
import * as moment from "moment";
import Swal from "sweetalert2";
export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Promotions2,
    FeaturedProducts,
    CategoriesSlide,
    BestSellers,
    RecentsProducts,
    Bluestrip,
    CarouselProducts,
    Categories,
    Brands,
    Footer,
  },
  data() {
    return {
      Carousel: "",
      token: false,
    };
  },
  methods: {
    getCarousel() {
      Products.getBanner("1").then((r) => {
        this.Carousel = r.data.DATA;
      });
    },
  },
  mounted() {
    this.getCarousel();
  },
  created() {},
  setup() {
    const state = reactive({
      testes: "dCasa",
      numero: ref(0),
    });

    return {
      state,
    };
  },
};
</script>
<style scoped>
body {
    background: #ffffff!important;
}
</style>