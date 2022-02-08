<template>
  <Header></Header>
  <div class="zap" @click="zap()">
    <img src="../../assets/whatsapp.png" />
  </div>
  <div class="emprestimos">
    <div
      class="container-fluid banner"
      :style="{
        backgroundImage: 'url(' + require('@/assets/emprestimo.png') + ')',
      }"
    >
      <div class="simulacao">
        <div class="box box-global box-new-card" v-if="stage == 1">
          <p class="pt-20 text-blue-000 body-3 text-center view-desktop">
            Digite o seu CPF e
            <span
              class="span-block text-pink-000 font-weight-bolder"
              style="font-size: 25px"
              >descubra a sua oferta:</span
            >
          </p>
          <div data-gtm-event-id="81488">
            <div id="login-container ">
              <div id="login-pre" class="text-left">
                <input
                  type="tel"
                  id="cpf"
                  name="cpf"
                  class="login-input"
                  maxlength="14"
                  placeholder="000.000.000-00"
                  v-maska="'###.###.###-##'"
                  @maska="validateCPF"
                  v-model="cpf"
                />
                <br /><br />
                <span style="font-size: 20px; font-weight: bold"
                  >Capital Pretendido</span
                >
                <InputNumber
                  placeholder="R$ 5.000,00"
                  v-model="valor"
                  mode="currency"
                  currency="BRL"
                />
              </div>

              <p class="text-blue-00 text-center pb-10">
                Resolva sua situação financeira de forma rápida, fácil, segura e
                com as menores taxas do mercado.
              </p>
              <div class="access-msg" id="access-msg" style="padding-top: 5px">
                <div id="form-btn" class="disabled">
                  <div class="red-inputs">
                    <el-button
                      @click="stage = 2"
                      style="margin-top: 12px"
                      type="primary"
                      round
                      v-if="CPFValid"
                    >
                      Simule já</el-button
                    >
                    <el-button
                      style="margin-top: 12px"
                      type="info"
                      disabled
                      round
                      v-else
                    >
                      Simule já</el-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box box-global box-new-card text-left" v-if="stage == 2">
          <p style="font-size: 19px">Complete seus dados para continuar.</p>
          <span>Nome</span>
          <el-input v-model="nome"></el-input>
          <span>Email</span>
          <el-input v-model="email"></el-input>
          <span>Telefone</span>
          <el-input v-model="telefone"></el-input>
          <span>CEP</span>
          <el-input v-model="cep"></el-input>
          <span>Tipo de Serviço</span>
          <el-select v-model="tipo" clearable placeholder="TIPO DE SERVIÇO">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div class="text-center">
            <el-button
              @click="sendMail()"
              style="margin-top: 12px"
              type="primary"
              round
              v-if="
                nome.length > 0 &&
                email.length > 0 &&
                telefone.length > 0 &&
                cep.length > 0 &&
                tipo.length > 0
              "
            >
              Continuar</el-button
            >
            <el-button
              style="margin-top: 12px"
              type="info"
              disabled
              round
              v-else
            >
              Continuar</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="background: #4f089e; padding: 5vw 5vw">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3" data-aos="flip-left" data-aos-duration="300">
            <div class="card">
              <img src="../../assets/idosos.png" />
              <h2>EMPRÉSTIMOS CONSIGNADO INSS</h2>
              <p>
                O Crédito Consignado para aposentados e pensionistas do INSS é
                uma modalidade de empréstimo, com baixas taxas de juros e prazo
                de até 72 meses, na qual as parcelas são descontadas diretamente
                de benefício do aposentado/pensionista. É um crédito sem
                consulta ao SPC e ao Serasa. Tudo de forma fácil, rápida, sem
                burocracia e com toda comodidade que você precisa.
              </p>
            </div>
          </div>
          <div class="col-md-3" data-aos="flip-left" data-aos-duration="600">
            <div class="card">
              <img src="../../assets/employees.png" />
              <h2>EMPRÉSTIMO CONSIGNADO PARA SERVIDORES CONCURSADOS</h2>
              <p>
                O Crédito Consignado para servidores concursados ativos,
                inativos e aposentados do estado de interesse é uma modalidade
                de empréstimo com baixas taxas de juros e sem consulta aos
                órgãos de proteção de crédito (SPC e Serasa). Tudo de forma
                fácil, rápida, sem burocracia e com toda comodidade que você
                precisa. <br />
                *Verifique a disponibilidade para o seu estado.
              </p>
            </div>
          </div>
          <div class="col-md-3" data-aos="flip-left" data-aos-duration="900">
            <div class="card">
              <img src="../../assets/group.png" />
              <h2>
                EMPRÉSTIMO CONSIGNADO PARA SERVIDORES FEDERAIS CIVIS (SIAPE)
              </h2>
              <p>
                O Crédito Consignado para servidores federais civis - SIAPE é
                uma modalidade de crédito com baixas taxas e prazo de até 96
                meses, na qual as parcelas são descontadas diretamente da folha
                de pagamento. É um crédito sem consulta ao SPC e ao Serasa. Tudo
                de forma fácil, rápida e sem burocracia e com toda comodidade
                que você precisa.
              </p>
            </div>
          </div>
          <div class="col-md-3" data-aos="flip-left" data-aos-duration="1200">
            <div class="card">
              <img src="../../assets/military.png" />
              <h2>EMPRÉSTIMO CONSIGNADO PARA MILITARES</h2>
              <p>
                O Crédito Consignado para Militares do Exército, da Marinha e da
                Aeronáutica é uma modalidade e empréstimo com baixas taxas de
                juros, com prazo de até 96 meses de pagamento e sem consulta aos
                órgãos de proteção de crédito (SPC e Serasa). Tudo de forma
                fácil, rápida, sem burocracia e com toda comodidade que você
                precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container porque">
      <div class="d-flex align-items-center flex-wrap flex-md-nowrap">
        <div
          class="col-md-6 text-center text-md-left aos-init aos-animate"
          data-aos="fade-right"
        >
          <h2
            class="text-blue-000 main-title-mobile main-title-desktop"
            style="color: #02204d"
          >
            Por que fazer
            <span class="span-block" style="color: #02204d; margin: 35px 0px"
              >empréstimo na Vg.Company?</span
            >
          </h2>
          <p class="text-blue-000" style="color: #02204d">
            Na VG, sua saúde financeira é o que direciona o nosso negócio. Por
            isso, os produtos são pensados para oferecer limites, taxas de juros
            e parcelas mais adequadas para o seu perfil. Compare e veja:
          </p>
        </div>
        <div class="col-md-6 aos-init aos-animate" data-aos="flip-left">
          <img src="../../assets/taxa.png" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/9Q4Km-klzuM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
      valor: "5000",
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
      options: ref([
        {
          value: "EMPRÉSTIMOS CONSIGNADO INSS",
          label: "EMPRÉSTIMOS CONSIGNADO INSS",
        },
        {
          value: "EMPRÉSTIMO CONSIGNADO PARA SERVIDORES CONCURSADOS",
          label: "EMPRÉSTIMO CONSIGNADO PARA SERVIDORES CONCURSADOS",
        },
        {
          value: "EMPRÉSTIMO CONSIGNADO PARA SERVIDORES FEDERAIS CIVIS (SIAPE)",
          label: "EMPRÉSTIMO CONSIGNADO PARA SERVIDORES FEDERAIS CIVIS (SIAPE)",
        },
        {
          value: "EMPRÉSTIMO CONSIGNADO PARA MILITARES",
          label: "EMPRÉSTIMO CONSIGNADO PARA MILITARES",
        },
      ]),
    };
  },
  methods: {
    zap() {
      window
        .open(
          "https://api.whatsapp.com/send?phone=5551920029734&text=Ola%20estou%20em%20busca%20de%20um%20empr%C3%A9stimo%20Vg%20Company",
          "_blank"
        )
        .focus();
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

      let html = "<h2>Dados para simulação de empréstimo:</h2><br>";
      html += "<p><b>Nome:</b> " + this.nome + "</p><br>";
      html += "<p><b>CPF:</b>  " + this.cpf + "</p><br>";
      html += "<p><b>Email:</b>  " + this.email + "</p><br>";
      html += "<p><b>Telefone:</b> " + this.telefone + " </p><br>";
      html += "<p><b>Cep:</b> " + this.cep + " </p><br>";
      html += "<p><b>Tipo de Serviço:</b> " + this.tipo + " </p><br>";
      html += "<p><b>Capital Pretendido :</b> " + this.valor + " </p><br>";

      axios
        .post(url + "/api/emprestimos/send-email", {
          TITLE: "EMPRÉSTIMOS - VG COMPANY",
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

  created() {},
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
.banner {
  background: #3a0166;
  height: 600px;
  background-position: 0px 0px;
  background-size: cover;
  position: relative;
}
.simulacao {
  background: white;
  border-radius: 16px;
  box-shadow: 2px 1px 10px 0 rgb(67 70 83 / 50%);
  padding-bottom: 0;
  width: 380px;
  top: 0;
  position: absolute;
  bottom: 0;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  margin: auto;
  left: 22vw;
}
.box {
  padding: 1vw 2vw;
  text-align: center;
}
.box p {
  font-size: 30px;
  color: #02204d;
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
  min-height: 60px;
}
.card {
  padding: 2vw 1vw;
  min-height: 350px;
  border-radius: 15px;
  box-shadow: 2px 1px 10px 0 rgb(15 15 16 / 62%);
  text-align: center;
  display: block;
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
  .porque img {
    width: 100%;
    height: auto;
  }
  .main-title-mobile {
    text-transform: uppercase;
    margin-top: 25px;
  }
  .card p {
    font-size: 12px;
    min-height: auto;
    margin-bottom: 10px;
  }
  .card h2 {
    padding: 0vw 0vw;
    font-size: 17px;
    min-height: 0;
  }
  .card {
    padding: 3vw 5vw;
    margin-bottom: 25px;
  }
  .simulacao {
    width: 365px;
    padding: 5vw 2vw;
    left: 0;
    right: 0;
  }
  .emprestimos {
    margin-top: -25px;
  }
  .banner {
    background-size: cover;
    background-position: center center;
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
</style>