<template>
  <div class="marketing container" v-if="Announcement">
    <splide :options="options">
      <splide-slide v-for="item in Announcement" :key="item">
        <a :href="item.URL" >
          <img v-if="item.IMAGE_LIST[0].URL" :src="item.IMAGE_LIST[0].URL" />
        </a>
      </splide-slide>
    </splide>
  </div>
</template> 
<script>
import Routes from "../../services/Routes";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  props: ["Carousel"],
  data() {
    return {
      options: {
        type: "loop",
        autoplay: true,
        speed: 1000,
        rewind: true,
        gap: "0",
        margin: "0",
        perPage: 1,
        arrows: false,
        width: "100vw",
        pagination: true,
      },
      Announcement: "",
      load: false,

      mobile: false,
      desktop: true,
    };
  },
  methods: {
    getAnnouncement() {
      this.load = true;
      this.Announcement = "";
      Routes.getAnnouncement()
        .then((r) => {
          this.Announcement = r.data.DATA;
          let i = 0;
          let global = [];
          for (; i <= this.Announcement.length - 1; i++) {
            if (this.Announcement[i].ADVERTISING_LOCATION_ID == 1 && this.Announcement[i].ACTIVE == 1) {
              global.push(this.Announcement[i]);
            }
          }
          this.load = false;
          this.Announcement = global;
          console.log(this.Announcement);
        })
        .catch((e) => {
          this.load = false;
          console.log("erro:", e);
        });
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
        this.mobile = true;
        this.desktop = false;
      }
    },
  },
  created() {
    this.getAnnouncement();
    this.isMobile();
  },
  components: { Splide, SplideSlide },
};
</script>
