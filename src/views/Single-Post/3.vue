<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/3.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>
          E-book reúne informações e casos de sucesso que podem orientar
          decisões estratégicas na hora de fazer um empreendimento crescer.
        </h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        <b> Expansão de mercado</b> é um termo que jamais deve sair do foco dos
        empreendedores, não importa o tamanho da empresa. Enfrentar novos
        desafios para ampliar a participação em um mercado, para abrir uma loja
        ou mesmo para contratar o primeiro funcionário faz parte do dia a dia de
        quem toca um negócio próprio.
      </p>
      <p>
        Ao identificar uma oportunidade ou ao encontrar uma forma de agregar
        valor real ao público, os empreendedores quebram a cabeça para descobrir
        os melhores caminhos para fazer esse aprimoramento dar certo. O processo
        vem acompanhado de muitas dúvidas: quando expandir? Quais são os modelos
        de expansão disponíveis? Qual é o melhor para a minha empresa?
      </p>
      <p>
        Neste ebook você encontra diversas dicas de como expandir os horizontes
        para o seu negócio.
      </p>
      <a
        href="https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/e602e38ea0dc43c5cd4710bcc050e687/$File/6072.pdf "
        >https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/e602e38ea0dc43c5cd4710bcc050e687/$File/6072.pdf
      </a>
      <br /><br />
      <p>
        Referência:<br />
        <a
          href="https://www.sebrae.com.br/sites/PortalSebrae/bis/o-que-e-necessario-para-expandir-um-negocio,d3ff6c8419e55510VgnVCM1000004c00210aRCRD "
        >
          https://www.sebrae.com.br/sites/PortalSebrae/bis/o-que-e-necessario-para-expandir-um-negocio,d3ff6c8419e55510VgnVCM1000004c00210aRCRD
        </a>
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
