<template>
  <Header></Header>
  <div class="emprestimos">
    <div class="container part-one">
      <div class="row">
        <div class="col-md-12 top-image">
          <img src="../../assets/part-one.png" />
        </div>
      </div>
      <div
        class="row part-two"
        :style="{
          backgroundImage: 'url(' + require('@/assets/row.png') + ')',
        }"
      >
        <div class="col-md-7 left-image">
          <img data-aos="fade-down" class="quem" src="../../assets/quem.png" />
          <img src="../../assets/part-two.png" />
        </div>
        <div class="col-md-5 text">
          <div class="top">
            <h2>Uma multinacional S.A.S. Uruguaia.</h2>
          </div>
          <div class="middle">
            <div class="left">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="right">
              VG Company S.A.S. • RUT: 218814010011 Plaza Independencia 848 •
              Piso 1 Palacio Salvo • Montevidéu • URUGUAI
            </div>
          </div>
          <div class="bottom">
            <p>
              Atuamos em diversos segmentos, somos especialistas em Marketing e
              vendas. Nosso foco é o crescimento e a flexibilização de
              oportunidades aos nossos clientes concomitante com os valores da
              empresa.
            </p>
          </div>
          <div class="gradiente">
            <p>
              Atualmente estamos presente em diversos países ao redor do mundo e
              continuamos crescendo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid part-three" style="background: #000000">
      <div class="container">
        <div class="row">
          <div class="col-md-12 row">
            <div class="carousel col-md-12">
              <div class="item row">
                <div class="col-md-6 left">
                  <ul
                    style="
                      display: block;
                      list-style-type: none;
                      margin-block-start: 0;
                      margin-block-end: 0;
                      margin-inline-start: 0px;
                      margin-inline-end: 0px;
                      padding-inline-start: 0;
                    "
                  >
                    <li :class="model === 1 ? 'active' : ''" @click="model = 1">
                      Missão
                    </li>
                    <li :class="model === 2 ? 'active' : ''" @click="model = 2">
                      Visão
                    </li>
                    <li :class="model === 3 ? 'active' : ''" @click="model = 3">
                      Valores
                    </li>
                    <li :class="model === 4 ? 'active' : ''" @click="model = 4">
                      Princípios
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 right" v-if="model === 1">
                  <img src="../../assets/carousel.png" />

                  <p>
                    Oferecer a melhor experiência aos nossos clientes, com
                    oportunidades, segurança e conhecimentos.
                  </p>
                </div>
                <div class="col-md-6 right" v-if="model === 2">
                  <img src="../../assets/carousel3.png" />

                  <p>
                    Ser líder no seguimento de vendas diretas, gerando valor
                    econômico, social e ambiental sustentável, buscando inovação
                    e excelência, com os melhores colaboradores do mundo.
                  </p>
                </div>
                <div class="col-md-6 right" v-if="model === 3">
                  <img src="../../assets/carousel4.png" />

                  <p>
                    São a base para guiar a nossa conduta. Eles expressam quem
                    somos e no que acreditamos. Trabalhamos incansavelmente para
                    levar conhecimento e oportunidades para as pessoas. Porque
                    pessoas com oportunidades podem mudar o mundo para melhor.
                  </p>
                </div>
                <div class="col-md-6 right" v-if="model === 4">
                  <img src="../../assets/carousel2.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container part-four">
      <div class="row">
        <div class="col-md-12">
          <div class="top">
            <br />
            <br />
            <h2>
              Atuamos em <br />
              <b style="color: #30598d">6 seguimentos de negócio</b>
            </h2>
          </div>
          <div class="content">
            <div class="item" data-aos="fade-down" data-aos-duration="300">
              <img class="round" src="../../assets/educacao.jpeg" />
              <h4>Educação</h4>
              <p>
                Mais do que apenas acreditar na educação. É participar do
                fomento do conhecimento em uma sociedade. Nosso objetivo é ser o
                maior portal educacional de capacitação de pessoas para a vida
                em um mundo sistemático e tão complexo aos olhos de um indivíduo
                em desenvolvimento.
              </p>
            </div>
            <div class="item" data-aos="fade-down" data-aos-duration="600">
              <img class="round" src="../../assets/varejo.jpeg" />
              <h4>Varejo Online</h4>
              <p>
                Em uma era de evolução tecnológica, não há forma mais
                inteligente de vender e promover produtos e serviços para o
                mercado. Nosso e-commerce em constante desenvolvimento oferece
                produtos de alta qualidade que visam suprir inúmeras
                necessidades de consumo de uma família.
              </p>
            </div>
          </div>
          <div class="content">
            <div class="item" data-aos="fade-down" data-aos-duration="900">
              <img class="round" src="../../assets/telefonia.jpeg" />
              <h4>Telefonia</h4>
              <p>
                Tecnologicamente, dizem que o celular foi o melhor presente
                entre as invenções da humanidade. Hoje, quase ninguém vive sem o
                seu aparelho. A VG Company oferece planos controle pré-pagos de
                forma acessível, sem fidelidade, com WhatsApp ilimitado, sem
                cortes de internet e ainda com cobertura nacional do Brasil.
              </p>
            </div>
            <div class="item" data-aos="fade-down" data-aos-duration="300">
              <img class="round" src="../../assets/emprestimos.jpeg" />
              <h4>Emprestimos, CONSÓRCIO e SEGUROS</h4>
              <p data-v-2ee818ee="">
                Além de serem completos, nossos seguros e consórcios serão
                personalizados para as mais diversas categorias de seguridade e
                consorciado. Também oferecemos empréstimos que atendem as mais
                diversas finalidades pessoais, tudo através de opções acessíveis
                e sem burocracia. Assim, proporcionaremos uma verdadeira
                experiência aos nossos clientes com conceitos inovadores na
                oferta de produtos e serviços destas categorias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container part-five">
      <div class="row">
        <div class="col-md-12" style="padding: 0vw 15vw">
          <h2>
            O que os nossos clientes estão dizendo
            <b style="color: #22a5db"> sobre a VG company</b>
          </h2>
          <div class="video text-center">
            <br />
    
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IxW3r_--pdE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <a
              href="https://www.youtube.com/channel/UCINcpUEuTTeZl80Zwz61Qig/videos"
              target="_blank"
              rel="noopener noreferrer"
              >Ver Mais Vídeos</a
            >
            <br />
            <br />
          </div>
        </div>
        <div class="col-md-6" style="padding: 0px 5vw">
          <h2>
            Venha fazer parte
            <b style="color: #22a5db"> da nossa família vg company! </b>
          </h2>
        </div>
        <div class="col-md-6">
          <h3>
            Participe da nossa rede de consumo inteligente e ganhe bonificações
            sobre as compras realizadas por você e pelos seus indicados!
          </h3>
        </div>
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
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import * as moment from "moment";
import Swal from "sweetalert2";
import AOS from "aos";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      Carousel: "",
      token: false,
      model: 1,
      options: {
        type: "loop",
        autoplay: false,
        speed: 1000,
        rewind: true,
        gap: "0",
        margin: "0",
        perPage: 1,
        arrows: true,
        width: "100vw",
        pagination: true,
      },
    };
  },
  methods: {
    goTO(url) {
      this.$router.push(url);
    },
  },
  mounted() {
    AOS.init();
    console.log("sobre");
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

<style scoped>
.part-one .top-image {
  text-align: center;
  padding-left: 15vw;
  padding-top: 4vw;
  margin-bottom: 40px;
}

.part-one .left-image img {
  height: 515px;
  width: auto;
}
.part-two .top {
  background: #3c2887;
  color: white;
  text-align: center;
  font-weight: 100;
  padding: 6px 0px 5px 0px;
}
.part-two .top h2 {
  font-weight: 400;
  font-size: 19pt;
}

.part-two .middle {
  background: #f6f6f6;
  width: 100%;
  top: -7px;
  position: inherit;
  padding-top: 5px;
}
.part-two .middle .left {
  width: 25%;
  background: #f6f6f6;
  color: #3c2887;
  text-align: center;
  font-size: 35pt;
  float: left;
  height: 85px;
}
.part-two .middle .right {
  width: 75%;
  background: #3c2887;
  color: white;
  text-align: center;
  float: left;
  font-size: 15px;
  padding: 10px 5px;
  height: 85px;
}
.part-two .bottom {
  margin-top: 78px;
  width: 100%;
  background: #faf9f9;
  color: #3c2887;
}
.part-two .bottom p {
  padding: 1vw 0vw 1vw 2vw;
  font-size: 18px;
  margin-bottom: 0;
  padding-bottom: 4vw;
}

.part-two .gradiente {
  background: rgb(92, 8, 60);
  background: linear-gradient(
    90deg,
    rgba(92, 8, 60, 1) 0%,
    rgba(1, 35, 83, 1) 100%
  );
  color: white;
  font-size: 16pt;
  width: 100%;
  height: 200px;
  text-align: center;
  padding-top: 50px !important;
  padding: 0vw 2vw;
}
.quem {
  width: auto !important;
  position: absolute;
  height: 300px !important;
  left: -135px;
  bottom: 0;
}
.carousel {
  padding: 4vw 0vw;
  text-align: center;
  text-transform: uppercase;
}

.carousel .item h2 {
  /* width: 50%; */
  text-align: center;
  padding: 2vw 9vw;
  min-height: 175px;
}
.part-four .top {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.part-four .content {
  display: flex;
}

.part-four .content .item {
  width: 50%;
  padding: 1vw 2vw;
  text-align: center;
}
.part-four .content .item img {
  border-radius: 50%;
  height: 245px !important;
  width: 245px !important;
}
.part-four .content .item .center {
  border-radius: 50%;
  height: 280px !important;
  width: 280px !important;
}
.part-three {
  margin-top: 50px;
}
.part-four .content .item h4 {
  font-weight: bold;
  text-transform: uppercase;
  color: #30598d;
  margin: 15px 0px;
}
.part-four .content .item img {
  width: auto;
  height: 95px;
  margin-bottom: 10px;
}
.part-four .content-large {
  margin-top: -1px;
  padding: 0vw 5vw;
}
.part-four .content-large .item {
  padding: 0vw 0vw;
  text-align: center;
}
.part-four .content-large .item img {
  width: auto;
  height: 95px;
  margin-bottom: 10px;
}
.part-five {
  text-align: center;
  text-transform: uppercase;
  padding-top: 5vw;
  color: #404040;
}
.part-five img {
  margin-bottom: 50px;
}
.part-five h2 {
  font-size: 2.5em;
}
.item {
  width: 100%;
}
.item li {
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  color: white;
  text-align: left;
}
.item .active {
  font-size: 35px;
  color: #3059aa;
  text-decoration: underline;
}
.item .left {
  padding: 5vw 10vw;
}
.item .right {
  padding: 2vw 5vw;
}
.item .right p {
  color: white;
  font-weight: bold;
  margin: 25px 0px;
}
.carousel h2 {
  height: 50px;
}
@media (max-width: 1024px) {
  .part-one .left-image img {
    height: auto;
    width: 100%;
  }
  .part-one .top-image img {
    height: auto;
    width: 100%;
  }
  .part-two .middle .right {
    height: 100px;
  }
  .part-four .content .item {
    width: 100%;
  }
  .part-four .content {
    border: 1px solid #bebebe;
    display: block;
  }
  .carousel {
    margin-left: 15px;
  }
  .carousel h2 {
    height: 75px;
    margin-bottom: 25px !important;
    padding: 0px 15px !important;
  }
  .part-five .col-md-12 {
    padding: 0vw 5vw !important;
  }
  .quem {
    left: 0 !important;
    bottom: 0;
  }
  .part-five h2 {
    font-size: 1.6em;
  }
  .part-four .content .item img {
    height: 65px;
  }
  .part-four .content-large .item img {
    height: 65px;
  }

  .part-five img {
    margin-bottom: 20px;
    height: 131px;
  }
}
</style>
<style >
.emprestimos .splide__arrow {
  border: 2px solid #959292 !important;
  background: transparent !important;
}
.emprestimos .splide__arrow svg {
  color: #959292 !important;
}
.splide__pagination__page.is-active {
  background: #3059aa !important;
}
</style>