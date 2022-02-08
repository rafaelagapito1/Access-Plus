<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/2.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>
          Liga de futebol espanhola lança NFTs de todos os jogadores do
          campeonato
        </h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        A Liga Espanhola de Futebol, conhecida como LaLiga, anunciou que fechou
        contrato com a startup francesa Sorare. O objetivo da parceria é lançar
        <a
          href="https://cointelegraph.com.br/explained/non-fungible-tokens-explained"
          >NFTs</a
        >
        de todos os jogadores da competição, segundo informações do
        <a
          href="https://valorinveste.globo.com/mercados/cripto/noticia/2021/09/09/liga-de-futebol-espanhola-lanca-nfts-colecionaveis-de-todos-os-seus-jogadores.ghtml"
          >Valor</a
        >
        .
      </p>
      <p>
        O acordo de licenciamento da Sorare com a LaLiga será de longo prazo e
        incluirá jogadores como Antoine Griezmann, do Atlético de Madrid,
        Vinícius Júnior, do Real Madrid e Pedri, do Barcelona.
      </p>
      <p>
        Ainda segundo a notícia, os clubes que fazem parte da La Liga vão
        receber uma participação sobre as vendas dos NFTs dos jogadores.
      </p>
      <p>
        Além disso, a Sorare pagou uma garantia mínima para garantir a
        exclusividade do negócio.
      </p>
      <p>
        A ideia da Sorare é realizar iniciativas parecidas com pelo menos 20 das
        principais ligas de futebol do mundo até o fim de 2022.
      </p>
      <p>
        Referência:<br />
        <a
          href="https://cointelegraph.com.br/news/spanish-football-league-launches-nfts-for-all-league-players"
        >
          https://cointelegraph.com.br/news/spanish-football-league-launches-nfts-for-all-league-players</a
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
