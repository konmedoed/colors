<template>
  <div class="basket" ref="basket">
    <div class="basket__wrapper">
      <div class="basket__title">
        <h2 class="basket__heading text">Корзина</h2>
        <button class="basket__close-button" @click="closeBasket"></button>
      </div>
      <div class="basket__stuff-wrapper">
        <div class="basket__info">
          <p class="basket__stuff-num">{{ getNumOfStuff }}</p>
          <button class="basket__clear text" @click="this.$store.dispatch('clearBasket')">очистить список</button>
        </div>
        <div class="basket__stuff-wrapper">
          <BasketItem 
            v-for="item in this.$store.state.basket"
            :item="item"
            :key="item.id"
            :isFaded="false"
          />
          <BasketItem 
            v-if="this.$store.state.faded"
            v-for="item in this.$store.state.faded"
            :item="item"
            :key="item.id"
            :isFaded="true"
          />
        </div>
      </div>
    </div>
    <div class="basket__total">
      <div class="basket__cost-block">
        <p class="basket__cost text">Итого</p>
        <p class="basket__cost-value text">{{ this.$store.getters.getSumOfBasketStuff }}₽</p>
      </div>
      <button class="basket__add-button text text_s">ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  </div>
  <div class="basket-background" ref="background" @click="closeBasket"></div>
</template>

<script>
  import BasketItem from './BasketItem';

  export default {
    name: 'Basket',
    components: {
      BasketItem
    },
    methods: {
      closeBasket(){
        this.$refs.basket.style.transform = "translateX(0px)";
        this.$refs.background.style.display = "none";
        document.querySelector('body').style.overflow = 'auto';
      }
    },
    computed:{
      getSum(){
        return this.$store.getters.getSumOfBasketStuff()
      },
      getNumOfStuff(){
        const value = this.$store.getters.getNumOfBasketStuff;
        if (value > 1 && value < 5) return `${value} товара`
        else if (value === 1) return `${value} товар`
        return `${value} товаров`;
      }
    }
  };
</script>

<style lang="scss">
  .basket {
    position: fixed;
    z-index: 1;
    top: 0;
    right: -600px;
    width: 600px;
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    padding: 30px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

    &__wrapper {
      height: 100%;
      flex-grow: 0;
      overflow: scroll;
    }

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__heading {
      font-size: 30px;
      font-weight: 500;
      line-height: 26.4px;
      letter-spacing: -0.04em;
      text-align: left;
    }

    &__close-button {
      width: 48px;
      height: 48px;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 100%;

      &::before,
      &::after  {
        content: '';
        width: 17px;
        color: rgb(31, 32, 32);
        position: absolute;
        top: 23px;
        left: 14px;
        border: 1px solid;
        border-radius: 1px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;
      margin: 80px 0 10px 0;
    }

    &__clear {
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 15.68px;
      opacity: 40%;
    }

    &__total {
      display: flex;
      justify-content: space-between;
    }

    &__cost {
      margin-bottom: 6px;
      color: rgba(31, 32, 32, 1);
    }

    &__cost-value {
      font-size: 30px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.02em;
      color: rgba(31, 32, 32, 1);
    }

    &__add-button {
      width: 240px;
      height: 56px;
      border-radius: 4px;
      background: rgba(123, 184, 153, 1);
    }
  }
  .basket-background{
    display: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }
</style>
