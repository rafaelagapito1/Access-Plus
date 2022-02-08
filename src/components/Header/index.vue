<template>
  <div class="header">
    <div class="sub">
      <div class="container">
        <div class="left">
          <ul>
            <li
              style="
                color: black;
                border-right: 1px solid #bdbdbd;
                padding-right: 15px;
              "
              @click="requestTokenOffice()"
            >
              Office.VG
            </li>

            <li
              @click="requestTokenSchool()"
              style="
                color: #0179ff;
                border-right: 1px solid #bdbdbd;
                padding-right: 15px;
              "
            >
              School.VG
            </li>
            <li
              @click="requestTokenMarket()"
              style="
                color: #4f089e;
                border-right: 1px solid #bdbdbd;
                padding-right: 15px;
              "
            >
              Market.VG
            </li>
            <!-- <li
              id="telefonia"
              style="color: #0179ff"
              @click.prevent="goTO2('/https://telefonia.vg.company/')"
            >
              Telefonia.VG
            </li> -->
          </ul>
        </div>
        <div class="right text-right suporte-desk">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            style="
              margin-top: -4px;
              font-size: 14px;
              height: 35px;
              background-color: #f3f3f3;
              background-image: -webkit-gradient(
                linear,
                50% 0,
                50% 100%,
                color-stop(0, rgba(0, 0, 0, 0)),
                color-stop(50%, rgba(0, 0, 0, 0)),
                color-stop(100%, rgba(0, 0, 0, 0.07))
              );
              background-image: -webkit-linear-gradient(
                top,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.07) 100%
              );
              background-image: -moz-linear-gradient(
                top,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.07) 100%
              );
              background-image: linear-gradient(
                top,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.07) 100%
              );
              -webkit-transition: background-color 150ms ease-in-out;
              -moz-transition: background-color 150ms ease-in-out;
              border-color: #e8e8e8;
            "
          >
            Suporte
          </button>
        </div>
      </div>
    </div>
    <div class="head">
      <div class="showSearch" v-if="showSearchData">
        <input
          type="text"
          name=""
          id=""
          v-model="SEARCH_WORDS"
          @keyup.enter="
            goTO('/search/' + SEARCH_WORDS);
            showSearchData = false;
          "
          placeholder="BUSCAR"
        />
        <button
          type="button"
          class="send"
          @click="
            goTO('/search/' + SEARCH_WORDS);
            showSearchData = false;
          "
        >
          Pesquisar
        </button>
        <button type="button" @click="showSearchData = false" class="cancel">
          Fechar
        </button>
      </div>
      <div class="container">
        <div class="one" style="cursor: pointer" @click="menu = true">
          <i class="fas fa-bars"></i>
          <span style="margin-left: 10px">MENU</span>
        </div>
        <div class="two">
          <img
            @click.prevent="goTO('/')"
            style="cursor: pointer"
            src="../../assets/images/logo.png"
            alt=""
          />
        </div>
        <div class="tree search-desk">
          <i class="fas fa-search" @click="goTO('/search/' + SEARCH_WORDS)"></i>
          <input
            type="text"
            name=""
            id=""
            v-model="SEARCH_WORDS"
            @keyup.enter="goTO('/search/' + SEARCH_WORDS)"
            placeholder="BUSCAR"
          />
        </div>
        <div class="tree search-mobile">
          <i class="fas fa-search" @click="showSearch()"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="left-menu" v-if="menu">
    <i class="fas fa-times close" @click="menu = false"></i>
    <ul>
      <li @click.prevent="goTO('/')">INÍCIO | PORTAL DE NOTÍCIAS</li>
      <li @click.prevent="goTO('/sobre-a-vg-company')">SOBRE A VG</li>
      <li @click.prevent="goTO('/')">PROGRAMA DE AFILIADOS</li>
       <li @click.prevent="goTO('/telefonia')">VG TELEFONIA</li>
      <li @click.prevent="goTO('/emprestimos')">VG EMPRÉSTIMOS</li>
      <li @click.prevent="goTO('/consorcios')">VG CONSÓRCIOS</li>
      <li @click.prevent="goTO('/seguros')">VG SEGUROS</li>
      <!-- <li
        @click="menu = false"
        class="suporte-mobile"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        SUPORTE
      </li> -->
      <!-- <li
        v-for="(item, index) in categories"
        :key="index"
        style="text-transform: uppercase; margin-left: 10px"
        @click.prevent="
          goTO('/search/default/' + item.ID);
          menu = false;
        "
      >
        {{ item.DESCRIPTION }}
        <i
          class="fas fa-chevron-right"
          style="float: right; color: #010d1f"
        ></i>
      </li> -->
      <!-- <li @click.prevent="goTO('/')">SOBRE NÓS</li>
      <li @click.prevent="goTO('/')">FAQ</li> -->
      <!-- <li @click.prevent="goTO('/')">CONTATO</li> -->
    </ul>
  </div>
  <!-- Modal -->

  <div
    ref="exampleModal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Suporte Online</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="mainForm" @submit.prevent="sendSupport(this)">
            <div class="form-group">
              <label for="exampleInputEmail1">Nickname para Atendimento</label>
              <input
                v-model="nickname"
                type="text"
                required
                class="form-control"
                id="nickname"
                aria-describedby="emailHelp"
                style="text-transform: uppercase"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Motivo do Suporte</label>
              <select
                required
                class="form-control"
                id="motivo"
                v-model="dataReason"
              >
                <option data-v-0cd124ff="" value="Alteração de Dados">
                  Alteração de Dados
                </option>
                <option data-v-0cd124ff="" value="Ativação">Ativação</option>
                <option data-v-0cd124ff="" value="Saque atrasado">
                  Saque atrasado
                </option>
                <option data-v-0cd124ff="" value="Dúvidas da Plataforma">
                  Dúvidas da Plataforma
                </option>
                <option data-v-0cd124ff="" value="VG School">VG School</option>
                <option data-v-0cd124ff="" value="Rede">Rede</option>
                <option data-v-0cd124ff="" value="Sugestões">Sugestões</option>
                <option data-v-0cd124ff="" value="Reclamações">
                  Reclamações
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"
                >Descreva abaixo sua solicitação</label
              >
              <textarea
                v-model="mensage"
                class="form-control"
                required
                id="descricao"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group text-right">
              <button type="submit" class="btn btn-success" style="">
                Enviar Suporte
              </button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import axios from "axios";
import Routes from "../../services/Routes";

export default {
  methods: {

    showSearch() {
      this.showSearchData = true;
    },
    sendSupport(dados) {
      axios
        .post(this.defaultW + "/api/support-form-contact", {
          nickname: this.nickname,
          reason: this.dataReason,
          data: this.mensage,
        })
        .then(function (response) {
          let timerInterval3;
          Swal.fire({
            title: "Obrigado!",
            text: "Em breve entraremos em contato para solucionar seu problema!",
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
            text: "Revise o seu Nickname",
            icon: "error",
            confirmButtonText: "Tentar novamente",
          });
        });
    },
    goTO(url) {
      window.scrollTo(0, 0);
      this.$router.push(url);
      console.log("ok");
    },
    goTO2(url) {
      window.scrollTo(0, 0);
      window.open("https://telefonia.vg.company/", "_blank").focus();
    },
    requestTokenMarket() {
      fetch(this.defaultW + "/api/access-token/60")
        .then((r) => r.json())
        .then((r) => {
          if (this.defaultW === "https://homologa-ws.vg.company") {
            window.location.replace(
              "https://store-beta.vg.company/" + r.DATA.token
            );
          } else {
            window.location.replace(
              "https://market.vg.company/" + r.DATA.token
            );
          }
        });
    },
    requestTokenOffice() {
      fetch(this.defaultW + "/api/access-token/1")
        .then((r) => r.json())
        .then((r) => {
          if (this.defaultW === "https://homologa-ws.vg.company") {
            window.location.replace(
              "https://homologa.vg.company/login/" + r.DATA.token
            );
          } else {
            window.location.replace(
              "https://oficinavirtual.vg.company/login/" + r.DATA.token
            );
          }
        });
    },

    requestTokenSchool() {
      fetch(this.defaultW + "/api/access-token/1")
        .then((r) => r.json())
        .then((r) => {
          if (this.defaultW === "https://homologa-ws.vg.company") {
            window.location.replace(
              "https://homologa-school2.vg.company"
            );
          } else {
            window.location.replace(
              "https://oficinavirtual.vg.company/login/#school"
            );
          }
        });
    },
    getCategories() {
      Routes.getAllCategoriesNews()
        .then((r) => {
          this.categories = r.data.DATA;
        })
        .catch((e) => {})
        .finally(() => {});
    },
    setLoaded() {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-202239796-2");
    },
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-202239796-2";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    
    this.getCategories();
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
    this.defaultW = url.substr(0, url.length - 4); // <= seta o resultado no atributo default
  },
  data() {
    return {
      categories: "",
      showSearchData: false,
      menu: false,
      defaultW: "",
      nickname: "",
      dataReason: "",
      SEARCH_WORDS: "",
      mensage: "",
    };
  },
};
</script>



<style >
.left-menu {
  z-index: 99 !important;
}
</style>
