<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/6.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>Passos para expandir seu negócio</h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        Chegou a hora de expandir o seu negócio? Este é um momento de muita
        alegria, afinal é o reconhecimento do trabalho árduo que realizou nos
        últimos tempos à frente da sua empresa. Mas é também hora de parcimônia,
        reflexão e análise, para entender quais são as melhores escolhas a
        fazer.
      </p>
      <p>
        E você não precisa tomar todas essas decisões sozinho. Nós temos as
        ferramentas e soluções de que necessita para traçar o futuro do seu
        negócio e ajudar a encontrar as melhores saídas para o seu plano de
        crescimento.
      </p>
      <p>
        Aqui, você vai encontrar seis dicas que vão oferecer mais confiança para
        os seus próximos passos.
      </p>
      <p>
        Referência:<br />
        <a
          href="https://www.sebrae.com.br/sites/PortalSebrae/sebraeaz/6-passos-para-expandir-seu-negocio,9d14c77cd2f1f610VgnVCM1000004c00210aRCRD"
        >
          https://www.sebrae.com.br/sites/PortalSebrae/sebraeaz/6-passos-para-expandir-seu-negocio,9d14c77cd2f1f610VgnVCM1000004c00210aRCRD</a
        >
      </p>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";

import Header from "../../components/Header/index.vue";
import Footer from "../../components/Footer/index.vue";

import * as moment from "moment";
import Swal from "sweetalert2";
import AOS from "aos";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Carousel: "",
      token: false,
    };
  },
  methods: {},
  mounted() {
    AOS.init();
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
