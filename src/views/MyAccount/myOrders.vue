<template>
  <Header></Header>
  <br />
  <Carousel :Carousel="Carousel"></Carousel>
  <!-- .block-banner -->
  <div class="block block-banner" id="myorder">
    <div class="container">
      <div class="myorders">
        <div  class="one" :style="'width: ' + one + '%'">
      <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
  <el-menu-item  index="1"  @click="isCollapseF();">
      <i class="el-icon-menu"></i>
      <template #title>Menu</template>
    </el-menu-item>
    <el-menu-item  @click="goTO('/myaccount');">
      <i class="el-icon-odometer" @click="goTO('/myaccount'); "></i>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item  @click="goTO('/edit-user'); ">
      <i class="el-icon-user" @click.prevent="goTO('/edit-user')"></i>
      <template #title @click.prevent="goTO('/edit-user')"
        >Editar Informações</template
      >
    </el-menu-item>
    <el-menu-item  @click="goTO('/myorders'); ">
      <i class="el-icon-shopping-cart-2" @click.prevent="goTO('/myorders')"></i>
      <template #title @click.prevent="goTO('/myorders')"
        >Meus Pedidos</template
      >
    </el-menu-item>
  </el-menu>
        </div>
        <div class="two" :style="'width: ' + two + '%'">
            <div class="avaliar-body" v-if="Evaluation">
            <div class="Avaliar row" style="padding: 0vw 3vw">
              <div
                class="fechar"
                style="
                  width: 50px;
                  position: absolute;
                  right: 0;
                  z-index: 1031;
                  margin-top: 15px;
                "
              >
                <button
                  @click="
                    Evaluation = false;
                    clearRating();
                  "
                  style="background: none; border: none"
                >
                  <i class="far fa-times-circle" style="font-size: 25px"></i>
                </button>
              </div>
              <div class="col-md-12">
                <p style="font-size: 15px; margin-top: 5px; margin-bottom: 5px">
                  Avaliar: <br />
                  {{ ProductAvaliable.VS_PRODUCT }}
                </p>
              </div>
              <div class="col-md-6">
                <label for="">Comentário</label><br />
                <textarea
                  placeholder="Por Favor, Conte sua experiência com nosso produto"
                  v-model="comment"
                  style="width: 100%; height: 80px"
                >
                </textarea>
              </div>
              <div class="col-md-6">
                <p style="margin-bottom: 5px">Avalie o produto:</p>
                <star-rating
                  :rounded-corners="true"
                  :border-width="4"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  inactive-color="#eaeaea"
                  active-color="#ffd333"
                  :show-rating="false"
                  v-bind:star-size="30"
                  text-class="custom-text"
                  @update:rating="setRating"
                >
                </star-rating>
                <button
                  v-if="rating != null"
                  @click="CofirmRating()"
                  style="
                    background: #0078f5;
                    border: none;
                    padding: 2px 25px;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                    width: 100%;
                    margin-top: 15px;
                  "
                >
                  Avaliar Produtos
                </button>
                <button
                  v-else
                  style="
                    background: rgb(121 121 121);
                    border: none;
                    padding: 2px 25px;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                    width: 100%;
                    margin-top: 15px;
                  "
                  disabled
                >
                  Avaliar Produtos
                </button>
              </div>
            </div>
            </div>
          <h3 style="color: #353535" v-if="onTable">Meus Pedidos</h3>
          <p v-if="onTable">
            Aqui você encontra todas as informações do seu pedido.
          </p>
          <div class="contenttwo">
            <!-- Content My Orders -->
            <div
              v-if="onTable"
              class="table-responsive myorder"
              style="border-radius: 10px 10px 0 0; min-height: 300px"
              v-loading="loadTable"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="border-0">
                      <div class="text-uppercase"></div>
                    </th>
                    <th scope="col" class="border-0">
                      <div class="text-uppercase">ID</div>
                    </th>
                    <th scope="col" class="border-0">
                      <div class="text-uppercase">Status</div>
                    </th>
                    <th scope="col" class="border-0">
                      <div class="text-uppercase">Data de Registro</div>
                    </th>
                    <th scope="col" class="border-0">
                      <div class="text-uppercase"></div>
                    </th>
                  </tr>
                </thead>
                <tbody v-if="orders">
                  <tr
                    v-for="(product, index) in orders"
                    :key="index"
                    style="    border-bottom: 1px solid rgb(224 224 224);" 
                  >
                  
                    <th v-if="product.STATUS_ORDER_ID == 1"
                      scope="row"
                      class="border-0"
                      style="padding-left: 20px; padding-right: 0; border-left: 5px solid orange!important;"
                    >
                      <a href="#">
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="product.STATUS_ORDER_ID == 1"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="product.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="product.STATUS_ORDER_ID == 3"
                        ></i>
                      </a>
                    </th>
                      <th v-if="product.STATUS_ORDER_ID == 2"
                      scope="row"
                      class="border-0"
                      style="padding-left: 20px; padding-right: 0; border-left: 5px solid #3c9c00!important;"
                    >
                      <a href="#">
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="product.STATUS_ORDER_ID == 1"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="product.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="product.STATUS_ORDER_ID == 3"
                        ></i>
                      </a>
                    </th>
                      <th v-if="product.STATUS_ORDER_ID == 3"
                      scope="row"
                      class="border-0"
                      style="padding-left: 20px; padding-right: 0; border-left: 5px solid #ad0000!important;"
                    >
                      <a href="#">
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="product.STATUS_ORDER_ID == 1"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="product.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="product.STATUS_ORDER_ID == 3"
                        ></i>
                      </a>
                    </th>
                     <th v-if="product.STATUS_ORDER_ID == 7"
                      scope="row"
                      class="border-0"
                      style="padding-left: 20px; padding-right: 0; border-left: 5px solid orange!important;"
                    >
                      <a href="#">
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="product.STATUS_ORDER_ID == 7"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="product.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="product.STATUS_ORDER_ID == 3"
                        ></i>
                      </a>
                    </th>
                         <th v-if="product.STATUS_ORDER_ID == 8"
                      scope="row"
                      class="border-0"
                      style="padding-left: 20px; padding-right: 0; border-left: 5px solid #ad0000!important;"
                    >
                      <a href="#">
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="product.STATUS_ORDER_ID == 7"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="product.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="product.STATUS_ORDER_ID == 8"
                        ></i>
                      </a>
                    </th>
                    <th scope="row" class="border-0">
                      <a
                        href="#"
                        @click.prevent="
                          showModal = true;
                          onTable = false;
                          redirectToHome();
                          getDetails(product);
                        "
                      >
                        {{ product.VS_ORDER_ID }}</a
                      >
                    </th>
                    <th scope="row" class="border-0">
                      {{ getStatusMessage(product.STATUS_ORDER_ID, product.STATUS) }}
                    </th>
                    <th scope="row" class="border-0">
                      {{ dateFormat(product.DT_REGISTER) }}
                    </th>
                    <th scope="row" class="border-0">
                      <a
                        href="#"
                        @click.prevent="
                          showModal = true;
                          redirectToHome();
                          onTable = false;
                          getDetails(product);
                        "
                      >
                        <i class="fas fa-search-plus"></i> DETALHES
                      </a>
                    </th>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Nenhum pedido encontrado</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              v-if="showModal"
              class="modal-container myorder"
              content-class="modal-content"
              @closed="closedModal"
            >
          

              <div class="modal__content" v-loading="loadDetail">
                <div class="header" style="position: relative;">
                  <h4>
                    Pedido
                    <b
                      >#{{ SelectedOrder.VS_ORDER_ID }}
                      <p style="font-size: 15px">
                        {{ getStatusMessage(SelectedOrder.STATUS_ORDER_ID) }}
                        <i
                          class="fas fa-circle"
                          style="color: orange"
                          v-if="SelectedOrder.STATUS_ORDER_ID == 1 || SelectedOrder.STATUS_ORDER_ID == 7"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #3c9c00"
                          v-if="SelectedOrder.STATUS_ORDER_ID == 2"
                        ></i>
                        <i
                          class="fas fa-circle"
                          style="color: #ad0000"
                          v-if="SelectedOrder.STATUS_ORDER_ID == 3 || SelectedOrder.STATUS_ORDER_ID == 8"
                        ></i>
                      </p>
                    </b>
                  </h4>
                  <div class="tabs">
                    <a
                      v-on:click="activetab = 1"
                      v-bind:class="[activetab === 1 ? 'active' : '']"
                      >Detalhes da Compra</a
                    >
                    <a
                      v-if="SelectedOrder.STATUS_ORDER_ID !== 3"
                      v-on:click="activetab = 2"
                      v-bind:class="[activetab === 2 ? 'active' : '']"
                      >Detalhes Pagamento</a
                    >
                  </div>
                    <button
                      class="modal__close"
                      @click="
                        showModal = false;
                        onTable = true;
                      "
                    >
                    Voltar
                <i class="el-icon-back"></i>
              </button>
                </div>

                <div class="content" v-if="activetab === 1">
                  <div class="totals" v-if="SelectedOrder">
                    <h4
                      style="
                        font-size: 15px;
                        text-transform: uppercase;
                        color: #969696;
                      "
                    >
                      Informações do Pedido
                    </h4>
                    
                    <p v-if="ResultShopping == 0" style=" color: rgb(23, 162, 184);">
                      <b style="    color: #191928;">Valor do Frete:</b>
                      Grátis
                    </p>
                    <p v-else>
                      <b>Valor do Frete:</b>
                        {{ currencyBRL(ResultShopping) }}
                    </p>
                    <p v-if="SelectedOrder.BILLET_NET_PRICE !== null">
                      <b>Valor Total:</b>
                      {{ currencyBRL(SelectedOrder.BILLET_NET_PRICE) }}
                    </p>
                    <p v-else>
                      <b>Valor Total:</b>
                      {{ currencyBRL(SelectedOrder.NET_PRICE) }}
                    </p>
                    <p>
                      <b>Data do Registro:</b>
                      {{ dateFormat(SelectedOrder.DT_REGISTER) }}
                    </p>
                    <p>
                      <b>Pontuação:</b>
                      {{ formatScore(SelectedOrder.PURCHASE_SCORE) }}
                    </p>
                  </div>

                  <div class="detalhes">
                    <h2>Produtos</h2>
                    <div
                      v-for="(item, index) in ordersDetails"
                      :key="index"
                      style="
                        display: flex;
                        flex-flow: row wrap;
                        align-items: center;
                        align-content: space-between;
                      "
                    >
                      <div
                        class="product_info row"
                        v-for="product in item.PRODUCT_LIST"
                        :key="product.id"
                      >
                        <!-- 
                        <div class="col-md-2 img-product">
                          <img
                            v-if="product.IMAGE_LIST"
                            class="product-image__img img-"
                            :src="
                              product.IMAGE_LIST != null
                                ? product.IMAGE_LIST[0]
                                : ''
                            "
                            alt=""
                          />
                          <img
                            v-else
                            src="../../assets/images/default.png"
                            alt=""
                          />
                        </div>
                        -->
                      
                        <div class="col-md-9 col-9">
                          <h5>{{ product.VS_PRODUCT }}</h5>
                          <div v-if="item.DELIVERY_STATUS_ID == 3">
                            <a
                              style="
                                color: #3b3b3b;
                                font-weight: 500;
                                background: #ffb500;
                                padding: 2px 10px;
                                border-radius: 5px;
                                font-size: 13px;
                              "
                              v-if="product.EVALUATION_COMPLETED == 0"
                              href="#"
                              @click.prevent="CreateEvaluation(product)"
                              >Avaliar Produto<i class="far fa-star"></i
                            ></a>
                            <a
                              style="color: #3a8601; font-weight: 500"
                              v-else
                              href="#"
                              @click.prevent="null"
                              >Produto Avalidado</a
                            >
                          </div>
                            <div class="" v-if="product.VARIATIONS_JSON">
                                <ul style="display: block; list-style-type: none; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px; padding-inline-start: 0;">
                                  <li  v-for="(item, index) in getVariations(product.VARIATIONS_JSON, index)" :key="index" >
                                    <p style="margin-bottom: 0; font-size: 15px;     position: relative;" v-if="item.NAME == 'COR' || item.NAME == 'COLOR' "> <b>{{item.NAME}}: </b> <div
                                      :style="
                                      'background:' +
                                    item.VARIATION +
                                      ';color:' +
                                      item.VARIATION +
                                      ';border: 1px solid #19192894; width: 15px; display: inline; height: 15px; border-radius: 50%; display: inline; position: absolute; left: 35px; top: 2px;'
                                    "
                                    ></div> </p>
                                    <p style="margin-bottom: 0; font-size: 10px;"  v-else> <b>{{item.NAME}}: </b>  {{item.VARIATION}}</p>
                                  </li>
                                </ul>
                              </div>
                          <b v-else><br></b>
                        </div>
                        <div class="col-md-3 col-3 ">
                          <div class="col-md-12  text-right">
                              <p>Quantidade<h4>{{ product.UNITS }}</h4></p>
                              <p>Total  
                                <h4 
                                v-if="
                                  product.SALE_PRICE_DISCOUNT !=
                                  product.SALE_PRICE
                                "
                              >
                                {{
                                  currencyBRL(
                                    product.SALE_PRICE_DISCOUNT * product.UNITS
                                  )
                                }}
                              </h4 >
                              <h4 v-else>
                                {{
                                  currencyBRL(product.SALE_PRICE * product.UNITS)
                                }}
                              </h4>
                              </p>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="detalhes frete"
                    v-if="SelectedOrder.STATUS_ORDER_ID == 2"
                  >
                    <h2>Remessas</h2>
                    <div
                      v-for="(item, index) in ordersDetails"
                      :key="index"
                      class="product_info"
                    >
                      <h5>
                        <b>Status:</b>
                        {{ item.DELIVERY_STATUS_ID == 2 ? "PEDIDO ENVIADO" : "" }}
                        {{
                          item.DELIVERY_STATUS_ID == 1 ? "AGUARDANDO ENVIO" : ""
                        }}
                        {{ item.DELIVERY_STATUS_ID == 3 ? "ENTREGUE" : "" }}
                        {{
                          item.DELIVERY_STATUS_ID == 4
                            ? "RETORNOU AO REMETENTE"
                            : ""
                        }}
                      </h5>
                      <h5>
                        <b>Data estimada para entrega:</b>
                        {{ dateBRL(item.DT_ESTIMATED_DELIVERY) }}
                      </h5>
            
                      <h5
                            style="margin-bottom: 0; color: #17a2b8"
                            v-if="item.FREE_SHIPPING != 0"
                          >
                          <b>Preço frete:</b>
                            Grátis 
                          </h5>
                          <h5 v-else>
                            <b>Preço frete:</b>
                            {{ currencyBRL(item.SHIPPING_COST) }}
                          </h5>
                    
                      <h5>Produtos:</h5>
                      <ul>
                        <li
                          class=""
                          v-for="product in item.PRODUCT_LIST"
                          :key="product.id"
                        >
                          <p>
                            {{ product.VS_PRODUCT }}
                          </p>
                        </li>
                      </ul>
                      <div
                        class="confirm-send"
                        v-if="item.DELIVERY_STATUS_ID == 2"
                      >
                        <button
                          @click="
                            CofirmSend(item.VS_ORDER_ID, item.VS_DELIVERY_ID)
                          "
                          style="
                            background: green;
                            border: none;
                            padding: 5px 25px;
                            color: white;
                            font-weight: bold;
                            border-radius: 5px;
                          "
                        >
                          Confirmar Recebimento
                        </button>
                      </div>
                      <h5 v-if="item.TRACKING_CODE">
                        Código de Rastreio:
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          @click.prevent="
                            goTO('/trakingcode/' + item.TRACKING_CODE)
                          "
                          >{{ item.TRACKING_CODE }}</a
                        >
                      </h5>
                    </div>
                  </div>
                  <div
                    v-if="SelectedOrder.STATUS_ORDER_ID == 1 || SelectedOrder.STATUS_ORDER_ID == 8 "
                    class="cancel"
                    @click="CancelOrder(SelectedOrder.VS_ORDER_ID)"
                  >
                    Cancelar Pedido
                  </div>
                </div>
                <div style="    padding-bottom: 100px;padding-top: 25px;"
                  v-if="activetab === 2"
                  class="content text-center"
                  v-loading="transferLoad"
                > 
                <div class="pagamentos">
                  
                  <div class="" v-if="SelectedOrder != null">
                    <!--Seleciona o Método -->
                    <div v-if="SelectedOrder.PAYMENT_METHOD == null || SelectedOrder.STATUS_ORDER_ID == 8">
                      <!-- Antes de definir método-->
                      <div class="" v-if="beforePay" style="    padding: 1vw 2vw;">
                        <div
                          class="methods-pay row"
                          v-if="SelectedOrder.STATUS_ORDER_ID == 1 || SelectedOrder.STATUS_ORDER_ID == 8"
                        >
                          <div class="col-md-12">
                                <h3
                              style=" text-align: left; color: rgb(25, 25, 40); margin: -20px 0px 15px; font-weight: 200; font-size: 20px;   "
                            >
                           Escolha o Método de Pagamento.
                            </h3>
                            
                            <el-collapse accordion>
                              <el-collapse-item    v-for="(item, index) in methodsStore" :key="index"  :name="item.ID">
                                <template #title >
                             
                                 <div v-if="item.ID == 1">
                                     Boleto Bancário <i class="el-icon-tickets icone" ></i>
                                  </div>
                                <div v-else-if="item.ID == 4">
                                    Transferência por plataforma digital  <i class="fas fa-money-check-alt icone"></i>
                                  </div>
                                   <div v-else-if="item.ID == 5">
                                    Cartão de Crédito <i class="fas fa-money-check icone"></i>  <span style="background: #0e9227; color: white; padding: 2px 20px; line-height: 25px; border-radius: 5px; margin-left: 10px;">Novo</span>
                                  </div>
                                  <div v-else>
                                       {{item.DESCRIPTION}}
                                  </div>
                                   
                                </template>
                                <div class="billet" v-if="item.ID == 1">
                                      <button
                                        v-if="userTypeDocument != 3"
                                        style="
                                          background: #0078f5;
                                          border: none;
                                          border-radius: 5px;
                                          padding: 0 5vw;
                                        "
                                        class="btn btn-info mt-3"
                                        @click="BilletGenerate(SelectedOrder)"
                                      >
                                        <i data-v-24f21499="" class="el-icon-tickets"></i>
                                        Gerar boleto
                                      </button>
                                      <p v-else style="padding: 2vw 12vw">
                                        <el-alert type="error" show-icon>
                                          Boleto não disponível <br />
                                          Você se cadastrou com documento do tipo
                                          Passaporte, por favor entre em contato com nosso
                                          suporte no e-mail:
                                          <a href="mailto:suporte@vg.company"
                                            >suporte@vg.company</a
                                          >
                                        </el-alert>
                                      </p>
                                </div>
                                <div class="digital-transfer row" v-else-if="item.ID == 4">
                                      <div class="col-md-2"></div>
                                      <div class="col-md-8">
                                        <span
                                          style="
                                            border: 2px solid #0078f5;
                                            padding: 10px;
                                            border-radius: 5px;
                                            display: block;
                                            margin-top: 5px;
                                          "
                                          ><p class="text-center" style="font-weight: bold">
                                            Dados da conta para transferência por plataforma
                                            digital
                                          </p>
                                          <hr />
                                          <p style="margin: 0px; padding: 0px">
                                            <b>Nome do destinatário</b><br />
                                            JLB EDUCAÇÃO ASSESSORIA EMPRESARIAL LTDA
                                            <br />
                                            <b>CNPJ do destinatário</b><br />
                                            37.886.966/0001-88 <br />
                                            <b> Valor a ser depositado: </b><br />{{
                                              currencyBRL(SelectedOrder.NET_PRICE)
                                            }}
                                          </p>
                                        </span>
                                      </div>
                                      <div class="col-md-2"></div>
                                      <div class="col-md-12 text-left row">

                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                          <ul
                                            style="
                                              list-style-type: none;
                                              margin-block: 0px;
                                              margin-inline: 0px;
                                              padding-inline-start: 0px;
                                              font-size: 14px;
                                              color: rgb(210 106 0);
                                              padding: 10px 15px;
                                              font-weight: 600;
                                            "
                                          >
                                            <li>
                                              1°) Acesse o Aplicativo  e realize a
                                              transferência do valor indicado.
                                            </li>
                                            <li>
                                              2°) Verifique a conclusão da transferência.
                                            </li>
                                            <li>
                                              3°) Copie e cole a HASH de pagamento no campo
                                              abaixo e clique em enviar!
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="col-md-2"></div>
                                      <div class="col-md-8 row send-row">
                                        <div class="col-md-12" style="text-align: left; margin: 15px 0px;" hidden>
                                          <span>PLATAFORMAS DISPONÍVEIS</span>
                                          <select data-v-1e591900="" required="required" class="form-control" v-model="dataMethodsStore">
                                             <option data-v-1e591900="" disabled="disabled" value=""> Selecione </option>
                                            <option data-v-1e591900="" value="1"> U4Crypto Carteira Digital </option>
                                            <option data-v-1e591900="" value="2"> Receba e Pague Carteira Digital  </option>
                                            </select>
                                        </div>
                                        <div class="col-md-8">
                                          <input
                                            v-model="hashPay"
                                            type="text"
                                            style="
                                              width: 100%;
                                              height: 50px;
                                              padding: 0px 15px;
                                            "
                                            placeholder="Hash de Pagamento"
                                          />
                                        </div>
                                        <div class="col-md-4">
                                          <button
                                            v-if="hashPay !== null"
                                            class="btn btn-info btn-block"
                                            style="height: 50px"
                                            @click="sendTransfer(SelectedOrder)"
                                          >
                                            <i class="el-icon-upload2"></i>
                                            Enviar
                                          </button>
                                          <button
                                            v-else
                                            class="btn btn-info btn-block"
                                            style="height: 50px; background-color: #4e5253; border-color: #8c8f90;"
                                            disabled
                                          >
                                            <i class="el-icon-upload2"></i>
                                            Enviar
                                          </button>
                                        </div>
                                      </div>
                                      <div class="col-md-2"></div>
                                </div>
                                <div class="credit-card" v-else-if="item.ID == 5">
                                  <div class="conteudo">
                                        <mercadoPago  v-if="renderComponent" :dados="SelectedOrder"  :totalCredit="totalCredit" @reloadOrderNew="reloadOrderNew"  @reloadComponent="reloadComponent" ></mercadoPago>
                                  </div>
                                </div>
                                <div class="other" v-else>
                                  não disponível
                                </div>


                                
                              </el-collapse-item>
                        
                        
                            </el-collapse>


                  
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- depois de Definir pagamento-->
                      <div class="show-result" v-if="afterPay">
                        <div class="billet" v-if="typeAfterpay == 1">
                          <h4>Pagamento por Boleto Bancário</h4>
                          <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8 text-center row">
                              <br />
                              <div class="col-md-6">
                                <button
                                  @click.prevent="goBillet(resultBillet.billet)"
                                  target="_BLANK"
                                  :href="resultBillet.billet"
                                  class="btn btn-info mr-2"
                                  style="width: 100%"
                                >
                                  <i class="el-icon-tickets"></i> Ver Boleto
                                </button>
                              </div>
                              <div class="col-md-6">
                                <button
                                  @click="CancelBillet(resultBillet.barCode)"
                                  class="btn btn-danger"
                                  style="width: 100%"
                                >
                                  <i class="el-icon-tickets"></i> Cancelar Boleto
                                </button>
                              </div>
                              <div class="col-md-12 text-left">
                                <div class="copy">
                                  <br />
                                  <b>Linha digitável:</b><br />
                                  <input
                                    ref="myBillet"
                                    type="text"
                                    style="width: 100%"
                                    v-model="resultBillet.barCode"
                                    disabled
                                  />
                                  <i
                                    class="el-icon-copy-document"
                                    @click.stop.prevent="copyCode"
                                  ></i>
                                </div>
                                <div class="left">
                                  <b>Data de emissão: </b>
                                  <p>
                                    {{ dateFormat(resultBillet.issueDate) }}
                                  </p>
                                </div>
                                <div class="right">
                                  <b>Valor: </b>
                                  <p>
                                    {{ currencyBRL(resultBillet.amount) }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--Resultado método selecionado -->
                    <!-- boleto -->
                       <div
                        class="billet"
                        v-if="SelectedOrder.PAYMENT_METHOD_ID == 1"
                      >
                        <h4>Pagamento por Boleto Bancário</h4>
                        <div class="row">
                          <div class="col-md-2"></div>
                          <div class="col-md-8 text-center row">
                            <br />
                            <div class="col-md-6">
                              <button
                                @click.prevent="
                                  goBillet(SelectedOrder.BILLET_URL_PDF)
                                "
                                target="_BLANK"
                                :href="SelectedOrder.BILLET_URL_PDF"
                                class="btn btn-info mr-2"
                                style="width: 100%"
                              >
                                <i class="el-icon-tickets"></i> Ver Boleto
                              </button>
                            </div>
                            <div class="col-md-6">
                              <button
                                @click="
                                  CancelBillet(
                                    SelectedOrder.BILLET_DIGITABLE_LINE
                                  )
                                "
                                class="btn btn-danger"
                                style="width: 100%"
                              >
                                <i class="el-icon-tickets"></i> Cancelar Boleto
                              </button>
                            </div>
                            <div class="col-md-12 text-left">
                              <div class="copy">
                                <br />
                                <b>Linha digitável:</b><br />
                                <input
                                  ref="myBillet"
                                  type="text"
                                  style="width: 100%"
                                  v-model="SelectedOrder.BILLET_DIGITABLE_LINE"
                                  disabled
                                />
                                <i
                                  class="el-icon-copy-document"
                                  @click.stop.prevent="copyCode"
                                ></i>
                              </div>
                              <div class="left">
                                <b>Data de emissão: </b>
                                <p>
                                  {{ dateFormat(SelectedOrder.BILLET_DATE) }}
                                </p>
                              </div>
                              <div class="right">
                                <b>Valor: </b>
                                <p>
                                  {{
                                    currencyBRL(SelectedOrder.BILLET_NET_PRICE)
                                  }}
                                </p>
                              </div>
                            </div>
                            <div class="send-payment"></div>
                          </div>
                        </div>
                      </div>
                    <div  class="show-result">
                      <div
                        class="direct-transfer"
                        v-if="
                          SelectedOrder.PAYMENT_METHOD_ID == 2 ||
                          (SelectedOrder.PAYMENT_METHOD_ID == 4 &&
                            SelectedOrder.STATUS_ORDER_ID == 2)
                        "
                      >
                        <p>Pagamento Realizado com sucesso!</p>
                        <i class="fas fa-check-circle"></i><br />
                        <b v-if="SelectedOrder.BILLET_NET_PRICE">
                          Boleto Bancário
                        </b>
                        <b v-else>
                          {{ SelectedOrder.DIGITAL_PLATFORM }}
                        </b>
                      </div>
                    </div>
                    <div  class="show-result" v-if=" SelectedOrder.PAYMENT_METHOD_ID == 5">
                      <div
                        class="direct-transfer"
                        v-if=" SelectedOrder.STATUS_ORDER_ID == 2  "
                      >
                        <p>Pagamento Realizado com sucesso!</p>
                        <i class="fas fa-check-circle"></i><br />
                        <b >
                          Cartão de Crédito
                        </b>
                      </div>
                      <div class="" v-else>
                        <div class="direct-transfer" v-if="SelectedOrder.STATUS_ORDER_ID == 7">
                             <p style="color: #ffa500; margin-top: 20px;">Processando pagamento!</p>
                            <i class="fas fa-exclamation-circle" style="    color: #ffa500;"></i><br />
                            <b >
                             AGUARDANDO APROVAÇÃO DO CARTÃO DE CRÉDITO
                            </b>
                        </div>
                  
                      </div>
                    </div>
                          <div class="direct-transfer" v-if="SelectedOrder.STATUS_ORDER_ID == 8">
                             <p style="color: rgb(173 0 0);    margin-top: -20px;">Pagamento Recusado!</p>
                            <i class="fas fa-exclamation-triangle" style=" color: rgb(173 0 0);"></i><br />
                            <b >
                             Escolha um dos nossos métodos e realize um novo pagamento.
                            </b>
                        </div>
                </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- End Left Bar My Account -->
          <BrowsingHistory></BrowsingHistory>
        </div>
      </div>
    </div>
  </div>

  <!-- .block-banner / end -->
  <Footer></Footer>
  
</template>

<style scoped>
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
import Header from "../../components/Header/index.vue";
import Carousel from "./components/Carousel.vue";
import mercadoPago from "./components/PayPal.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "../../components/Footer/index.vue";
import BrowsingHistory from "../../components/BrowsingHistory/index.vue";
import StarRating from "vue-star-rating";
import Products from "../../services/Products";
import Auth from "../../services/Auth";

export default {
  name: "myaccount",
  components: {
    Header,
    Carousel,
    LeftBar,
    Footer,
    BrowsingHistory,
    StarRating,
    mercadoPago,
  },
  methods: {
    GetmethodsStore() {
      Products.methodsStore()
        .then((r) => {
          this.methodsStore = r.data.DATA;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    GetDigitaplatforms() {
      if (localStorage.getItem("token") !== null) {
        let token = localStorage.getItem("token");
        Products.Digitaplatforms(token)
          .then((r) => {
            this.Digitaplatforms = r.data.DATA;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    isCollapseF() {
      if (this.isCollapse == true) {
        this.isCollapse = false;
        this.one = 18;
        this.two = 82;
      } else {
        this.isCollapse = true;
        this.one = 6;
        this.two = 94;
      }
    },
    goTO(url) {
      this.$router.push(url);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    reloadOrderNew(dado) {
      console.log("reloadOrderNew");
      this.showModal = false;
      this.onTable = true;
      if (localStorage.getItem("token") !== null) {
        this.getOrders();
      } else {
        this.loginStatus = false;
      }
      // this.getDetails(dado);
      // this.showModal = true;
      // this.onTable = false;
      this.activetab = 1;
      this.redirectToHome();
    },
    reloadComponent(dado) {
      console.log("reloadComponent");
      this.renderComponent = false;
      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    transferVariation(variations) {
      console.clear();
      var html = [];
      for (var obj in variations) {
        var item = {};
        item.NAME = obj;
        item.VARIATION = variations[obj];
        html.push(item);
      }
      return html;
    },
    getVariations(product, index) {
      var variations = JSON.parse(product);
      var html = [];
      for (var obj in variations) {
        var item = {};
        item.NAME = obj;
        item.VARIATION = variations[obj];
        html.push(item);
      }
      return html;
    },
    formatScore: function (value) {
      return Intl.NumberFormat("pt-BR", {}).format(value || 0);
    },
    getCarousel() {
      Products.getBanner("4").then((r) => {
        this.Carousel = r.data.DATA;
      });
    },
    CofirmRating() {
      this.loadDetail = true;
      let data = {
        P_USER_ID: JSON.parse(localStorage.getItem("userID")),
        P_VS_PRODUCT_ID: this.ProductAvaliable.VS_PRODUCT_ID,
        P_COMMENT: this.comment,
        P_STAR: this.rating,
      };
      Products.SendRating(data)
        .then((r) => {
          this.$notify({
            title: "Sucesso",
            message: "Obrigado, Avaliação Salva!",
            type: "success",
          });
          this.loadDetail = false;
          this.showModal = false;
          this.onTable = true;
          this.closedModal();
        })
        .catch((e) => {
          this.loadDetail = false;
          if (e.response.status == 403) {
            Auth.logoutUser();
          }
        });
    },
    clearRating() {
      this.comment = "";
      this.rating = 0;
      this.Evaluation = false;
      this.ProductAvaliable = {};
    },
    setRating(rating) {
      this.rating = rating;
    },
    goTO(url) {
      this.$router.push(url);
    },
    CofirmSend(order, delivery) {
      let user = parseInt(localStorage.getItem("userID"));
      let data = {
        VS_ORDER_ID: order,
        VS_DELIVERY_ID: delivery,
      };
      this.$confirm("Confirmar Recebimento?", "Atenção", {
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        type: "warning",
      })
        .then(() => {
          Products.setSend(data)
            .then((r) => {
              this.$message({
                type: "success",
                message: "Recebimento Confirmado!",
              });
              this.showModal = false;
              this.closedModal();
            })
            .catch((e) => {
              if (e.response.status == 403) {
                Auth.logoutUser();
              }
              this.$notify.error({
                title: "Erro",
                message: "Tente novamente!",
              });
            });
        })
        .catch(() => {});
    },
    sendTransfer(order) {
      this.transferLoad = true;
      let data = {
        hash: this.hashPay,
        order_item_id: order.VS_ORDER_ID,
        digital_platform_id: 2,
        user_account_id: JSON.parse(localStorage.getItem("SELECTED_ACCOUNT_ID"))
          ? JSON.parse(localStorage.getItem("SELECTED_ACCOUNT_ID"))
          : 0,
        user_id: parseInt(localStorage.getItem("userID")),
      };
      Products.TransferGenerate(data)
        .then((r) => {
          this.transferLoad = false;
          this.$notify({
            title: "Sucesso",
            message: "Pagamento Realizado!",
            type: "success",
          });
          this.showModal = false;
          this.closedModal();
        })
        .catch((e) => {
          this.transferLoad = false;
          if (e.response.data.REF != null) {
            if (e.response.data.REF == "I0056") {
              this.$notify.error({
                title: "Erro",
                message: "Hash já utilizada, tente novamente!",
              });
            }
          } else {
            this.$notify.error({
              title: "Erro",
              message: "Algo deu errado, tente novamente!",
            });
          }
          if (e.response.status == 403) {
            Auth.logoutUser();
          }
          this.transferLoad = false;
        });
    },
    goBillet(url) {
      window.open(url, "_blank").focus();
    },
    dateFormat(data) {
      return data.split("-").reverse().join("/");
    },
    currencyBRL(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    copyCode() {
      var Url = this.$refs.myBillet.value;
      navigator.clipboard.writeText(Url);
      this.$message({
        message: "Copiado com sucesso!",
        type: "success",
      });
    },
    CancelOrder(orderID) {
      let user = JSON.parse(localStorage.getItem("SELECTED_ACCOUNT_ID"))
        ? JSON.parse(localStorage.getItem("SELECTED_ACCOUNT_ID"))
        : 0;
      this.$confirm("Cancelar Ordem: n°" + orderID, "Atenção", {
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        type: "warning",
      })
        .then(() => {
          Products.CancelOrder(user, orderID)
            .then((r) => {
              this.$message({
                type: "success",
                message: "Ordem Cancelada!",
              });
              this.showModal = false;
              this.closedModal();
            })
            .catch((e) => {
              if (e.response.status == 403) {
                Auth.logoutUser();
              }
              this.$notify.error({
                title: "Erro",
                message: "Tente novamente!",
              });
            });
        })
        .catch(() => {});
    },
    redirectToHome() {
      window.scrollTo(0, 200);
    },
    CancelBillet(digitableLine) {
      let user = parseInt(localStorage.getItem("userID"));
      let data = {
        digitableLine: digitableLine,
      };
      this.$confirm("Cancelar Boleto?", "Atenção", {
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        type: "warning",
      })
        .then(() => {
          Products.boletoCancel(user, data)
            .then((r) => {
              this.$message({
                type: "success",
                message: "Boleto Cancelado!",
              });
              this.showModal = false;
              // this.redirectToHome();
              this.closedModal();
            })
            .catch((e) => {
              if (e.response.status == 403) {
                Auth.logoutUser();
              }
              this.$notify.error({
                title: "Erro",
                message: "Tente novamente!",
              });
            });
        })
        .catch(() => {});
    },
    reloadOrder(ordem) {},
    BilletGenerate(ordem) {
      this.transferLoad = true;
      let data = {
        VS_ORDER_ID: ordem.VS_ORDER_ID,
        P_DIGITAL_PLATFORM_ID: 1,
      };
      Products.BilletGenerate(data)
        .then((r) => {
          this.$notify({
            title: "Sucesso",
            message: "Boleto gerado!",
            type: "success",
          });
          this.resultBillet = r.data.DATA;
          this.transferLoad = false;
          this.typeAfterpay = 1;
          this.beforePay = false;
          this.afterPay = true;
        })
        .catch((e) => {
          if (e.response.status == 403) {
            Auth.logoutUser();
          }
          this.transferLoad = false;
        });
    },
    dateBRL(data) {
      return data.split("-").reverse().join("/");
    },
    currencyBRL(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDetails(order) {
      this.loadDetail = true;
      let data = {
        VS_ORDER_ID: order.VS_ORDER_ID,
      };
      Products.GetOrderDetails(data)
        .then((r) => {
          if (order.STATUS_ORDER_ID == 8) {
            let dataCard = {
              VS_ORDER_ID: order.VS_ORDER_ID,
            };
            Products.resetCard(dataCard)
              .then((r) => {})
              .catch((e) => {});
          }
          this.ordersDetails = r.data.DATA;
          this.SelectedOrder = order;
          this.totalCredit = ((order.NET_PRICE * 100) / 95.01).toFixed(2);
          this.loadDetail = false;
          this.ResultShopping = 0;
          this.ordersDetails.map((item) => {
            if (item.FREE_SHIPPING == 1) {
              this.ResultShopping += Number(0);
            } else {
              this.ResultShopping += Number(item.SHIPPING_COST);
            }
          });
        })
        .catch((e) => {
          if (e.response.status == 403) {
            Auth.logoutUser();
          }
          this.loadDetail = false;
        });
    },
    dateFormat(data) {
      let date = data.substr(0, 10);
      return date.split("-").reverse().join("/");
    },
    getOrders() {
      this.loadTable = true;
      const token = localStorage.getItem("token");
      let data = {
        P_USER_ACCOUNT_ID: JSON.parse(
          localStorage.getItem("SELECTED_ACCOUNT_ID")
        )
          ? JSON.parse(localStorage.getItem("SELECTED_ACCOUNT_ID"))
          : 0,
        P_USER_ID: JSON.parse(localStorage.getItem("userID")),
      };
      Products.GetOrders(data)
        .then((r) => {
          this.orders = r.data.DATA;
          this.loadTable = false;
        })
        .catch((e) => {
          if (e.response.status == 403) {
            Auth.logoutUser();
          }
          this.loadTable = false;
        });
    },
    getStatusMessage: function (statusId, STATUS) {
      switch (statusId) {
        case 1:
          return "Pendente de Pagamento";
          break;
        case 2:
          return "Pago com sucesso";
          break;
        case 3:
          return "Pedido Cancelado";
          break;
        case 7:
          return "Aguardando aprovação do cartão de crédito";
          break;
        case 8:
          return "COMPRA RECUSADA PELO OPERADOR DE CARTÃO DE CRÉDITO";
          break;
        default:
          return STATUS;
      }
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.STATUS_ORDER_ID === 1 || row.STATUS_ORDER_ID === 7) {
        return "warning-row";
      } else if (row.STATUS_ORDER_ID === 2) {
        return "success-row";
      } else if (row.STATUS_ORDER_ID === 3 || row.STATUS_ORDER_ID === 8) {
        return "danger-row";
      } else {
        return "warning-row";
      }
      return "";
    },
    rowClicked(row) {
      this.$refs.tableData.toggleRowExpansion(row);
    },
    closedModal() {
      this.clearRating();
      this.ordersDetails = "";
      this.SelectedOrder = "";
      this.typePay = "";
      (this.typeAfterpay = null), (this.beforePay = true);
      this.afterPay = false;
      this.getOrders();
      this.onTable = true;
    },
    CreateEvaluation(product) {
      this.Evaluation = true;
      this.ProductAvaliable = product;
    },
  },
  created() {
    this.canCopy = !!navigator.clipboard;
    this.getCarousel();
    this.GetDigitaplatforms();
    this.GetmethodsStore();
  },

  data() {
    return {
      dataMethodsStore: null,
      methodsStore: [],
      Digitaplatforms: [],
      one: 6,
      two: 94,
      totalCredit: 0,
      renderComponent: true,
      key: null,
      globalVariations: [],
      Variations: {},
      ResultShopping: 0,
      onTable: true,
      Carousel: "",
      ProductAvaliable: {},
      Evaluation: false,
      orders: null,
      loginStatus: false,
      showModal: false,
      globalLoading: false,
      expandRowKeys: [],
      ordersDetails: "",
      SelectedOrder: "",
      loadTable: false,
      loadDetail: false,
      activetab: 1,
      typePay: null,
      transferLoad: false,
      transferLoad2: false,
      beforePay: true,
      afterPay: false,
      resultBillet: "",
      typeAfterpay: null,
      hashPay: null,
      userTypeDocument: 0,
      rating: null,
      comment: "",
      isCollapse: true,
    };
  },
  mounted() {

    window.scrollTo(0, 0);
    //verifica login
    if (localStorage.getItem("token") !== null) {
      this.getOrders();
      this.loginStatus = true;
      this.userTypeDocument = JSON.parse(localStorage.getItem("TDI"));
    } else {
      this.loginStatus = false;
    }
  },
};
</script>

<style scoped>
.avaliar {
  position: absolute;
  background: white;
  width: 500px;
  height: 400px;
  top: 0;
  bottom: 0;
  z-index: 1031;
  margin: auto;
  left: 0;
  right: 0;
}

::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 85%;
  max-width: 70%;
  margin: 0 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  background: #fff;
  min-width: 70%;
  min-height: 50%;
  max-height: -webkit-max-content;
  max-height: -moz-max-content;
  max-height: max-content;
  padding-bottom: 15px;
}

.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__content {
  flex-grow: 1;
  margin-bottom: 50px;
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
  top: 0px;
  right: 0;
  width: 130px;
  padding: 1px 4px;
  height: 40px;
  color: white;
  text-align: center;
  font-size: 20px;
  background: #0078f5 !important;
  z-index: 30;
}
.modal__close i {
  color: white;
}
</style>
<style scoped>
.myorder .BrowsingHistory {
  margin-top: 50px;
}

.myorder .table thead {
  background: #191928;
  border: none !important;
  color: white;
}

.myorder .table tbody th {
  padding: 20px 10px;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  background: #fbfbfb;
}
.myorder .table tbody tr:hover th {
  background: #e8f4ff;
}
.myorder .table a,
a:hover {
  color: #0180ed;
}
.myorder .dark-mode div ::v-deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}

.vfm--inset {
  z-index: 9 !important;
  top: 5%;
}

.modal__close {
  border: none;
  background: none;
}
.el-loading-mask {
  z-index: 1029 !important;
}

.modal__content .header {
  padding: 15px 0px 0px 2vw;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
  background: #f5f5f5;
  border-bottom: 1px solid #ebebeb;
}
.content {
  background: #fcfcfc;
  border-bottom: 1px solid #ebebeb;
}
.modal__content .header b {
  color: #8c8c8c;
  font-size: 19px;
}

.modal__content .header h4 {
  text-transform: uppercase;
  color: #0078f5;
  font-size: 30px;
}
.myorder .detalhes {
  padding: 2vw 2vw;
}
.myorder .detalhes h2 {
  font-size: 18px;
  color: #4c4c4c;
  text-transform: uppercase;
}
.myorder .detalhes .product_info {
  margin-bottom: 10px;
  padding: 0.5vw;
  background: #f5f5f5;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
  border-radius: 2px;
  width: 100%;
  margin-left: 0px;
  border-left: 2px solid #0078f5;
}

.myorder .detalhes .product_info b {
  color: #8c8c8c;
  font-size: 12px;
}

.myorder .detalhes .product_info h5 {
  color: #191928;
  font-size: 12px;
  margin-top: 5px;
}

.myorder .frete .product_info {
  border-left: 2px solid #0078f5;
}
.myorder .frete p {
  margin: 0;
  font-size: 12px;
}
.myorder .frete .product_info h5 {
  color: #191928;
  font-size: 15px;
}

.myorder .frete .product_info b {
  color: #616161;
  font-size: 15px;
}
.myorder .totals {
  padding: 2vw 0px 0px 2vw;
}
.myorder .totals p {
  margin-bottom: 0;
  font-size: 15px;
}
::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(13deg, #737373 14%, #474747 64%);
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(13deg, #047dba 14%, #00ddff 64%);
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 0px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}

.myorder .box {
  border: 2px solid #eee;
  padding: 5px;
  padding-left: 15px;
  background-color: white;
}

.myorder .tags {
  padding: 3px;
  background-color: #eee;
  border-radius: 2px;
  border: 1px solid #bbb;
  margin-right: 2px;
}

.myorder .tags span {
  background-color: #ffcdd2;
  font-size: 11px;
  cursor: pointer;
  padding: 2px;
  color: #d32f2f;
  border: 1px solid #ef9a9a;
}

.myorder tr {
  cursor: pointer;
}

.myorder .add-suppliers {
  margin-top: 10px;
  border: 1px solid #0a285c;
  color: #ffffff;
  background-color: #0a285c;
}

.myorder .mb-5,
.myorder .my-5 {
  margin-bottom: 0rem !important;
}

.myorder .title-modal h2 {
  margin: 5px 0px;
  margin-top: -40px;
}

.myorder .el-table .cell,
.myorder .el-table--border td:first-child .cell,
.myorder .el-table--border th:first-child .cell {
  padding-left: 0;
}

.myorder .el-table .cell {
  padding-left: 0;
}
.myorder .el-select {
  width: 100%;
}
.myorder .error-msg {
  background: red;
  border-radius: 4px;
  padding: 0px 0px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}

.myorder .container {
  max-width: 620px;
  min-width: 420px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
.myorder .tabs {
  overflow: hidden;
  margin-left: 0px;
  margin-bottom: 0px;
}

.myorder .tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.myorder .tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  border-top: 2px solid #b7b7b7;
  transition: background-color 0.2s;
  border-right: none;
  font-weight: bold;
  color: #b7b7b7;
  margin-right: 5px;
  text-transform: uppercase;
  background: #fbfbfb;
  margin-bottom: 0px;
}
.myorder .tabs a:last-child {
}

/* Change background color of tabs on hover */
.myorder .tabs a:hover {
  background-color: #f4f4f4;
  border-top: 2px solid #0078f5;
  color: #0078f5;
}

/* Styling for active tab */
.myorder .tabs a.active {
  color: #0a285c;
  border-top: 2px solid #0a285c;
  cursor: default;
}

/* Style the tab content */
.myorder .tabcontent {
  padding: 5px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
}

@media (max-width: 1400px) {
  .modal-content {
    top: 55px;
  }
}

.methods-pay {
  text-align: center;
  margin-bottom: 40px;
}

.methods-pay .el-radio {
  width: 100%;
}
.methods-pay .item {
  padding: 1vw 0vw;
  background: white;
  border: 2px solid #e2e8f0;
  /* color: red; */
  border-radius: 10px;
}
.methods-pay .is-checked .item {
  color: #0078f5 !important;
  border: 2px solid #0078f5;
}

.methods-pay .item i {
  font-size: 50px;
  margin-bottom: 10px;
}

.cancel {
  background: #790000;
  padding: 15px 0px;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.copy i {
  position: absolute;
  font-size: 30px;
  background: #0078f5;
  color: white;
  padding: 10px;
  cursor: pointer;
  right: 15px;
}

.copy i:hover {
  background: rgb(4, 52, 104) !important;
}

.copy input {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  margin-bottom: 15px;
}
.show-result h4 {
  color: #191928;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 15px;
}

.show-result b {
  color: #191928;
  text-transform: uppercase;
}

.show-result p {
  color: #191928;
  text-transform: uppercase;
}

.show-result .left {
  float: left;
  width: 50%;
}
.show-result .right {
  float: right;
  width: 50%;
  text-align: right;
}
.send-row {
  padding-bottom: 50px;
}
.el-message-box__status.el-icon-warning {
  color: #e63c3c !important;
}
.direct-transfer i {
  font-size: 70px;
  color: #2c6d03;
  margin-bottom: 15px;
}

.direct-transfer p {
  font-size: 25px;
  color: #2c6d03;
  font-weight: 600;
  margin-top: 80px;
}
</style>
<style>
#myorder .myorder .el-loading-mask {
  z-index: 9 !important;
}
#myorder .modal__content .el-loading-mask {
  z-index: 9 !important;
}
#myorder .modal-content {
  margin-top: 80px;
}
#myorder .modal-content .content {
  border-bottom: 1px solid #ababab;
}
#myorder .img-product img {
  width: auto;
  max-height: 110px !important;
  margin-left: -15px;
}
#myorder .product_info h4 {
  font-size: 15px;
}
#myorder .product_info p {
  margin-bottom: 0.5rem;
}
.avaliar-body {
  position: fixed;
  background: rgb(0 0 0 / 61%);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999999;
}
.Avaliar {
  width: 70%;
  padding: 0vw 3vw;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  height: 220px;
}
</style>
<style scoped>
.el-radio__input {
  display: none;
}
.myorders {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: space-between;
}
</style>
<style>
#myorder .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 680px;
}
#myorder .el-menu--collapse {
  height: 680px;
}

.myorders .two {
  margin-bottom: 50px;
  padding-left: 1vw;
}

.myorders .two .contenttwo {
  overflow-y: scroll;
  height: 600px;
  padding-right: 1vw;
}
.el-collapse-item__header {
  padding: 1vw 2vw;
}
.el-collapse-item__header .icone {
  font-size: 20px;
  margin-left: 15px;
}
.credit-card {
  padding: 1vw 2vw;
}
.BrowsingHistory {
  margin-top: 50px;
}
</style>
