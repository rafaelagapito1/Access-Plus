<template>
  <teleport to="head title"> - {{ News[0].TITLE }} </teleport>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="[
        News[0].IMAGE_LIST
          ? {
              background: 'url(' + News[0].IMAGE_LIST[0].URL + ')',
            }
          : { background: '#FFF' },
      ]"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>
          {{ News[0].TITLE }}
        </h1>
      </div>
    </div>
    <TopSingle></TopSingle>

    <div class="texto container">
      <p v-html="decodeHTML(News[0].DESCRIPTION)"></p>
      <div
        class="compartilhar"
        style="
          width: max-content;
          position: fixed;
          left: 0px;
          top: 0px;
          margin: auto;
          bottom: 0;
          height: max-content;
        "
      >
        <ul
          style="
            display: block;
            list-style-type: none;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 0;
            width: max-content;
          "
        >
          <li
            style="
              cursor: pointer;
              width: 70px;
              height: 70px;
              background: #02356c;
              text-align: center;
              font-size: 30px;
            "
          >
            <a
              :href="'https://www.facebook.com/sharer/sharer.php?u=' + getUrl()"
            >
              <i
                class="fab fa-facebook-f"
                style="padding: 20px; color: white; width: 100%; height: 100%"
              ></i>
            </a>
          </li>
          <li
            style="
              cursor: pointer;
              width: 70px;
              height: 70px;
              background: #4fa600;
              text-align: center;
              font-size: 30px;
            "
          >
            <a :href="'https://api.whatsapp.com/send?text='+ getUrl()">
              <i
                class="fab fa-whatsapp"
                style="padding: 20px; color: white; width: 100%; height: 100%"
              ></i>
            </a>
          </li>
          <li
            @click="share()"
            style="
              cursor: pointer;
              width: 70px;
              height: 70px;
              background: #989898;
              text-align: center;
              font-size: 30px;
            "
          >
            <a href="#">
              <i
                class="fas fa-share-alt"
                style="padding: 20px; color: white; width: 100%; height: 100%"
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";

import Header from "../../components/Header/index.vue";
import Footer from "../../components/Footer/index.vue";
import Routes from "../../services/Routes";
import BottomSingle from "../../components/Announcement/Bottom-Single.vue";
import TopSingle from "../../components/Announcement/Top-Single.vue";
import * as moment from "moment";
import Swal from "sweetalert2";
import { Base64 } from "js-base64";
import AOS from "aos";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    BottomSingle,
    TopSingle,
  },
  data() {
    return {
      Carousel: "",
      token: false,
      News: "",
      loadHighlights: "",
    };
  },
  methods: {
    getUrl() {
      return window.location.href;
    },
    share() {
      if (navigator.share !== undefined) {
        navigator
          .share({
            title: this.News[0].TITLE,
            text: this.News[0].SUMMARY,
            url: window.location.href,
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      }
    },
    decodeHTML(value) {
      return Base64.decode(value);
    },
    getNews(id) {
      this.loadHighlights = true;
      let data = {
        ID: `${id}`,
      };
      Routes.getNews(data)
        .then((r) => {
          this.News = r.data.DATA;
          this.loadHighlights = false;
        })
        .catch((e) => {
          this.loadHighlights = false;
          console.log("erro:", e);
        });
    },
  },
  mounted() {
    AOS.init();
  },

  created() {
    window.scrollTo(0, 0);
    if (this.$route.params.id.length > 0) {
      this.getNews(this.$route.params.id);
    }
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
