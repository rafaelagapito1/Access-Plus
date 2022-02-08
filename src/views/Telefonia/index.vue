<template>
  <Header></Header>
  <div class="zap" @click="zap()">
    <img src="../../assets/whatsapp.png" />
  </div>
  <div class="emprestimos">
    <div
      class="container-fluid banner"
      :style="{
        backgroundImage: 'url(' + require('@/assets/telefonia.jpg') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-right">
            <h2>
              <b> Enfim uma operadora </b> <br />
              que descomplica sua vida.
            </h2>
            <el-button
              style="margin-top: 12px; float: right"
              type="primary"
              round
              @click="goTO('/ativar-chip')"
            >
              Ativar Chip</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-flud produtos">
      <div class="container logo">
        <div class="row">
          <div class="col-md-12 text-center">
            <img
              style="width: 40%; margin-top: 65px; margin-bottom: 78px"
              src="../../assets/logo_telefoniavg-vere.png"
            />
          </div>
        </div>
      </div>
      <div class="container lista">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2
              style="
                padding: 2vw 15vw;
                font-size: 40px;
                text-transform: uppercase;
              "
            >
              Descomplica com os planos da
              <b style="color: #409eff"> Telefonia VG!</b>
            </h2>
            <h6 style="margin-top: -20px; margin-bottom: 50px">
              Todos os planos são para fixo e/ou celular, de qualquer operadora
              e DDD.
            </h6>
          </div>
          <div class="col-md-12 lista-produtos p-planos">
            <div class="row text-center">
              <div
                class="col-12 col-md-3 col-lg-3"
                data-aos="zoom-in"
                data-aos-duration="300"
              >
                <div
                  @click="
                    goLINK(
                      'https://market.vg.company/product/1098540/vg-telefonia-plano-3gb'
                    )
                  "
                  class="card card-plano"
                  style="border: thin solid #144ace !important"
                >
                  <div class="card-body">
                    <h1 class="text-brand-blue">
                      <span class="boldFont">3</span>Gb
                    </h1>

                    <h2>100 min</h2>

                    <h3 class="text-brand-green">
                      <i>R$</i>49<span>,90</span>
                    </h3>

                    <div
                      class="bg-brand-green bonus"
                      data-aos="flip-up"
                      data-aos-duration="600"
                    >
                      <div class="tamanho-bonus text-brand-blue">
                        <span>1</span>Gb
                      </div>

                      <div class="texto-bonus">
                        de <br />
                        bônus*
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-md-3 col-lg-3"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <div
                  @click="goLINK('https://market.vg.company/product/1098795/vg-telefonia-plano-5gb')"
                  class="card card-plano"
                  style="border: thin solid #144ace !important"
                >
                  <div class="card-body">
                    <h1 class="text-brand-blue">
                      <span class="boldFont">5</span>Gb
                    </h1>

                    <h2>Ligações infinitas</h2>

                    <h3 class="text-brand-green">
                      <i>R$</i>59<span>,90</span>
                    </h3>

                    <div
                      class="bg-brand-green bonus"
                      data-aos="flip-up"
                      data-aos-duration="900"
                    >
                      <div class="tamanho-bonus text-brand-blue">
                        <span>1</span>Gb
                      </div>

                      <div class="texto-bonus">
                        de <br />
                        bônus*
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-md-3 col-lg-3"
                data-aos="zoom-in"
                data-aos-duration="900"
              >
                <div @click="goLINK('https://market.vg.company/product/1099050/vg-telefonia-plano-7gb')"
                  class="card card-plano"
                  style="border: thin solid #144ace !important"
                >
                  <div class="card-body">
                    <h1 class="text-brand-blue">
                      <span class="boldFont">7</span>Gb
                    </h1>

                    <h2>Ligações infinitas</h2>

                    <h3 class="text-brand-green">
                      <i>R$</i>69<span>,90</span>
                    </h3>

                    <div
                      class="bg-brand-green bonus"
                      data-aos="flip-up"
                      data-aos-duration="1200"
                    >
                      <div class="tamanho-bonus text-brand-blue">
                        <span>1</span>Gb
                      </div>

                      <div class="texto-bonus">
                        de <br />
                        bônus*
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-md-3 col-lg-3"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div @click="goLINK('https://market.vg.company/product/1099305/vg-telefonia-plano-15gb')"
                  class="card card-plano"
                  style="border: thin solid #144ace !important"
                >
                  <div class="card-body">
                    <h1 class="text-brand-blue">
                      <span class="boldFont">15</span>Gb
                    </h1>

                    <h2>Ligações infinitas</h2>

                    <h3 class="text-brand-green">
                      <i>R$</i>89<span>,90</span>
                    </h3>

                    <div
                      class="bg-brand-green bonus"
                      data-aos="flip-up"
                      data-aos-duration="1600"
                    >
                      <div class="tamanho-bonus text-brand-blue">
                        <span>1</span>Gb
                      </div>

                      <div class="texto-bonus">
                        de <br />
                        bônus*
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 text-center py-md-5 marginBtn">
                <small style="font-size: 14px"
                  >* Renovando antes do vencimento.</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="main-beneficios spacebig">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 bigPadding">
            <h2 class="text-brand-blue boldFont subline">
              Planos sem <br />
              fidelidade
            </h2>

            <span
              >Adeus contratos intermináveis!<br />

              Com a Telefonia VG você tem liberdade,<br />

              sem letras miúdas e sem<br />

              complicação.</span
            >
          </div>

          <div class="col-12 col-md-6">
            <img
              src="../../assets/1-fidelidade.png"
              class="img-fluid"
              alt="Planos sem fidelidade"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="main-beneficios bg-white spacebig"
      style="background: #f8f8f8 !important"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              src="../../assets/3-internet-acumula.png"
              class="img-fluid marginImg"
              alt="Internet acumulada"
            />
          </div>

          <div class="col-12 col-md-6 bigPadding">
            <h2 class="text-brand-blue boldFont subline">
              Internet<br />acumulada
            </h2>

            <span
              >Sobrou internet? Com a Telefonia VG <br />

              sua internet acumula mês a mês.<br />
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="main-beneficios spacebig">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 bigPadding">
            <h2 class="text-brand-blue boldFont subline">
              WhatsApp<br />
              Grátis
            </h2>

            <span
              >Com a Telefonia VG você tem <br />

              WhatsApp totalmente grátis<br />

              pra ficar de papo com o mozão.
            </span>
          </div>

          <div class="col-12 col-md-6">
            <img
              src="../../assets/2-whatsapp.png"
              class="img-fluid marginImg"
              alt="Whatsapp grátis"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="main-beneficios bg-white spacebig"
      style="background: #f8f8f8 !important"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              src="../../assets/4-internet-sem-corte.png"
              class="img-fluid marginImg"
              alt="Planos sem fidelidade"
            />
          </div>

          <div class="col-12 col-md-6 bigPadding">
            <h2 class="text-brand-blue boldFont subline">
              Internet 4G<br />
              sem cortes
            </h2>

            <span
              >Seu plano esgotou? Na Telefonia VG <br />

              você continua navegando <br />

              em velocidade reduzida mesmo <br />

              depois de ter utilizado toda<br />

              sua internet.
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="main-beneficios spacebig">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 bigPadding">
            <h2 class="text-brand-blue boldFont subline">
              Cobertura <br />
              nacional
            </h2>

            <span
              >De norte a sul, faça chuva ou <br />

              faça sol! A Telefonia VG tem uma das <br />

              maiores coberturas do Brasil.</span
            >
          </div>

          <div class="col-12 col-md-6">
            <img
              src="../../assets/ilustracao-cobertura.png"
              class="img-fluid marginImg"
              alt="Cobertura nacional"
            />
          </div>
        </div>
      </div>
    </section>

    <div
      class="container-fluid banner-encontre"
      :style="{
        backgroundImage: 'url(' + require('@/assets/banner-clube.png') + ')',
      }"
    >
      <div class="row">
        <div class="col-md-12 text-left">
          <h2>
            <b> Benefícios e vantagens que descomplicam sua vida! </b> <br />
          </h2>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, defineComponent } from "vue";
import Header from "../../components/Header/index.vue";
import Footer from "../../components/Footer/index.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import * as moment from "moment";
import Swal from "sweetalert2";
import AOS from "aos";
import { cpf } from "cpf-cnpj-validator";
import InputNumber from "primevue/inputnumber";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Splide,
    SplideSlide,
    InputNumber,
  },
  data() {
    return {
      valor: "",
      Carousel: "",
      token: false,
      CPFValid: false,
      body: "a",
      stage: 1,
      nome: "",
      email: "",
      telefone: "",
      cep: "",
      tipo: "",
      cpf: "",
      primaryOptions: {
        type: "loop",
        autoplay: true,
        speed: 400,
        rewind: true,
        gap: "0",
        margin: "0",
        perPage: 1,
        arrows: false,
        width: "100vw",
      },
      options2: ref([
        {
          value: "Seguro AUTO",
          label: "Seguro AUTO",
        },
        {
          value: "Seguro RESIDENCIAL",
          label: "Seguro RESIDENCIAL",
        },

        {
          value: "Seguro VIDA",
          label: "Seguro VIDA",
        },

        {
          value: "Seguro VIAGEM",
          label: "Seguro VIAGEM",
        },

        {
          value: "Seguro PORTÁTEIS",
          label: "Seguro PORTÁTEIS",
        },

        {
          value: "Seguro PESSOAIS",
          label: "Seguro PESSOAIS",
        },

        {
          value: "Seguro BIKE",
          label: "Seguro BIKE",
        },

        {
          value: "Seguro ODONTOLÓGICO",
          label: "Seguro ODONTOLÓGICO",
        },

        {
          value: "Seguro MOTO",
          label: "Seguro MOTO",
        },

        {
          value: "Seguro MULHER",
          label: "Seguro MULHER",
        },

        {
          value: "Seguro HOMEM",
          label: "Seguro HOMEM",
        },

        {
          value: "Seguro EDUCACIONAL",
          label: "Seguro EDUCACIONAL",
        },

        {
          value: "Seguro PET",
          label: "Seguro PET",
        },
      ]),
      options: ref([
        {
          value: "0 a 5 Mil",
          label: "0 a 5 Mil",
        },
        {
          value: "5 a 10 Mil",
          label: "5 a 10 Mil",
        },
        {
          value: "10 a 25 Mil",
          label: "10 a 25 Mil",
        },
        {
          value: "25 a 50 Mil",
          label: "25 a 50 Mil",
        },
        {
          value: "100 a 250 Mil",
          label: "100 a 250 Mil",
        },
        {
          value: "250 a 500 Mil",
          label: "250 a 500 Mil",
        },
        {
          value: "500 mil a 1 milhão",
          value: "500 mil a 1 milhão",
        },
      ]),
    };
  },
  methods: {
    goLINK(url) {
      window.open(url).focus();
    },
    zap() {
      window
        .open(
          "https://api.whatsapp.com/send?phone=5551920029734&text=Ola%20estou%20em%20busca%20de%20um%20Seguro%20%20Vg%20Company",
          "_blank"
        )
        .focus();
    },
    go(dado) {
      if (dado !== "top") {
        this.tipo = this.options2[dado - 1].value;
      }
      window.scrollTo(500, 2400);
    },
    sendMail() {
      //Logica pega api do webservice do arquivo .env e tira o /api do final
      let env;
      try {
        env = require("../../env.local.js").default;
      } catch (err) {
        if (err instanceof Error) {
          env = require("../../env.prod.js").default;
        }
      }

      let url = env.WS.URL;
      url = url.substr(0, url.length - 4); // <= seta o resultado no atributo default

      let html = "<h2>Dados para solicitação de Seguro:</h2><br>";
      html += "<p><b>Nome:</b> " + this.nome + "</p><br>";
      html += "<p><b>CPF:</b>  " + this.cpf + "</p><br>";
      html += "<p><b>Email:</b>  " + this.email + "</p><br>";
      html += "<p><b>Telefone:</b> " + this.telefone + " </p><br>";
      html += "<p><b>Cep:</b> " + this.cep + " </p><br>";
      html += "<p><b>Tipo de Seguro:</b> " + this.tipo + " </p><br>";
      html += "<p><b>Valor do  seguro :</b> " + this.valor + " </p><br>";

      axios
        .post(url + "/api/emprestimos/send-email", {
          TITLE: "SEGUROS - VG COMPANY",
          HTML: html,
        })
        .then(function (response) {
          let timerInterval3;
          Swal.fire({
            title: "Obrigado!",
            text: "Em breve entraremos em contato !",
            timer: 5000,
            icon: "success",
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval3 = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval3);
              window.location.reload();
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              window.location.reload();
            }
          });
        })
        .catch(function (error) {
          Swal.fire({
            title: "Algo deu Errado!",
            text: "Tente novamente mais tarde",
            icon: "error",
            confirmButtonText: "Tentar novamente",
          });
        });
    },
    validateCPF: function (event) {
      this.rawCPF = event.target.dataset.maskRawValue;
      this.CPFValid = cpf.isValid(event.target.dataset.maskRawValue);
      if (this.CPFValid == true) {
        this.ducumentSet = event.target.dataset.maskRawValue;
      }
    },
    goTO(url) {
      this.$router.push(url);
    },
  },
  mounted() {
    AOS.init();
  },

  created() {
  console.log("ok");
  },
  setup() {
    const formatTooltip = (val) => {
      return val / 100;
    };

    const value = ref([0, 50]);
    const marks = reactive({
      5: "R$ 5.000",
      10: "R$ 10.000",
      15: "R$ 15.000",
      20: "R$ 20.000",
      30: "R$ 30.000",
      40: "R$ 40.000",
      50: {
        style: {
          color: "#1989FA",
        },
        label: "R$ 50.000",
      },
    });

    return {
      formatTooltip,
      value,
      marks,
    };
  },
};
</script>

<style scoped>
.card-plano h3 {
  font-size: 6rem !important;
  vertical-align: top;
  display: inline-flex;
}
.text-brand-green {
  color: #d6ae66;
}

.card-plano h3 i {
  font-size: 1rem;
  font-style: normal !important;
  margin-top: 1rem;
}
.card-plano h3 span {
  font-size: 2.3rem;
  padding-top: 1rem;
}
.largo {
  width: 50%;
}
.item-lista .content p {
  font-size: 15px;
  color: #858585;
  min-height: 90px;
  line-height: 15px;
  margin-bottom: -5px;
}
.item-lista .top {
  padding-left: 0vw;
  position: relative;
}
.item-lista img {
  width: 50px;
  position: absolute;
  left: 0vw;
}
.item-lista h5 {
  font-weight: bold;
  color: #858585;
  text-transform: uppercase;
  margin-bottom: -10px;
}
.item-lista h4 {
  font-weight: bold;
  color: #7235b2;
  text-transform: uppercase;
  font-size: 35px;
  margin-top: 4px;
}
.lista-produtos {
  /* display: flex; */
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: space-between;
}
.item-lista {
  width: 32%;
  background: white;
  padding: 1vw 2vw;
  margin-right: 1.333333333333333333333333333333333333333333%;
  margin-bottom: 20px;
  cursor: pointer;
  border-left: 2px solid #409eff;
}
.card-plano:hover {
  box-shadow: 2px 1px 10px 0 rgb(40 50 110);
}

.produtos {
  background: #f8f8f8 !important;
  padding-bottom: 50px;
}
.form-static {
  background-color: #ffffff;

  width: 100%;
  -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  border-radius: 4px;
  padding: 24px;
}
.beneficios li {
  font-size: 18px;
  font-weight: bold;
  color: #484848;
  margin-bottom: 5px;
}
.site {
  margin-top: 0 !important;
}
.banner-encontre h2 {
  font-weight: 200;
  width: 50%;
}
.banner h2 {
  font-weight: 200;
  width: 100%;
  color: white;
  float: right;
}
.banner b {
  font-weight: bold;
  font-size: 50px;
}
.banner-encontre {
  background-image: url(/img/bottom.9adcc827.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 100px 8vw;
  width: 100%;
  height: 347px;
  color: white;
  margin-top: -90px;
}
.banner {
  background: #3a0166;
  height: 600px;
  background-position: 0px 0px;
  background-size: cover;
  position: relative;
  padding: 10vw 0vw;
}
.simulacao {
  background: white;
  border-radius: 16px;
  padding-bottom: 0;
  width: 100%;
  margin: 60px 0px 0px 0px;
}
.box {
  padding: 1vw 2vw;
  text-align: center;
}
.box p {
  font-size: 30px;
  color: #02204d;
  font-weight: bold;
}
.box span {
  color: #4f089e;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
}
.box .text-blue-00 {
  font-size: 15px;
  color: #4c4545;
  margin: 20px 5px;
}
.box button {
  background: #4f089e;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  cursor: pointer;
  width: 80%;
}

.box input {
  border: none;
  border-bottom: 2px solid #02204d;
  width: 100%;
}

.box .p-inputnumber-input {
  border: none;
  border-bottom: 2px solid #02204d;
  width: 100%;
  border-radius: 0px !important;
}
.box .p-inputnumber-input:focus-visible {
  outline: none;
}
.box input:focus-visible {
  outline: none;
}
.box button:hover {
  background: #02204d;
}
.box .card {
  padding: 2vw 0.5vw;
}
.card h2 {
  padding: 0vw 0vw;
  font-size: 16px;
  color: #02204d;
}
.card {
  padding: 1vw 0vw;
  min-height: auto;
  border-radius: 15px;
  box-shadow: 2px 1px 10px 0 rgb(15 15 16 / 62%);
  text-align: center;
  display: block;
  margin-bottom: 30px;
}
.card p {
  text-align: justify;
  color: #5a5a5a;
  font-weight: bold;
  font-size: 15px;
  min-height: 245px;
  margin-bottom: 0px;
}

.card img {
  width: 80px;
  margin-bottom: 10px;
}
</style>


<style scoped>
.banner-img .img {
  width: auto;
  height: 100%;
  position: absolute;
  margin: auto;
  inset: 0 0 0 0;
  background-size: cover;
  background-position: center center;
}
@media only screen and (max-width: 1600px) {
  .banner-img {
    height: 300px !important;
    min-height: 300px !important;
  }
}
@media only screen and (max-width: 1100px) {
  .banner-img {
    height: 250px !important;
    min-height: 250px !important;
  }
}
@media only screen and (max-width: 1024px) {
  .banner-img {
    height: 200px !important;
    min-height: 200px !important;
  }
}
@media only screen and (max-width: 1024px) {
  .logo h2 {
    padding: 4vw 0vw !important;
    text-align: right !important;
    font-size: 30px !important;
  }
  .banner-encontre {
    padding: 50px 5vw;
    width: 100%;
    height: 300px;
    color: white;
    margin-top: 97px;
  }
  .banner-encontre h2 {
    font-weight: 200;
    width: 100% !important;
  }
  .item-lista .top {
    padding-left: 15vw;
    position: relative;
  }
  .lista h2 {
    padding: 1vw 5vw !important;
    font-size: 25px !important;
  }
  .item-lista {
    padding: 4vw 4vw;
    width: 100%;
  }

  .logo img {
    width: 75%;
  }
  .simulacao {
    background: white;
    border-radius: 16px;
    box-shadow: 2px 1px 10px 0 rgb(67 70 83 / 50%);
    padding-bottom: 0;
    width: 380px;
    margin-top: -10vw;
    bottom: 0;
    margin-left: 0;
    margin-bottom: 50px;
    right: 0;
    padding: 5vw 2vw;
  }
  .beneficios h2 {
    font-size: 25px;
  }
  .beneficios .card {
    padding: 1vw 0vw;
    min-height: auto;
    border-radius: 15px;
    box-shadow: 2px 1px 10px 0 rgb(15 15 16 / 0%);
    text-align: center;
    display: block;
    margin-bottom: 15px;
    border: none;
  }
  .beneficios {
    padding: 5vw 8vw !important;
    text-align: left;
  }

  .tipos .card h2 {
    padding: 0vw 0vw;
    font-size: 16px;
    color: #02204d;
    min-height: 40px;
  }
  .banner b {
    font-size: 30px;
  }
  .banner {
    height: 260px;
    padding: 5vw 0vw;
  }

  .banner h2 {
    font-size: 22px;
    width: 100%;
  }
  .emprestimos {
    margin-top: -25px;
  }
  .banner-img {
    height: 200px !important;
    min-height: 200px !important;
  }
}
.splide {
  padding: 0;
}

.splide__slide img {
  width: 100%;
  height: auto;
  background-size: contain;
  background-position: center;
}
.splide__pagination ul {
  width: max-content;
  background: white;
  padding: 5px 1vw;
  border-radius: 25px;
}

#mobile img {
  height: 350px !important;
}
#desktop img {
  height: 420px !important;
}
.Carousel-Home {
  border-bottom: 1px solid #e6e3e3;
}
</style>


<style>
.splide__pagination__page.is-active {
  background: #3059aa !important;
}

.emprestimos .p-inputnumber-input {
  border: none;
  border-bottom: 2px solid #02204d;
  width: 100%;
}

.emprestimos .p-inputnumber-input {
  border-radius: 0px !important;
}

.emprestimos .p-inputnumber-input:focus-visible {
  outline: none !important;
  box-shadow: 0 0 0 0 #a6d5fa !important;
  border-color: #02204d !important;
}
.el-select {
  width: 100%;
}
.el-input {
  margin-top: 5px !important;
  margin-bottom: 5px !important;
}
.card-plano {
  border-radius: 10%;
  max-width: 230px;
  max-height: 310px;
  margin-left: auto;
  cursor: pointer;
  margin-right: auto;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.card-plano h1 {
  font-size: 4rem;
  line-height: 4rem;
  padding-top: 1.5rem;
}
.text-brand-blue {
  color: #28326e;
}
.card-plano h2 {
  font-size: 1.25rem;
}
.bonus {
  width: 175px;
  height: 60px;
  position: relative;
  z-index: 9999;
  margin: 0 auto;
  bottom: 10px;
  padding: 5px;
  border-radius: 20px;
}
.bg-brand-green {
  background-color: #d6ae66;
}
.bonus .tamanho-bonus {
  font-size: 1.75rem;
  width: 50%;
  position: relative;
  float: left;
  text-transform: uppercase;
  font-weight: bold;
}
.bonus .tamanho-bonus span {
  font-size: 2.5rem;
}
.bonus .texto-bonus {
  font-size: 1rem;
  width: 50%;
  padding-top: 7px;
  text-align: left !important;
  position: relative;
  float: left;
  line-height: 19px;
}
.bonus:after {
  content: url(../../assets/more-card-planos.png);
  width: 40px;
  height: 40px;
  position: relative;
  top: -65px;
  right: -35px;
}
.spacebig {
  padding: 5.6rem 0;
}
.bigPadding {
  padding: 5rem;
}
.main-beneficios h2 {
  font-size: 2.5rem;
}
.main-beneficios .subline:after {
  border: 1px solid #00d66a;
  content: "";
  width: 3.7rem;
  display: block;
  margin: 1.25rem 0;
}
</style>
