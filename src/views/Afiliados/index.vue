<template>
  <Header></Header>
  <div class="emprestimos">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2
            style="
              color: #484848;
              text-align: center;
              text-transform: uppercase;
              margin-bottom: 50px;
              font-size: 50px;
              padding: 0vw 32vw;
              margin-bottom: 50px;
              margin-top: 50px;
            "
          >
            PROGRAMA DE AFILIADOS <b style="color: #409eff">VG COMPANY</b>
          </h2>
          <img
            style="margin-top: 50px; margin-bottom: 50px"
            src="../../assets/affiliate-marketing.png"
          />
          <div
            style="
              padding: 0vw 25vw;
              font-size: 20px;
              text-align: center;
              font-weight: bold;
              color: #484848;
              margin-bottom: 100px;
            "
          >
            <div
              style="
                background: #ececec;
                padding: 2vw 1vw;
                border-bottom: 2px solid #51a7ff;
              "
            >
              Com a VG COMPANY, todos os clientes podem participar do PROGRAMA
              DE AFILIADOS VG COMPANY, repleto de vantagens e oportunidades,
              onde além do benefício da compra de produtos e serviços de
              qualidade, você gera renda através do compartilhamento deles.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <h2
            style="
              color: #484848;
              text-align: center;
              text-transform: uppercase;
              margin-bottom: 50px;
              font-size: 50px;
            "
          >
            CANAIS DE <b style="color: #409eff">VENDAS</b>
          </h2>
        </div>
        <div class="col-md-6">
          <img
            style="margin-top: 50px; margin-bottom: 50px"
            src="../../assets/commission.png"
          />
          <h2>VENDAS <b style="color: #409eff">DIRETAS</b></h2>
          <p>
            Você pode comprar produtos ou serviços comercializados por empresas
            associadas à VG Company com toda tranquilidade e segurança. Isso
            porque, ao fazer parte da Associação Brasileira de Empresas de
            Vendas Diretas, a organização se compromete em cumprir o Código de
            Defesa do Consumidor e um rigoroso Código de Ética, que protege os
            direitos de seus clientes e assegura uma relação comercial
            confiável.
          </p>
        </div>
        <div class="col-md-6">
          <img
            style="margin-top: 50px; margin-bottom: 50px"
            src="../../assets/right-arrows.png"
          />
          <h2>VENDAS <b style="color: #409eff">INDIRETAS</b></h2>
          <p>
            Por meio da venda direta (direct selling, em inglês) o vendedor leva
            produtos e serviços diretamente aos consumidores, sem precisar de um
            ambiente específico — como um estabelecimento comercial fixo ou loja
            virtual — para fechar negócio.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid fazer-part">
      <div class="row">
        <div class="col-md-4 item">
          <div class="inter">
            <h2 style="margin-top: 10 px; font-size: 40px">
              PARA FAZER PARTE <b style="color: #409eff">É SIMPLES</b>
            </h2>
          </div>
        </div>
        <div class="col-md-4 item">
          <div class="inter text-center">
            <img
              style="margin-top: 0; margin-bottom: 0; width: 20%"
              src="../../assets/group.png"
            />
            <p
              style="
                color: #212529;
                font-weight: bold;
                text-align: left;
                font-size: 20px;
              "
            >
              Se indicaram a VG para você, peça para essa pessoa o link de
              cadastro
            </p>
          </div>
        </div>
        <div class="col-md-4 item">
          <div class="inter text-center">
            <img
              style="margin-top: 0; margin-bottom: 0; width: 20%"
              src="../../assets/employees.png"
            />
            <p
              style="
                color: #212529;
                font-weight: bold;
                text-align: left;
                font-size: 20px;
              "
            >
              Caso você tenha conhecido a VG sem a indicação de um amigo ou
              familiar, clique no botão abaixo e inscreva-se agora mesmo.
            </p>
          </div>
        </div>
        <div class="col-md-12 text-center">
          <el-button
            style="margin-top: 60px; width: 200px; text-transform: uppercase"
            type="primary"
            round
            @click="go()"
          >
            Inscrever-se</el-button
          >
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
    go() {
      window.scrollTo(0, 0);
      window
        .open(
          "https://oficinavirtual.vg.company/invite/DESAFIO80EM70",
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
.fazer-part {
  padding: 4vw 5vw;
}
.fazer-part .inter {
  background: #ececec;
  border-bottom: 2px solid #409eff;
  padding: 2vw 2vw;
  min-height: 280px;
}
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