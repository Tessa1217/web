// header + main 
let template = `<div>
                  <my-header v-bind:cartItemCount="cartItemCount"></my-header>
                  <main>
                    <div class="row product" v-for="(product, index) in products">
                        <div class="col-md-4">
                          <!-- 이미지 출력-->
                          <figure>
                            <img :src="product.image" :style="styleClass">
                          </figure>
                        </div>
                        <div class="col-md-4 col-expand">
                          <!-- 상품 관련 정보 출력 -->
                          <!-- params : 경로에 값을 붙여서 넘겨주는 방식 -->
                          <!-- 값을 넘겨주는 2가지 방식 : query(GET 방식), params(POST 방식)
                          값을 받는 곳에서 접근하는 방식이 다름 --> 
                          <!-- named route with params to let the router build the url -->
                          <router-link tag="h1" v-bind:to="{name : 'id', params : {id : product.id}}">
                          {{ product.title }}
                          </router-link>
                          <p v-html="product.description"></p>
                          <!-- 필터 걸기 -> 넘겨주는 값에 대해서 원하는 형태로 변환 -->
                          <p class="price">{{ product.price | formatPrice }}</p>
                        </div>
                        <button class="btn btn-primary btn-lg" @click="addToCart(product)" v-bind:disabled="!itemLeft(product)">장바구니 담기</button>
                        <span v-if="product.availableInventory - cartCount(product.id) == 0" class="inventory-message">품절!</span>
                        <span v-else-if="(product.availableInventory - cartCount(product.id)) > 5"class="inventory-message">남은 재고: {{ product.availableInventory - cartCount(product.id) }}</span>
                        <span v-else class="inventory-message">지금 구매하세요! (남은 재고 : {{ product.availableInventory - cartCount(product.id) }})</span>
                        <div class="rating">
                          <!-- <span v-for="n in product.rating" class="rating-active">☆</span>
                          <span v-for="n in (5 - product.rating)">☆</span> -->
                          <span v-for="n in 5" v-bind:class="{'rating-active' : checkRating(product, n)}">☆</span>
                        </div>
                      </div>
                    </main>
                  </div>`;
  // header import
  import myHeader from './header.js'
  export default {
    name : 'iMain',
    template : template,
    data : function() {
      {
        return {
          products : [],
          cart : [],
          styleClass : {
            width: '200px',
            height: '200px'
          }
        }
      }
    }, 
    created : function() {
      fetch('/Vue/vue05/products.json')
        .then(result => result.json())
        .then(data => data.products)
        .then(list => {
          list.forEach(elem => {
            console.log(elem);
            this.products.push(elem)})
        });
        console.log(this.products);
    },
    computed : {
      cartItemCount : function() {
        return this.cart.length;
      }
    },
    methods : {
      addToCart : function(product) {
        this.cart.push(product.id);
      },
      checkRating : function(product, n) {
        return (product.rating - n) >= 0; 
      },
      itemLeft : function(product) {
        return product.availableInventory > this.cartCount(product.id);
      },
      cartCount : function(productId) {
        let count = 0;
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i] == productId) {
            count++;
          }
        }
        return count;
      }
    },
    components : {
     myHeader
    },
    filters : {
      // computed vs. filters
      // computed 데이터 내부에 있는 값을 연결해서 변형
      // filters 데이터 내부에 있는 값이 아니라도 연결하면 변형해서 결과값 도출, 단독으로 사용 불가
        formatPrice : function(price) {
          if (!parseInt(price)) {
            return '';
          }
          if (price > 99999) {
            // $1,000 이상의 값
            // 소숫점 이하로 값 변경
            let priceString = (price/100).toFixed(2);
            // 반대 방향으로 한 글자마다 자름 
            let priceArray = priceString.split('').reverse(); 
            // console.log(priceString);
            // console.log(priceArray);
            let index = 3;
            // 3자리 마다 ',' 집어넣음
            while(priceArray.length > index + 3) {
              priceArray.splice(index+3, 0, ',');
              index += 4;
              // console.log(priceArray);
            }
            return '$' + priceArray.reverse().join('');
          } 
          else {
            return '$' + (price/100).toFixed(2);
          }
        }
    }
  }
