<template>
  <Header></Header>
  <div class="zap" @click="zap()">
    <img src="../../assets/whatsapp.png" />
  </div>
  <div class="emprestimos">
    <div
      class="container-fluid banner"
      :style="{
        backgroundImage: 'url(' + require('@/assets/mae.webp') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              <b> VG Corretora de Seguros </b> <br />
              Diversas soluções, inclusive a mais adequada para você.
            </h2>
            <el-button
              style="margin-top: 12px"
              type="primary"
              round
              @click="go('top')"
            >
              FAZER COTAÇÃO AGORA</el-button
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
              style="width: 40%; margin-top: 40px"
              src="../../assets/seguros2.png"
            />
          </div>
        </div>
      </div>
      <div class="container lista">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 style="padding: 2vw 15vw; font-size: 40px">
              ESCOLHA O SEU SEGURO E FAÇA UMA COTAÇÃO<b style="color: #409eff">
                AGORA MESMO</b
              >
            </h2>
          </div>
          <div class="col-md-12 lista-produtos">
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="200">
              <div class="top">
                <img src="../../assets/car.png" alt="" />
                <h5>Seguro</h5>
                <h4>AUTO</h4>
              </div>
              <div class="content">
                <p>
                  Mais do que uma precaução, o seguro do automóvel é uma
                  necessidade para você reduzir prejuízos  em caso de acidente
                  roubo ou furto, além de assegurar sua vida e dos terceiros.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(1)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="400">
              <div class="top">
                <img src="../../assets/house.png" alt="" />
                <h5>Seguro</h5>
                <h4>RESIDENCIAL</h4>
              </div>
              <div class="content">
                <p>
                  Proteja seu patrimônio com seguro residencial. Serviços e
                  benefícios exclusivos para a sua casa ou apartamento, com
                  coberturas especiais e para você e sua família.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(2)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="600">
              <div class="top">
                <img src="../../assets/idosos.png" alt="" />
                <h5>Seguro de</h5>
                <h4>VIDA</h4>
              </div>
              <div class="content">
                <p>
                  Pensando na melhor forma de proteger você e a sua família, o
                  seguro de vida garante a sua proteção financeira em casos de
                  invalidez e doenças graves, e ainda ampara seus dependentes em
                  caso falecimento.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(3)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="800">
              <div class="top">
                <img src="../../assets/worldwide.png" alt="" />
                <h5>Seguro</h5>
                <h4>VIAGEM</h4>
              </div>
              <div class="content">
                <p>
                  Seguro viagem seja para lazer ou negócios, em viagens
                  nacionais ou internacionais, este seguro tem coberturas e
                  serviços que oferecem tranquilidade a sua viagem, bagagens e
                  família.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(4)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="1000">
              <div class="top">
                <img src="../../assets/smartphone-call.png" alt="" />
                <h5>Seguro</h5>
                <h4>PORTÁTEIS</h4>
              </div>
              <div class="content">
                <p>
                  Um seguro especial para seu notebook, smartphone, tablet
                  câmera fotográfica ou filmadora. Seu diferencial é uma
                  cobertura que repõe o equipamento eletrônico portátil em caso
                  de danos ou roubo.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(5)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="1200">
              <div class="top">
                <img src="../../assets/sinal-de-deficiente.png" alt="" />
                <h5>Acidentes</h5>
                <h4>PESSOAIS</h4>
              </div>
              <div class="content">
                <p>
                  O seguro de acidentes pessoais oferece cobertura em casos de
                  acidentes que levem a morte ou  invalidez permanente. Oferece
                  também, coberturas adicionais de despesas médico-hospitalares
                  e diárias de incapacidade temporária.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(6)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="1400">
              <div class="top">
                <img src="../../assets/road-bike.png" alt="" />
                <h5>Seguro</h5>
                <h4>BIKE</h4>
              </div>
              <div class="content">
                <p>
                  Um seguro especial para sua bicicleta, vá tranquilo pedalar.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(7)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="1600">
              <div class="top">
                <img src="../../assets/cadeira-de-dentista.png" alt="" />
                <h5>Seguro</h5>
                <h4>ODONTOLÓGICO</h4>
              </div>
              <div class="content">
                <p>
                  O seguro odontológico conta com uma ampla rede de
                  profissionais credenciados, com clínicas especializadas sempre
                  perto de você.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(8)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div class="item-lista" data-aos="zoom-in" data-aos-duration="1800">
              <div class="top">
                <img src="../../assets/motorbike.png" alt="" />
                <h5>Seguro</h5>
                <h4>MOTO</h4>
              </div>
              <div class="content">
                <p>
                  O seguro de motos oferece coberturas personalizadas, além de
                  possuir vantagens e benefícios para descomplicar a sua rotina
                  em duas rodas.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(9)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div
              class="item-lista largo"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div class="top">
                <img src="../../assets/mulher.png" alt="" />
                <h5>Seguro</h5>
                <h4>MULHER</h4>
              </div>
              <div class="content">
                <p>
                  Com coberturas e benefícios especiais, é um seguro de vida
                  específico para mulheres. Destacando alguns diferenciais, este
                  seguro garante indenização em caso de diagnóstico de câncer de
                  mama e oferece serviços de informação nutricional.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(10)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>

            <div
              class="item-lista largo"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <div class="top">
                <img src="../../assets/homem-de-negocios.png" alt="" />
                <h5>Seguro</h5>
                <h4>HOMEM</h4>
              </div>
              <div class="content">
                <p>
                  Voltado para o público masculino, conta com coberturas e
                  benefícios especiais. Garante indenização, em vida, em casa de
                  diagnóstico de doenças que mais atingem os homens.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(11)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div
              class="item-lista largo"
              data-aos="zoom-in"
              data-aos-duration="2400"
            >
              <div class="top">
                <img src="../../assets/educacao-online.png" alt="" />
                <h5>Seguro</h5>
                <h4>EDUCACIONAL</h4>
              </div>
              <div class="content">
                <p>
                  O seguro educacional garante o pagamento das mensalidades
                  escolares do aluno em casos de necessidades financeiras do
                  responsável, seja por desemprego, invalidez ou morte.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(12)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
            <div
              class="item-lista largo"
              data-aos="zoom-in"
              data-aos-duration="2600"
            >
              <div class="top">
                <img src="../../assets/pawprint.png" alt="" />
                <h5>Seguro</h5>
                <h4>PET</h4>
              </div>
              <div class="content">
                <p>
                  Seu animal de estimação sempre vai precisar de cuidados. O
                  seguro pet garante a saúde e o bem estar do seu animalzinho,
                  oferecendo coberturas que vão desde consultas veterinárias,
                  cirurgias e internações, até banhos no pet shop.
                </p>
                <el-button
                  style="margin-top: 12px"
                  type="primary"
                  round
                  @click="go(13)"
                >
                  FAZER COTAÇÃO</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 simula">
          <div class="simulacao">
            <div class="box box-global box-new-card">
              <p class="pt-20 text-blue-000 body-3 text-center view-desktop">
                SIMULE AGORA
              </p>
              <span>Escolha um seguro para você 100% online.</span>
            </div>
            <div class="box box-global box-new-card text-left">
              <div class="row">
                <div class="col-md-6">
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
                </div>
                <div class="col-md-6">
                  <span>CEP</span>
                  <el-input v-model="cep"></el-input>
                  <span>Tipo de Seguro</span>
                  <el-select
                    v-model="tipo"
                    clearable
                    placeholder="Tipo de Seguro"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <span>Valor do seguro (R$)</span>
                  <el-select
                    v-model="valor"
                    clearable
                    placeholder="valor do seguro"
                  >
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
                      style="margin-top: 30px"
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
                      style="margin-top: 30px"
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
      </div>
    </div>
    <div class="container logo">
      <div class="row">
        <div class="col-md-6">
          <h2
            style="padding: 7vw 0vw;
    text-align: right;
    font-size: 50px;
}"
          >
            SÃO MAIS DE
            <b style="color: #409eff"> 44 EMPRESAS PARCEIRAS</b>
          </h2>
        </div>
        <div class="col-md-6 text-center">
          <img
            style="width: 100%; margin-top: 40px"
            src="../../assets/parceiros.png"
          />
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
            width="100% "
            height="500px"
            src="https://www.youtube.com/embed/HiJW1YZjhtk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; 
            play; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            <b> Quer contratar algum dos nossos seguros agora? </b> <br />
            Acesse a Loja de Seguros e escolha um seguro para você 100% online..
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
  padding-left: 4vw;
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
.item-lista:hover {
  box-shadow: 2px 1px 10px 0 rgb(15 15 16 / 62%);
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
</style>
