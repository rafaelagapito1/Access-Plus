<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/1.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>
          Ibovespa volta a subir depois de testar os 112 mil pontos com inflação
          e risco político no radar
        </h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        Depois de operar em terreno negativo entre o fim da manhã e o início da
        tarde desta quinta-feira, a bolsa brasileira busca recuperar as perdas
        de ontem, quando registrou o pior tombo desde março, em reação às
        ameaças golpistas de Bolsonaro.
      </p>
      <p>
        Os desdobramentos da crise política e institucional e o bloqueio de
        caminhoneiros nas estradas continuam sendo vistos como riscos para o
        mercado. A percepção é de que a crise está longe de ser solucionada,
        contaminando o crescimento econômico. No combo do dia, a inflação de
        agosto foi a pior para o mês desde 2020. Lá fora, o Banco Central
        Europeu anunciou que vai diminuir estímulos à economia, o que deixa os
        investidores com medo do que virá
      </p>
      <p>
        Referência:<br />
        <a
          href="https://valorinveste.globo.com/cotacoes/bolsa-ao-vivo/ao-vivo/bolsa-ao-vivo-9-de-setembro-de-2021.ghtml"
        >
          https://valorinveste.globo.com/cotacoes/bolsa-ao-vivo/ao-vivo/bolsa-ao-vivo-9-de-setembro-de-2021.ghtml</a
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
