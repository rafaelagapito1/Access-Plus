<template>
  <div class="">
    <div class="container">
      <div class="news extends">
        <div class="right">
          <div class="paginacao">
            <pagination
              :options="optPagination"
              v-model="page"
              :records="resultProducts.length"
              :per-page="perPage"
              @paginate="callback"
            />
          </div>
          <div
            class="two"
            v-for="product in resultProducts.slice(
              indexInitial,
              page * perPage
            )"
            :key="product.VS_PRODUCT_ID"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div
              @click.prevent="goTONews(product)"
              class="item"
              :style="{
                backgroundImage: 'url(' + require('@/assets/4.png') + ')',
              }"
            >
              <div
                class="content"
                :style="[
                  product.IMAGE_LIST
                    ? {
                        background: 'url(' + product.IMAGE_LIST[0].URL + ')',
                      }
                    : { background: '#FFF' },
                ]"
              ></div>
            </div>
            <div class="text">
              <h2>
                {{ product.TITLE }}
              </h2>
              <h4>
                {{ product.SUMMARY.slice(0, 700) + " ..." }}
              </h4>
              <a style="color: #007bff">Ver Mais</a>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>

  <!-- .block-products / end -->
</template>


<script>
import Pagination from "v-pagination-3";
import StarRating from "vue-star-rating";
import BottomSingle from "../../../components/Announcement/Bottom-Single.vue";
import AOS from "aos";
export default {
  components: {
    Pagination,
    StarRating,
    BottomSingle,
  },
  data() {
    return {
      noData: false,
      page: 1,
      perPage: 5,
      indexInitial: 0,
      optPagination: {
        chunk: 10,
        texts: {
          count: "",
        },
      },
      IMAGE_DEFAULT: ["../../assets/images/default.png"],
      IMAGE_DISCOUNT: [""],
    };
  },
  props: {
    resultProducts: {
      type: Array,
      default: [],
    },
  },
  watch: {
    resultProducts: function () {
      this.page = 1;
    },
  },
  methods: {
    transformName(name) {
      if (name.TITLE_SEO != null) {
        name = name.TITLE_SEO;
      } else {
        name = name.TITLE;
      }
      let newname = name.split(" ").join("-");
      return newname.normalize("NFD");
    },
    goTO(url) {
      window.scrollTo(0, 0);
      this.$router.push(url);
    },
    goTONews(dados) {
      this.transformName(dados);
      window.scrollTo(0, 0);
      this.$router.push(
        "/article/" + dados.ID + "/" + this.transformName(dados)
      );
    },
    getPercent(product) {
      return parseInt(
        100 - (product.SALE_PRICE_DISCOUNT * 100) / product.SALE_PRICE
      );
    },
    transformName(name) {
      if (name.TITLE_SEO != null) {
        name = name.TITLE_SEO;
      } else {
        name = name.PRODUCT_NAME;
      }
      let newname = name.split(" ").join("-");
      return newname.normalize("NFD");
    },
    currencyBRL(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    goTO(url) {
      this.$router.push(url);
    },

    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.optPagination.chunk = 5;
        this.perPage = 100;
      }
    },
    onEnter: function () {
      alert("ok");
    },
    callback: function (page) {
      window.scrollTo(0, 0);
      this.page = page;
      this.indexInitial = page * this.perPage - this.perPage;
    },
  },
  mounted() {
    this.isMobile();
    AOS.init();
  },
};
</script>


<style scoped>
.extends {
  padding: 35px 0px 0 0px !important;
  margin: auto;
}

@media (max-width: 991px) and (min-width: 768px) {
  .block-products__list-item {
    display: flex;
    width: calc(33.33333% - 12px);
    margin: 6px;
  }
}
@media (max-width: 1024px) {
  .ResultLeft {
    width: 100% !important;
    padding: 44px 0px 0px 0px !important;
    font-size: 15px;
    margin-top: 0;
    margin-bottom: -15px !important;
  }
}
</style>
