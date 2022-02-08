<template>
  <Header></Header>
  <div class="zap" @click="zap()">
    <img src="../../assets/whatsapp.png" />
  </div>
  <div class="login" v-if="login">
    <div class="login-form text-left" v-loading="load">
      <div class="logo text-center">
        <img src="../../assets/images/logo-vg.png" alt="" />
      </div>
      <div class="form-group email">
        <label for="exampleInputEmail1"
          ><i
            style="margin-right: 5px; font-size: 22px"
            class="el-icon-user-solid"
          ></i
          >Endereço de E-mail</label
        >
        <input type="email" class="form-control" v-model="emailLogin" />
      </div>
      <div class="form-group password">
        <label for="exampleInputPassword1"
          ><i style="margin-right: 5px; font-size: 20px" class="fas fa-lock"></i
          >Senha</label
        >
        <input type="password" class="form-control" v-model="senhaLogin" />
      </div>
      <button
        type="submit"
        class="btn btn-primary entrar"
        @click.prevent="userLogin()"
      >
        ENTRAR
      </button>
    </div>
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
              <b> Ative seu plano </b> <br />
              e descomplique a sua vida.
            </h2>
            <el-button
              style="margin-top: 12px; float: right"
              type="primary"
              round
              @click="go('top')"
            >
              Ativar agora</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container recarga">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Ativação</h1>
          <h3>
            Siga os passos a seguir para realizar a ativação do seu chip Contel!
          </h3>
        </div>
        <div class="col-md-12 simula">
          <form @submit.prevent="sendMail()">
            <div class="row">
              <div class="col-12 col-md-10 offset-md-1">
                <div
                  class="card bg-light"
                  style="margin-bottom: 60px !important"
                >
                  <div
                    class="card-body p-4 text-left"
                    style="margin-top: -60px !important"
                  >
                    <div class="row g-0">
                      <div class="form-group col-12">
                        <div class="row">
                          <div class="col-md-5">
                            <span class="text-primary my-3 font-weight-bold">
                              Nickname</span
                            >
                            <br />
                            <el-select
                              v-model="dadosForm.nickname"
                              clearable
                              placeholder="Escolha"
                              required
                            >
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </div>
                          <div class="col-md-6 nickname">
                            <br />
                            <input
                              required
                              v-if="dadosForm.nickname == '0'"
                              type="text"
                              class="form-control"
                              id="complementoe"
                              name="complemento"
                              placeholder="Digite seu nickname"
                              v-model="dadosForm.nicknameSelected"
                            />
                            <input
                              required
                              v-if="dadosForm.nickname == '1'"
                              type="text"
                              class="form-control"
                              id="complementoe"
                              name="complemento"
                              placeholder="Digite o nickname do Patrocinador"
                              v-model="dadosForm.nicknameSelected"
                            />
                            <a
                              v-if="
                                dadosForm.nickname == '1' ||
                                dadosForm.nickname == '0'
                              "
                              href="#"
                              @click.prevent="login = true"
                            >
                              Inserir dados com minha conta VG</a
                            >
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <span class="text-primary my-3 font-weight-bold">
                          Seu chip
                        </span>
                      </div>
                      <div class="col-md-9">
                        <div class="form-group">
                          <input
                            maxlength="19"
                            name="iccid"
                            required
                            type="text"
                            class="form-control"
                            id="fone"
                            placeholder="ICCID do seu chip"
                            autocomplete="chrome-off"
                            v-model="dadosForm.ICCID"
                            @blur="validateChip()"
                          />

                          <input
                            type="text"
                            maxlength="2"
                            name="ddd"
                            required
                            class="form-control mt-2"
                            id="fone"
                            placeholder="DDD"
                            autocomplete="chrome-off"
                            v-model="dadosForm.DDD"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <img
                          src="../../assets/icon-ativar-chip.png"
                          class="img-fluid"
                          alt="ativar chip"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row spacesmall">
              <div class="col-12 col-md-10 offset-md-1">
                <div class="row">
                  <div class="col-12">
                    <span class="text-primary my-3 font-weight-bold"
                      >Dados do titular da linha</span
                    >
                  </div>

                  <div class="form-group col-12 col-md-7 py-1">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="nome"
                      name="nome"
                      placeholder="Nome completo / Razão social"
                      v-model="dadosForm.name"
                    />
                  </div>

                  <div class="form-group col-12 col-md-5 py-1">
                    <input
                      required
                      name="documento"
                      type="text"
                      @blur="validateDocument"
                      maxlength="14"
                      class="form-control"
                      id="foneOuEmail"
                      placeholder="CPF / CNPJ"
                      v-model="dadosForm.documento"
                    />
                  </div>

                  <div class="form-group col-12 col-md-3 py-1">
                    <input
                      type="text"
                      name="nascimento"
                      class="form-control"
                      id="data"
                      required
                      placeholder="Data de nascimento"
                      v-model="dadosForm.nascimento"
                      v-maska="'##/##/####'"
                    />
                  </div>

                  <div class="form-group col-12 col-md-5 py-1">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="foneOuEmail"
                      placeholder="E-mail"
                      v-model="dadosForm.email"
                      required
                    />
                  </div>
                  <div class="form-group col-12 col-md-4 py-1">
                    <input
                      type="text"
                      name="telefone"
                      required
                      maxlength="15"
                      onkeydown="javascript: fMasc( this, mTel );"
                      class="form-control"
                      id="nome"
                      placeholder="Telefone"
                      v-model="dadosForm.telefone"
                    />
                  </div>

                  <div class="col-12">
                    <span class="text-primary my-3 font-weight-bold">
                      Endereço
                    </span>
                  </div>

                  <div class="form-group col-12 col-md-3 py-1">
                    <input
                      required
                      type="text"
                      maxlength="9"
                      name="cep"
                      onblur="pesquisacep(this.value);"
                      onkeydown="javascript: fMasc( this, mCEP );"
                      class="form-control"
                      id="cep"
                      placeholder="CEP"
                      v-model="dadosForm.cep"
                    />
                  </div>

                  <div class="form-group col-12 col-md-2 py-1">
                    <input
                      required
                      type="text"
                      maxlength="2"
                      class="form-control"
                      name="uf"
                      id="uf"
                      placeholder="UF"
                      v-model="dadosForm.UF"
                    />
                  </div>

                  <div class="form-group col-12 col-md-4 py-1">
                    <input
                      required
                      type="text"
                      class="form-control"
                      name="cidade"
                      id="cidade"
                      placeholder="Cidade"
                      v-model="dadosForm.cidade"
                    />
                  </div>

                  <div class="form-group col-12 col-md-3 py-1">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="bairro"
                      name="bairro"
                      placeholder="Bairro"
                      v-model="dadosForm.bairro"
                    />
                  </div>

                  <div class="form-group col-12 col-md-7 py-1">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="endereco"
                      name="endereco"
                      placeholder="Endereço"
                      v-model="dadosForm.logradouro"
                    />
                  </div>

                  <div class="form-group col-12 col-md-2 py-1">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="numeo"
                      name="numero"
                      placeholder="Nº"
                      v-model="dadosForm.numero"
                    />
                  </div>

                  <div class="form-group col-12 col-md-3 py-1">
                    <input
                      type="text"
                      class="form-control"
                      id="complementoe"
                      name="complemento"
                      placeholder="Complemento"
                      v-model="dadosForm.complemento"
                    />
                  </div>

                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary">
                      Confirmar dados <i class="icon-next"></i>
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </form>
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
import Auth from "../../services/Auth";
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
      options: [
        {
          value: "0",
          label: "Faço parte da Vg Company",
        },
        {
          value: "1",
          label: "Somente ativação de Chip",
        },
        {
          value: "2",
          label: "Não possui NICKNAME indicador",
        },
      ],
      dados: false,
      login: false,
      load: false,
      emailLogin: "",
      senhaLogin: "",
      ICCID: "",
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
      validPass: false,
      validEmail: false,
      dadosForm: {
        nicknameSelected: "",
        nickname: "",
        ICCID: "",
        DDD: "",
        name: "",
        documento: "",
        nascimento: "",
        email: "",
        telefone: "",
        cep: "",
        UF: "",
        cidade: "",
        bairro: "",
        logradouro: "",
        numero: "",
        complemento: "",
      },
    };
  },
  methods: {
    dateFormat(data) {
      return data.split("-").reverse().join("/");
    },
    userLogin() {
      const data = {
        EMAIL: this.emailLogin,
        PASSWORD: this.senhaLogin,
      };

      if (this.emailLogin === "") {
        this.$message({
          showClose: true,
          type: "error",
          message: "Email  inválido",
          offset: 0,
        });
      } else {
        this.validEmail = true;
      }
      if (this.senhaLogin === "") {
        this.$message({
          showClose: true,
          type: "error",
          message: "Senha  inválida",
          offset: 60,
        });
      } else {
        this.validPass = true;
      }

      if (this.validPass === true && this.validEmail === true) {
        this.load = true;
        Auth.login(data)
          .then((r) => {
            this.dados = r.data;
            this.dadosForm.name = r.data.User.NAME;
            this.dadosForm.documento = r.data.User.DOCUMENT;
            this.dadosForm.nascimento = this.dateFormat(
              r.data.User.DT_BIRTHDAY
            );
            this.dadosForm.email = r.data.User.EMAIL;
            this.dadosForm.telefone = r.data.User.PHONE;
            this.dadosForm.cep = r.data.User.ZIP_CODE;
            this.dadosForm.UF = r.data.User.STATE;
            this.dadosForm.cidade = r.data.User.CITY;
            this.dadosForm.bairro = r.data.User.NEIGHBORHOOD;
            this.dadosForm.logradouro = r.data.User.ADDRESS;
            this.dadosForm.numero = r.data.User.NUMBER;
            this.dadosForm.complemento = r.data.User.COMPLEMENT;
            this.$notify.success({
              title: "Sucesso",
              message: "Dados Coletados",
              offset: 120,
              duration: 3000,
            });
          })
          .catch((e) => {
            console.log("erro:", e);
            this.$message({
              showClose: true,
              type: "error",
              message: "Email ou senha inválido",
              offset: 0,
            });
          })
          .finally(() => {
            this.load = false;
            this.login = false;
          });
      }
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
      window.scrollTo(100, 600);
    },
    validaCpfCnpj(val) {
      if (val.length == 11) {
        var cpf = val.trim();
        // cpf = cpf.replace(/\./g, "");
        // cpf = cpf.replace("-", "");
        // cpf = cpf.split("");
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        for (var i = 1; cpf.length > i; i++) {
          if (cpf[i - 1] != cpf[i]) {
            aux = true;
          }
        }
        if (aux == false) {
          return false;
        }
        for (var i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
          v1 += cpf[i] * p;
        }
        v1 = (v1 * 10) % 11;
        if (v1 == 10) {
          v1 = 0;
        }
        if (v1 != cpf[9]) {
          return false;
        }
        for (var i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
          v2 += cpf[i] * p;
        }
        v2 = (v2 * 10) % 11;
        if (v2 == 10) {
          v2 = 0;
        }
        if (v2 != cpf[10]) {
          return false;
        } else {
          return true;
        }
      } else if (val.length == 14) {
        var cnpj = val.trim();
        cnpj = cnpj.replace(/\./g, "");
        cnpj = cnpj.replace("-", "");
        cnpj = cnpj.replace("/", "");
        cnpj = cnpj.split("");
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        for (var i = 1; cnpj.length > i; i++) {
          if (cnpj[i - 1] != cnpj[i]) {
            aux = true;
          }
        }
        if (aux == false) {
          return false;
        }
        for (var i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
          if (p1 >= 2) {
            v1 += cnpj[i] * p1;
          } else {
            v1 += cnpj[i] * p2;
          }
        }
        v1 = v1 % 11;
        if (v1 < 2) {
          v1 = 0;
        } else {
          v1 = 11 - v1;
        }
        if (v1 != cnpj[12]) {
          return false;
        }
        for (var i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
          if (p1 >= 2) {
            v2 += cnpj[i] * p1;
          } else {
            v2 += cnpj[i] * p2;
          }
        }
        v2 = v2 % 11;
        if (v2 < 2) {
          v2 = 0;
        } else {
          v2 = 11 - v2;
        }
        if (v2 != cnpj[13]) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
    validateChip() {
      Auth.validateChip(this.dadosForm.ICCID)
        .then((r) => {})
        .catch((e) => {
          this.dadosForm.ICCID = "";
          this.$message({
            showClose: true,
            type: "error",
            message: "Chip Inválido",
            offset: 0,
          });
        })
        .finally(() => {
        });
    },
    validateDocument() {
      let valido = this.validaCpfCnpj(this.dadosForm.documento);
      if (valido) {
        console.log(`ok`);
      } else {
        this.$notify.error({
          title: "Algo deu errado",
          message: "Revise o seu documento!",
          duration: 2000,
          customClass: "custom-alert",
          offset: 80,
        });
        this.dadosForm.documento = "";
      }
    },
    sendMail() {
      if (this.dadosForm.nickname.length > 0) {
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

        let html = "<h2>Dados para solicitação ativação de CHIP:</h2><br>";
        html += "<p><b>ICCID:</b> " + this.dadosForm.ICCID + "</p><br>";
        html += "<p><b>DDD:</b> " + this.dadosForm.DDD + "</p><br>";
        html += "<p><b>Nome:</b> " + this.dadosForm.name + "</p><br>";
        html +=
          "<p><b>Data de Nascimento:</b>  " +
          this.dadosForm.nascimento +
          "</p><br>";
        html += "<p><b>CPF:</b>  " + this.dadosForm.documento + "</p><br>";
        html += "<p><b>Email:</b>  " + this.dadosForm.email + "</p><br>";
        html += "<p><b>Telefone:</b> " + this.dadosForm.telefone + " </p><br>";
        html += "<p><b>Cep:</b> " + this.dadosForm.cep + " </p><br>";
        html += "<p><b>Estado:</b> " + this.dadosForm.UF + " </p><br>";
        html += "<p><b>Cidade:</b> " + this.dadosForm.cidade + " </p><br>";
        html += "<p><b>Bairro:</b> " + this.dadosForm.bairro + " </p><br>";
        html +=
          "<p><b>Logradouro:</b> " + this.dadosForm.logradouro + " </p><br>";
        html += "<p><b>Numero:</b> " + this.dadosForm.numero + " </p><br>";
        html +=
          "<p><b>Complemento:</b> " + this.dadosForm.complemento + " </p><br>";

        if (this.dadosForm.nickname == "0") {
          html +=
            "<p><b>Nickname do usuário:</b> " +
            this.dadosForm.nicknameSelected +
            " </p><br>";
        }
        if (this.dadosForm.nickname == "1") {
          html +=
            "<p><b>Nickname do Patrocinador:</b> " +
            this.dadosForm.nicknameSelected +
            " </p><br>";
        }
        if (this.dadosForm.nickname == "2") {
          html += "<p><b>Nickname do Patrocinador:</b> VGPOWER</p><br>";
        }

        axios
          .post(url + "/api/telefonia/send-email", {
            TITLE: "Solicitação de Ativação de CHIP",
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
      } else {
        this.$notify.error({
          title: "Algo deu errado",
          message: "Revise o nickname!",
          duration: 2000,
          customClass: "custom-alert",
          offset: 80,
        });
      }
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
    this.go('top');
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

.card p {
  text-align: justify;
  color: #5a5a5a;
  font-weight: bold;
  font-size: 15px;
  min-height: 245px;
  margin-bottom: 0px;
}

.card img {
  width: 100%;
  margin-bottom: 0;
  margin-left: -30px;
}
</style>


<style scoped>
</style>


<style>
.text-brand-blue {
  color: #28326e;
}

.card {
  border: none !important;
  margin-top: 8.6rem;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.portabilidade h1,
.recarga h1 {
  margin-top: 50px;
  color: #144ace;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}
.recarga h3 {
  font-size: 1rem;
}
.btn-primary {
  background-color: #00d66a;
  border-color: #00d66a;
  color: #144ace;
}
.btn {
  font-size: 0.85rem !important;
  border-radius: 1.5rem !important;
}
.login {
  position: fixed;
  background: rgb(0 0 0 / 85%);
  margin: auto;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.login-form {
  width: 500px;
  background: white;
  padding: 2vw;
  position: absolute;
  inset: 0 0 0 0;
  height: 420px;
  margin: auto;
  border-radius: 20px;
}
.el-select {
  width: 100% !important;
}
.nickname input {
  text-transform: uppercase;
}
</style>
