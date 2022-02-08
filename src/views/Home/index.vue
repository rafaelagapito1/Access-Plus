<template>
  <Header></Header>
  <TopHome></TopHome>

  <div class="container">
    <div class="news">
      <div class="left">
        <div
          v-for="(item, index) in NewsHighlights.slice(0, 1)"
          :key="index"
          @click.prevent="goTONews(item)"
          data-aos="fade-up-right"
          data-aos-duration="300"
          class="item"
          :style="[
            item.IMAGE_LIST
              ? {
                  background: 'url(' + item.IMAGE_LIST[0].URL + ')',
                }
              : { background: '#FFF' },
          ]"
        >
          <div
            class="content"
            :style="{
              backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
            }"
          >
            <div class="top">
              <div class="tags">
                <span> {{ getCategorieName(item.CATEGORY_NEWS_ID) }} </span>
                <div class="line"></div>
              </div>
            </div>
            <div class="bottom">
              <h3>
                {{ item.TITLE }}
              </h3>
              <!-- <p>Depois de operar em terreno negativo entre o fim da manhã e o início da tarde desta quinta-feira...</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="one">
          <div
            v-for="(item, index) in NewsHighlights.slice(1, 3)"
            :key="index"
            @click.prevent="goTONews(item)"
            data-aos="fade-up-right"
            data-aos-duration="300"
            class="item"
            :style="[
              item.IMAGE_LIST
                ? {
                    background: 'url(' + item.IMAGE_LIST[0].URL + ')',
                  }
                : { background: '#FFF' },
            ]"
          >
            <div
              class="content"
              :style="{
                backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
              }"
            >
              <div class="top">
                <div class="tags">
                  <span> {{ getCategorieName(item.CATEGORY_NEWS_ID) }} </span>
                  <div class="line"></div>
                </div>
              </div>
              <div class="bottom">
                <h3>
                  {{ item.TITLE }}
                </h3>
                <!-- <p>Depois de operar em terreno negativo entre o fim da manhã e o início da tarde desta quinta-feira...</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MidleHome></MidleHome>

  <div class="container">
    <div class="news extends">
      <h2>Últimas Notícias</h2>
      <div class="right">
        <div
          class="two"
          @click.prevent="goTONews(item)"
          v-for="(item, index) in NewsRecents"
          :key="index"
        >
          <div
            class="item"
            :style="{
              backgroundImage: 'url(' + require('@/assets/4.png') + ')',
            }"
          >
            <div
              class="content"
              :style="[
                item.IMAGE_LIST
                  ? {
                      background: 'url(' + item.IMAGE_LIST[0].URL + ')',
                    }
                  : { background: '#FFF' },
              ]"
            ></div>
          </div>
          <div class="text">
            <h2>
              {{ item.TITLE }}
            </h2>
            <h4>
              {{ item.SUMMARY.slice(0, 700) + " ..." }}
            </h4>
            <a style="color: #007bff">Ver Mais</a>
          </div>
        </div>
      </div>
    </div>
    <BottomHome></BottomHome>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";

import Header from "../../components/Header/index.vue";
import TopHome from "../../components/Announcement/Top-Home.vue";
import MidleHome from "../../components/Announcement/Midle-Home.vue";
import BottomHome from "../../components/Announcement/Bottom-Home.vue";
import ModalHome from "../../components/Announcement/Modal-Home.vue";
import Footer from "../../components/Footer/index.vue";
import Routes from "../../services/Routes";
import * as moment from "moment";
import Swal from "sweetalert2";
import AOS from "aos";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    TopHome,
    MidleHome,
    BottomHome,
    ModalHome
  },
  data() {
    return {
      Carousel: "",
      token: false,
      loadHighlights: false,
      NewsHighlights: "",
      NewsRecents: "",
      categories: "",
    };
  },
  methods: {
    getCategorieName(id) {
      var i = 0;
      var name = "CATEGORIA";
      for (; i <= this.categories.length - 1; i++) {
        if (this.categories[i].ID == id) {
          name = this.categories[i].DESCRIPTION;
        }
      }
      return name;
    },
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
    getHighlights() {
      this.loadHighlights = true;
      let data = {
        HIGHLIGHT: 1,
      };
      Routes.getNews(data)
        .then((r) => {
          this.NewsHighlights = r.data.DATA;
          this.loadHighlights = false;
        })
        .catch((e) => {
          this.loadHighlights = false;
          console.log("erro:", e);
        });
    },
    getRecents() {
      this.loadHighlights = true;
      let data = {
        HIGHLIGHT: 0,
      };
      Routes.getNews(data)
        .then((r) => {
          this.NewsRecents = r.data.DATA;
          this.loadHighlights = false;
        })
        .catch((e) => {
          this.loadHighlights = false;
          console.log("erro:", e);
        });
    },
    getCategories() {
      Routes.getAllCategoriesNews()
        .then((r) => {
          this.categories = r.data.DATA;
        })
        .catch((e) => {})
        .finally(() => {});
    },
  },
  mounted() {
    AOS.init();
  },

  created() {
    this.getHighlights();
    this.getRecents();
    this.getCategories();
    console.log("correção");
  },
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
.extends h2 {
  color: #02204d;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>
