<template>
  <div class="item" >
    <hr>
    <div class="item__wrapper">
      <div class="item__data-wrapper">
        <div class="item__content">
          <img :src="imagePath" alt="" class="item__img">
          <div class="item__data">
            <p class="item__name text text_l">{{ item.card.name }}</p>
            <p class="item__price text">{{ item.card.price }} ₽</p>
          </div>
        </div>
        <div class="item__num-manage">
          <button class="item__remove-button" @click="this.$store.dispatch('removeOne', item.card.id)"></button>
          <p class="item__value text">{{ item.sum }}</p>
          <button class="item__add-button" @click="this.$store.dispatch('addInBasket', item.card.id)"></button>
        </div>
      </div>
      <button v-if="!isFaded" class="item__delete-button" @click="this.$store.dispatch('deleteItem', item.card.id)"></button>
      <button v-if="isFaded" class="item__revert-button" @click="this.$store.dispatch('addFromFaded', item.card.id)"><Revert/></button>
    </div>
    <div class="item__faded" v-if="isFaded"></div>
  </div>
</template>

<script>
import Revert from '../SVGs/Revert'
export default {
  name: 'BasketItem',
  components:{
    Revert
  },
  props: {
    item: {
        type: Object,
        required: true,
      },
    isFaded: true || false
  },
  computed: {
      imagePath() {
        if (this.item.card.img !== '') {
          return require(`@/assets/${this.item.card.img}`);
        }
      },

    }
};
</script>

<style lang="scss">
  .item {
    position: relative;

    &__wrapper {
      display: flex;
      align-items: center;
    }

    &__data-wrapper {
      margin: 12px 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__content {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__revert-button {
      position: relative;
      z-index: 1;
    }

    &__img {
      width: 96px;
    }

    &__data {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 165px;
    }

    &__price {
      color: rgba(31, 32, 32, 1);
      font-size: 1rem;
      font-weight: 600;
    }

    &__num-manage {
      display: flex;
      align-items: center;
      margin-right: 37px;
    }

    &__value {
      margin: 3px 19px 5px 21px;
      color: rgba(31, 32, 32, 1);
    }

    &__delete-button {
      width: 24px;
      height: 24px;    
      position: relative;
      opacity: 20%;

      &::before {
        content: '';
        width: 12px;
        color: rgba(31, 32, 32, 1);
        position: absolute;
        top: 11px;
        left: 5px;
        border: 1px solid;
        border-radius: 1px;
        transform: rotate(45deg);
      }

      &::after {
        content: '';
        width: 12px;
        color: rgba(31, 32, 32, 1);
        position: absolute;
        top: 11px;
        left: 5px;
        border: 1px solid;
        border-radius: 1px;
        transform: rotate(-45deg);
      }
    }

    &__remove-button,
    &__add-button {
      width: 40px;
      height: 24px;
      border-radius: 4px;
      background: rgba(242, 242, 242, 1);
      position: relative;
    }

    &__remove-button {

      &::after {
        content: '';
        width: 8px;
        color: rgba(31, 32, 32, 1);
        position: absolute;
        top: 11px;
        left: 15px;
        border: 1px solid;
        border-radius: 1px;
      }
    }

    &__add-button {
      &::before {
        content: '';
        width: 8px;
        color: rgba(31, 32, 32, 1);
        position: absolute;
        top: 11px;
        left: 15px;
        border: 1px solid;
        border-radius: 1px;
        transform: rotate(90deg);
      }

      &::after {
        content: '';
        width: 8px;
        color: rgba(31, 32, 32, 1);
        position: absolute;
        top: 11px;
        left: 15px;
        border: 1px solid;
        border-radius: 1px;
      }
    }

    &__faded {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: 424.9px ){
    .item{
      
      &__name{
        font-size: 0.875rem;
      }

      &__num-manage {
        flex-direction: column;
      }
    }
  }
</style>
