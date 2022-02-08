<template>
  <div id="busca">
    <Header></Header>
    <!-- .block-banner -->
       <!-- .block-banner -->
    <div class="block block-banner border_line">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="results">
              <div class="ResultLeft" v-if="$route.params.searchwords !== ''">
                {{ resultProducts.length }} resultados para
                <span
                  class="change_color"
                  v-if="$route.params.searchwords !== 'default'"
                >
                  <el-tag closable @close="handleClose()">{{
                    $route.params.searchwords
                  }}</el-tag>
                </span>
              </div>
              <div class="ResultLeft" v-else>
                {{ resultProducts.length }} resultados
              </div>
            </div>
          </div>
          <div class="col-md-6 one d-inline-flex">
            <div class="ResultLeft"></div>
            <div
              class="ResultRight d-flex flex-row-reverse"
              style="margin-top: 7px"
            >
              <div class="view-options__control style__button" hidden>
                <label for="">Ordernar Por:</label>
                <div>
                  <el-select
                    v-model="orderSelected"
                    clearable
                    placeholder="Select"
                    @change="onChangeOrder($event)"
                    default-first-option="true"
                  >
                    <el-option label="Mais Recentes" value="0"> </el-option>
                    <el-option label="Mais Antigos" value="1"> </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Bar -->
    <div class="block block-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 two" v-loading="load">
            <div
              class="no-content text-center"
              style="width: 100%; padding: 5vw 0"
              v-if="noData"
            >
              <i
                style="font-size: 70px; color: red; margin-bottom: 10px"
                class="far fa-times-circle"
              ></i>
              <h2>NENHUM RESULTADO ENCONTRADO!</h2>
            </div>
            <ResultProducts :resultProducts="resultProducts"></ResultProducts>
          </div>
        </div>
      </div>
    </div>
    <!-- .block-banner / end -->
    <Footer></Footer>
  </div>
</template>

<style scoped>
.margin__top {
  margin-top: 24px;
}
.breadcrumb-item + .breadcrumb-item:before {
  display: block;
}

.breadcrumb-item {
  position: relative;
  padding-right: 11px;
}

.breadcrumb {
  background: transparent;
  padding: 0;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 0;
  margin: 21px 0px 15px 0px;
}

.breadcrumb-item.active {
  color: #4dcbf7;
}
</style>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import Header from "../../components/Header/index.vue";
import ResultProducts from "./components/ResultProducts.vue";
import Footer from "../../components/Footer/index.vue";
import Routes from "../../services/Routes";
export default {
  name: "ResearchCatalog",
  components: {
    Header,
    ResultProducts,
    Footer,
  },
  data() {
    return {
      defaultProduct: [],
      SubCategorievisual: [],
      searchwords: "",
      value: "",
      resultProducts: [],
      dataSearch: "",
      load: true,
      load2: false,
      Categorie: "",
      SubCategorie: [],
      CategorieStatus: false,
      CategorieData: "",
      SubCategorieData: "",
      showFilter: false,
      noData: false,
      orderSelected: 1,
      colors: [],
      colorSelected: "",
      sizes: [],
      sizeSelected: "",
      productsBkp: [],
    };
  },
  watch: {
    "$route.params.searchwords": function () {
      this.getResultSearch();
    },
    "$route.params.categorie": function () {
      this.getResultSearch();
    },
  },
  methods: {
    onChangeOrder(event) {
      switch (this.orderSelected) {
        case "0" /*Padrão*/:
          this.resultProducts = JSON.parse(JSON.stringify(this.defaultProduct));
          break;
        case "1" /*A-Z*/:
          this.resultProducts = this.orderName(this.resultProducts);
          break;
        case "2" /*Z-A*/:
          this.resultProducts = this.orderName(this.resultProducts, true);
          break;
        case "3" /*Maior Valor*/:
          this.resultProducts = this.orderPrice(this.resultProducts);
          break;
        case "4" /*Menor Value*/:
          this.resultProducts = this.orderPrice(this.resultProducts, true);
          break;
        default:
          /*Padrao A-Z*/
          this.resultProducts = JSON.parse(JSON.stringify(this.defaultProduct));
          break;
      }
    },
    orderName(array, desc = false) {
      return array.sort((a, b) => {
        if (desc) return b.PRODUCT_NAME.localeCompare(a.PRODUCT_NAME);
        else return a.PRODUCT_NAME.localeCompare(b.PRODUCT_NAME);
      });
    },
    orderPrice(array, desc = false) {
      return array.sort((a, b) => {
        let p1 = a.PRODUCT_NAME,
          p2 = b.PRODUCT_NAME;

        if (!desc) {
          p1 = b.SALE_PRICE;
          p2 = a.SALE_PRICE;
        }

        if (p1 < p2) {
          return -1;
        }
        if (p1 > p2) {
          return 1;
        }

        return 0;
      });
    },
    handleClose() {
      this.$router.push("/search/");
    },
    handleCloseSize(value) {
      this.sizeSelected = _.without(this.sizeSelected, value);
      this.changeColorOrSize();
    },
    handleCloseCategory(value, index) {
      this.SubCategorie.splice(index, 1);
      this.SubCategorievisual.splice(index, 1);
      this.getResultSearch();
    },
    clearFilter() {
      this.SubCategorie = [];
      this.Categorie = "";
      this.SubCategorievisual = [];
      this.SubCategorieData = "";
      this.getResultSearch();
    },
    onChange() {
      this.SubCategorie = [];
      this.SubCategorievisual = [];
      if (this.Categorie !== null) {
        this.CategorieStatus = true;
      } else {
        this.SubCategorieData = "";
        this.SubCategorie = [];
        this.CategorieStatus = false;
        this.SubCategorie = undefined;
      }
      this.getSubCategorie(this.Categorie);
      this.getResultSearch();
    },
    getCategorie() {
      this.load2 = true;
      Routes.getAllCategoriesNews()
        .then((r) => {
          this.CategorieData = r.data.DATA;
          this.SubCategorievisual = [];
        })
        .catch((e) => {
          // if (e.response.status == 403) {
          //   Auth.logout();
          // }
        })
        .finally(() => {
          this.load2 = false;
          //muda exibição da categoria que vem da api pra exibir o nome em vez do ID no select.
          if (this.$route.params.categorie.length > 0) {
            var i;
            for (i = 0; i < this.CategorieData.length; i++) {
              if (this.CategorieData[i].ID == this.$route.params.categorie) {
                this.Categorie = this.CategorieData[i].ID;
              }
            }
          }
        });
    },

    getResultSearch() {
      console.log("ok");
      this.load = true;

      if (this.$route.params.categorie) {
        this.dataSearch = {
          CATEGORY: `${this.$route.params.categorie}`,
        };
      } else if (this.$route.params.searchwords == "") {
        this.dataSearch = {};
      } else {
        this.dataSearch = {
          SEARCH_WORDS: `${this.$route.params.searchwords}`,
        };
      }
      Routes.getNews(this.dataSearch)
        .then((r) => {
          //necessario ter um bkp dos produtos para filtrar
          this.defaultProduct = JSON.parse(JSON.stringify(r.data.DATA));
          this.productsBkp = this.prepareData(r.data.DATA);
          this.resultProducts = this.productsBkp;
          this.load = false;
          if (this.resultProducts.length <= 0) {
            this.noData = true;
          } else {
            this.noData = false;
          }
        })
        .catch((e) => {
          this.load = false;
          console.log("erro:", e);
        });
    },
    prepareData(products) {
      /*Funcao para preparar os dados, como os dados de filtro(cor e tamanho) vem serializado, 
        eh necessario realizar o parse e adicionar no produto como um array separado*/
      var idC = 0;
      var idS = 0;

      //loop em todos os produtos vindo da API
      products.forEach((product, index) => {
        //so ira preparar as cores e tamanhos caso exista a variavel
        if (product.VARIATIONS_JSON != null) {
          let colorSize = product.VARIATIONS_JSON.replace("COR", "COLOR");
          colorSize = colorSize.replace("TAMANHO", "SIZE");
          colorSize = JSON.parse(colorSize);
          //add no produto o array com cores e tamanhos
          products[index] = {
            ...product,
            COLORS: colorSize.COLOR != undefined ? colorSize.COLOR : [],
            SIZES: colorSize.SIZE != undefined ? colorSize.SIZE : [],
          };

          //add cores para o select no filtro
          if (colorSize.COLOR != undefined) {
            colorSize.COLOR.forEach((cor) => {
              if (this.colors.find((find) => cor == find.nome) == undefined) {
                this.colors.push({ id: idC, nome: cor });
                idC++;
              }
            });
          }

          //add tamanhos para o select no filtro
          if (colorSize.SIZE != undefined) {
            colorSize.SIZE.forEach((size) => {
              if (this.sizes.find((find) => size == find.nome) == undefined) {
                this.sizes.push({ id: idS, nome: size });
                idS++;
              }
            });
          }
        } else {
          products[index] = {
            ...product,
            COLORS: [],
            SIZES: [],
          };
        }
      });

      return products;
    },
  },
  created() {
    // this.getCategorie();
    // if (this.$route.params.searchwords == "default") {
    //   this.$route.params.searchwords = "";
    //   this.dataSearch = "";
    // } else {
    //   this.dataSearch = this.$route.params.searchwords;
    // }
    // if (this.$route.params.categorie) {
    //   this.Categorie = this.$route.params.categorie;
    // }
    // if (this.$route.params.subcategorie) {
    //   this.SubCategorie = [this.$route.params.subcategorie];
    // }
    this.getResultSearch();
  },
  mounted() {
    if (this.$route.params.categorie.length > 0) {
    } else {
    }
  },
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
<style>
.BrowsingHistory {
  margin-top: 15px;
}
.bg-color {
  border: 1px solid #ededed;
  min-height: auto;
  padding: 10px 5px;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: none;
}
select.form-control.form-control-sm.adjust_button {
  background-position: right 0.5rem center;
  padding-left: 0px;
}
.style__button {
  padding: 0px 10px 0px 10px;
  border-radius: 5px;
}
select.form-control.form-control-sm.adjust_button {
  border: none;
  background-color: #dee2e6;
}
form-control:focus {
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 0%);
}
.change_color {
  color: #4dcbf7;
}
.block.block-banner.border_line {
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 5px 0;
}
.ResultLeft {
  width: 50%;
  padding: 10px 0px 5px 0px;
  font-size: 15px;
  margin-top: 0.3rem;
}
.ResultRight {
  width: 50%;
  padding: 5px 0px 5px 0px;
  font-size: 13px;
}
.CarouselSingle .splide__slide img {
  width: 100%;
  height: 175px;
  background-size: contain;
  background-position: center;
}

.block.block-banner {
  margin-bottom: 15px;
}
</style>
<style scoped>
.p_top {
  margin-top: 10px;
}
.product-card__rating-legend {
  font-size: 13px;
  line-height: 1.4;
  color: #191928;
  margin-left: 9px;
  padding-top: 1px;
}

.search__input {
  border: 1px solid #191928;
  padding: 0 17px;
  background: #fff;
  width: 1px;
  flex-grow: 1;
  font-size: 15px;
  transition: color 0.15s;
  color: inherit;
}
input.search__input {
  border: 1px solid #191928;
  padding: 0px 5px;
  background: #fff;
  width: 1px;
  flex-grow: 1;
  font-size: 15px;
  transition: color 0.15s;
  color: inherit;
  margin: 0px 13px 0px 0px;
  border-radius: 2px;
}
button.search__button.search__button--type--submit {
  border: 1px solid #6a8da5;
  border-radius: 2px;
  border-color: #6a8da5;
  background: #6a8da5;
  color: #fff;
}
button.search__button.search__button--type--submit:hover {
  border: 1px solid #191928;
  border-radius: 2px;
  border-color: #191928;
  background: #191928;
  color: #fff;
}
form.search__form {
  background-color: #fff;
}
.search__form {
  position: relative;
  height: 32px;
  display: flex;
}
.padding_left_box {
  padding: 0px 10px 15px 10px;
}
ul.no_list_style {
  list-style: none;
  padding: 0;
}
li.color_link a {
  color: #191928;
}
li.color_link a:hover {
  color: #4dcbf7;
}
</style>
<style>
.el-select {
  width: 100%;
}
.el-tag.el-tag--info {
  background-color: #0083ff !important;
  border-color: #6a8da5;
  color: #ffffff;
}

.el-select .el-select__tags .el-tag .el-icon-close {
  background-color: #ffffff !important;
  color: #0083ff !important;
}
.el-loading-mask {
  background-color: rgb(255 255 255) !important;
  z-index: 9;
}

.el-loading-mask {
  background-color: rgb(255 255 255 / 50%) !important;
}
.page-item.active .page-link {
  background: #191928;
  color: #ffffff;
}
</style>

<style scoped>
@media only screen and (max-width: 1024px) {
  .padding_left_box.p_top.d-lg-none.adjust__filter {
    padding: 9px 10px 0px 14px;
  }
  button.modal__open.filters-button {
    background-color: #fff;
    border: 1px solid #ededed;
    border-radius: 2px;
  }
  span.filters-button__title {
    padding-left: 10px;
  }
  .bg-color {
    border: none;
    min-height: auto;
    border-radius: 2px;
  }
  .p_top {
    margin-top: 10px;
  }
  .product-card__rating-legend {
    font-size: 13px;
    line-height: 1.4;
    color: #191928;
    margin-left: 9px;
    padding-top: 1px;
  }

  .search__input {
    border: 1px solid #191928;
    padding: 0 17px;
    background: #fff;
    width: 1px;
    flex-grow: 1;
    font-size: 15px;
    transition: color 0.15s;
    color: inherit;
  }
  input.search__input {
    border: 1px solid #191928;
    padding: 0px 5px;
    background: #fff;
    width: 1px;
    flex-grow: 1;
    font-size: 15px;
    transition: color 0.15s;
    color: inherit;
    margin: 0px 13px 0px 0px;
    border-radius: 5px;
  }
  button.search__button.search__button--type--submit {
    border: 1px solid #191928;
    border-radius: 5px;
  }
  form.search__form {
    background-color: #fff;
  }
  .search__form {
    position: relative;
    height: 32px;
    display: flex;
  }
  .padding_left_box {
    padding: 0px 10px 15px 10px;
  }
  ul.no_list_style {
    list-style: none;
    padding: 0;
  }
  li.color_link a {
    color: #191928;
  }
  li.color_link a:hover {
    color: #4dcbf7;
  }
}
</style>
<style scoped>
@media only screen and (max-width: 1024px) {
  ::v-deep(.modal-container) {
    display: flex;

    align-items: center;
  }

  ::v-deep(.modal-content) {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    max-width: 75%;
    margin: 0;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    overflow: scroll;
  }

  .modal__title {
    margin: 0 2rem 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .modal__content {
    flex-grow: 1;
  }

  .modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
  }

  .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
<style scoped>
.dark-mode div ::v-deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}

.modal__close {
  border: none;
  background: none;
}
.addList a {
  position: relative;
}

.addList .active:before {
  font-family: "Font Awesome 5 Free";
  content: "\f00c";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  color: green;
  position: absolute;
  background: rgb(255 255 255 / 56%);
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  left: 0;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
  padding-left: 3px;
}
.el-tag {
  background-color: #0083ff;
  border-color: #0083ff;
  height: 25px;
  padding: 0px 15px;
  line-height: 25px;
  font-size: 12px;
  color: #ffffff;
  border-style: solid;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}

.el-tag .el-tag__close {
  color: #ffffff !important;
}
.tamanhos a {
  color: #717171;
  font-weight: 500;
  font-size: 12px;
  padding-left: 5px;
}
</style>
<style>
.pagination .disable {
  display: none !important;
}
</style>