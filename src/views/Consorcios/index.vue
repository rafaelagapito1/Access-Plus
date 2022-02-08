<template>
  <Header></Header>
  <div class="zap" @click="zap()">
    <img src="../../assets/whatsapp.png" />
  </div>
  <div class="emprestimos">
    <div
      class="container-fluid banner"
      :style="{
        backgroundImage: 'url(' + require('@/assets/coupleinbox.svg') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              <b> Consórcios </b> <br />
              Conquiste seus bens com planejamento, sem juros e sem entrada
            </h2>
            <el-button
              style="margin-top: 12px"
              type="primary"
              round
              @click="go()"
            >
              Faça sua Simulação</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid tipos"
      style="background: #4f089e; padding: 5vw 5vw"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1"></div>

          <div
            class="col-md-2 col-6"
            data-aos="flip-left"
            data-aos-duration="300"
          >
            <div class="card">
              <img src="../../assets/house.png" />
              <h2>Consórcio de Imóveis</h2>
            </div>
          </div>
          <div
            class="col-md-2 col-6"
            data-aos="flip-left"
            data-aos-duration="300"
          >
            <div class="card">
              <img src="../../assets/car.png" />
              <h2>Consórcio de Carros</h2>
            </div>
          </div>
          <div
            class="col-md-2 col-6"
            data-aos="flip-left"
            data-aos-duration="300"
          >
            <div class="card">
              <img src="../../assets/motorbike.png" />
              <h2>Consórcio de Motos</h2>
            </div>
          </div>
          <div
            class="col-md-2 col-6"
            data-aos="flip-left"
            data-aos-duration="300"
          >
            <div class="card">
              <img src="../../assets/worldwide.png" />
              <h2>Consórcio de Viagens</h2>
            </div>
          </div>
          <div class="col-md-2" data-aos="flip-left" data-aos-duration="300">
            <div class="card">
              <img src="../../assets/beleza.png" />
              <h2>Consórcio de Estética</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 beneficios" style="padding: 10vw 0vw">
          <h2
            style="
              color: #484848;
              text-align: center;
              text-transform: uppercase;
              margin-bottom: 50px;
            "
          >
            VEJA SÓ OS INCRÍVEIS BENEFÍCIOS DE FAZER UM
            <b style="color: #409eff">CONSÓRCIO COM A VG</b>
          </h2>
          <div class="row text-center">
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="300">
                <div class="number">1°</div>
                <img src="../../assets/1.png" />
              </div>
              <h5>COMPRA PARCELADA DE BENS ALTO VALOR SEM JUROS.</h5>
            </div>
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="600">
                <div class="number">2°</div>
                <img src="../../assets/2.png" />
              </div>
              <h5>FLEXÍVEL, VOCÊ DIZ COMO E QUANTO PODE PAGAR</h5>
            </div>
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="900">
                <div class="number">3°</div>
                <img src="../../assets/3.png" />
              </div>
              <h5>PODER DE COMPRA A VISTA.</h5>
            </div>
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="1200">
                <div class="number">4°</div>
                <img src="../../assets/4.png" />
              </div>
              <h5>MENOS BUROCRACIA.</h5>
            </div>
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="1500">
                <div class="number">5°</div>
                <img src="../../assets/5.png" />
              </div>
              <h5>PODER DE ANTECIPAÇÃO DE CONTEMPLAÇÃO.</h5>
            </div>
            <div class="col-md-4 col-6">
              <div class="card" data-aos="flip-left" data-aos-duration="1800">
                <div class="number">6°</div>
                <img src="../../assets/6.png" />
              </div>
              <h5>USO INTELIGENTE DO SEU FGTS.</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 simula">
          <div class="simulacao">
            <div class="box box-global box-new-card">
              <p class="pt-20 text-blue-000 body-3 text-center view-desktop">
                SIMULE AGORA
              </p>
              <span>Descubra qual consórcio tem o seu jeito.</span>
            </div>
            <div class="box box-global box-new-card text-left">
              <span>CPF</span>
              <el-input
                type="tel"
                id="cpf"
                name="cpf"
                class="login-input"
                maxlength="14"
                placeholder="000.000.000-00"
                v-maska="'###.###.###-##'"
                @maska="validateCPF"
                v-model="cpf"
              ></el-input>
              <span>Nome</span>
              <el-input v-model="nome"></el-input>
              <span>Email</span>
              <el-input v-model="email"></el-input>
              <span>Telefone</span>
              <el-input v-model="telefone"></el-input>
              <span>CEP</span>
              <el-input v-model="cep"></el-input>
              <span>Tipo de Consórcio</span>
              <el-select
                v-model="tipo"
                clearable
                placeholder="Tipo de Consórcio"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span>valor do bem (R$)</span>
              <el-select v-model="valor" clearable placeholder="valor do bem">
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
                    CPFValid &&
                    nome.length > 0 &&
                    email.length > 0 &&
                    telefone.length > 0 &&
                    cep.length > 0 &&
                    tipo.length > 0
                  "
                >
                  Solicitar Contato</el-button
                >
                <el-button
                  style="margin-top: 12px"
                  type="info"
                  disabled
                  round
                  v-else
                >
                  Solicitar Contato</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container logo">
      <div class="row">
        <div class="col-md-12 text-center">
          <img style="width: 40%" src="../../assets/consorcio2.png" />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/GiIi9cGswTo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div
      class="container-fluid banner-encontre"
      :style="{
        backgroundImage: 'url(' + require('@/assets/bottom.png') + ')',
      }"
    >
      <div class="row">
        <div class="col-md-12 text-left">
          <h2>
            <b> Não deixe o seu sonho para depois </b> <br />
            Encontre a opção que cabe no seu bolso com Consórcio Vg Company.
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
          value: "Consórcio de Imóveis",
          label: "Consórcio de Imóveis",
        },
        {
          value: "Consórcio de Carros ",
          label: " Consórcio de Carros",
        },
        {
          value: "Consórcio de Motos ",
          label: "Consórcio de Motos ",
        },
        {
          value: " Consórcio de Viagens",
          label: "Consórcio de Viagens ",
        },
        {
          value: " Consórcio de Estética",
          label: "Consórcio de Estética ",
        },
      ]),
      options: ref([
        {
          value: "0 a 50 Mil",
          label: "50 a 100 Mil",
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
    zap() {
      window
        .open(
          "https://api.whatsapp.com/send?phone=5551920029734&text=Ola%20estou%20em%20busca%20de%20um%20Cons%C3%B3rcio%20Vg%20Company",
          "_blank"
        )
        .focus();
    },
    go() {
      window.scrollTo(500, 1020);
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

      let html = "<h2>Dados para solicitação de consórcio:</h2><br>";
      html += "<p><b>Nome:</b> " + this.nome + "</p><br>";
      html += "<p><b>CPF:</b>  " + this.cpf + "</p><br>";
      html += "<p><b>Email:</b>  " + this.email + "</p><br>";
      html += "<p><b>Telefone:</b> " + this.telefone + " </p><br>";
      html += "<p><b>Cep:</b> " + this.cep + " </p><br>";
      html += "<p><b>Tipo de Serviço:</b> " + this.tipo + " </p><br>";
      html += "<p><b>Capital Pretendido :</b> " + this.valor + " </p><br>";

      axios
        .post(url + "/api/emprestimos/send-email", {
          TITLE: "CONSÓRCIOS - VG COMPANY",
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
.beneficios .number {
  position: absolute;
  color: #4f089e;
  font-weight: bold;
  left: -12px;
  top: -18px;
  font-size: 25px;
  text-decoration: underline;
  text-align: center;
}
.beneficios h5 {
  color: #02204d;
  font-size: 14px;
  margin-bottom: 50px;
}
.beneficios img {
  width: 100%;
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
  width: 50%;

  color: white;
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
  margin-top: 150px;
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
  box-shadow: 2px 1px 10px 0 rgb(67 70 83 / 50%);
  padding-bottom: 0;
  width: 380px;
  margin-top: 6vw;
  bottom: 0;
  margin-left: 10vw;
  right: 0;
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
</style>