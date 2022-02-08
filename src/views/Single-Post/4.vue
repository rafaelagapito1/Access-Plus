<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/4.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>Os 10 melhores títulos para quem deseja expandir seu Mindset</h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        Sabemos que tudo aquilo que está relacionado à mente humana, também está
        ligado à faculdade de entendimento e discernimento, de pensar ou
        refletir sobre determinado assunto, ou a capacidade de expandir o
        raciocínio.
      </p>
      <p>
        O termo mindset está ligado a atitudes ou configuração mental,
        pensamentos ou até mesmo comportamento. Ou seja, trata-se das
        informações passadas para o cérebro através de nossa própria percepção e
        diálogo interno.
      </p>
      <p>
        Saiba ser muito importante para a vida pessoal e profissional a boa
        prática da mentalidade vencedora, associada ao termo “Mindset”.
        Separamos 10 títulos sobre o tema que ajudará você a desenvolver uma
        mentalidade vencedora.
      </p>
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Mindset-a-nova-psicologia-do-sucesso-2006-Carol-S-Dweck-PhD"
        >Mindset a nova psicologia do sucesso (2006), Carol S. Dweck Ph.D</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Mindset-Vencedor-Reprograme-sua-Mente-para-o-Sucesso-2019-Andre-Stroppa"
        >Mindset Vencedor Reprograme sua Mente para o Sucesso (2019), André
        Stroppa</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Mindset-do-Coracao-2019-Suryavan-Solar"
        >Mindset do Coração (2019), Suryavan Solar</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Mindset-da-Carreira-2019-Art-Markman"
        >Mindset da Carreira (2019), Art Markman</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Mindset-do-Empreendedor-Dicas-para-Configurar-sua-Mente-e-Transformar-Seu-Negocio-2017-Andreia-Roma-e-Geize-Lima"
        >Mindset do Empreendedor Dicas para Configurar sua Mente e Transformar
        Seu Negócio (2017), Andréia Roma e Geize Lima</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Desbloqueie-o-Poder-da-sua-Mente-Michael-Arruda"
        >Desbloqueie o Poder da sua Mente, Michael Arruda</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#O-Poder-Cosmico-da-Mente-Joseph-Murphynbsp"
        >O Poder Cósmico da Mente, Joseph Murphy </a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Desenvolvimento-Humano-Diane-Papalia-e-Ruth-Feldman"
        >Desenvolvimento Humano, Diane Papalia e Ruth Feldman</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Inteligencia-Emocional-1996-Daniel-Goleman"
        >Inteligência Emocional (1996), Daniel Goleman</a
      ><br /><br />
      <a
        href="https://guiadelivros.com/mente-e-mindset/#Manual-de-Psicologia-Cognitiva-1995-Mark-T-Keanenbsp"
        >Manual de Psicologia Cognitiva (1995), Mark T. Keane</a
      ><br /><br />
      <p>
        Referência:<br />
        <a
          href="https://guiadelivros.com/mente-e-mindset/#Mindset-a-nova-psicologia-do-sucesso-2006-Carol-S-Dweck-PhD"
        >
          https://guiadelivros.com/mente-e-mindset/#Mindset-a-nova-psicologia-do-sucesso-2006-Carol-S-Dweck-PhD</a
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
