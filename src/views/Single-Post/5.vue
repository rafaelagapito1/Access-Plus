<template>
  <Header></Header>
  <div class="noticia">
    <div
      class="text-center banner-news"
      :style="{
        backgroundImage: 'url(' + require('@/assets/5.png') + ')',
      }"
    >
      <div
        class="filter"
        :style="{
          backgroundImage: 'url(' + require('@/assets/banner.png') + ')',
        }"
      >
        <h1>Os 10 melhores livros para o crescimento profissional e pessoal</h1>
      </div>
    </div>
    <div class="texto container">
      <p>
        Será que existe uma receita para o crescimento profissional? Se fizermos
        essa pergunta às pessoas que tiveram êxito em suas carreiras, as
        diferentes respostas certamente terão um ingrediente em comum: o
        conhecimento.
      </p>
      <p>
        Nesse sentido, os livros sempre foram nossa principal fonte de
        aprendizado e são bastante úteis ao autoconhecimento. Todos nós
        desejamos superar os obstáculos e crenças limitantes que atrapalham a
        realização dos nossos sonhos.
      </p>
      <p>
        Mesmo cansados, nos questionamos como podemos fazer mais e melhor, e
        como permanecer motivados diante das dificuldades rotineiras.
      </p>
      <p>
        Você sabia que existem livros que apresentam estratégias para o
        crescimento profissional e pessoal?
      </p>
      <p>
        As obras abaixo trazem ensinamentos relacionados às soft skills e outras
        habilidades extremamente valorizadas no mercado de trabalho.
      </p>

      <p>
        A ideia de desvendar os caminhos para o sucesso te empolga? Então a
        seguir, descubra quais são os 10 livros para crescimento profissional.
      </p>
      <ul
        style="
          list-style-type: none;
          display: block;
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 0;
        "
      >
        <li>1 – Quem pensa enriquece — Napoleon Hill (1937)</li>
        <li>2 – O monge e o executivo — James C. Hunter (1998)</li>
        <li>3 – A coragem de ser imperfeito — Brené Brown (2012)</li>
        <li>
          4 – Como fazer amigos e influenciar pessoas — Dale Carnegie (1936)
        </li>
        <li>5 – Comunicação não-violenta — Marshall B. Rosenberg (1999)</li>
        <li>
          6 – Rápido e Devagar: Duas Formas de Pensar — Daniel Kahneman (2011)
        </li>
        <li>
          7 – Mindset: a nova psicologia do sucesso — Carol S. Dweck (2006)
        </li>
        <li>8 – O poder do hábito — Charles Duhigg (2012)</li>
        <li>9 – Inteligência Emocional — Daniel Goleman (1986)</li>
        <li>10 – Foco — Daniel Goleman (2013)</li>
      </ul>
      <p>
        Referência:<br />
        <a
          href="https://blog.unicep.edu.br/os-10-melhores-livros-para-o-crescimento-profissional-e-pessoal/"
        >
          https://blog.unicep.edu.br/os-10-melhores-livros-para-o-crescimento-profissional-e-pessoal/</a
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
