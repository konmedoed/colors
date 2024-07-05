<template>
  <div class="card" :id="this.card.id">
    <div class="card__img-block">
      <div class="card__img-wrapper">
        <img :src="imagePath" :alt=card.name class="card__img">
      </div>
    </div>
    <div class="card__data">
      <p class="card__name text text_l">{{ card.name }}</p>
      <p class="card__price text">{{ card.price }} ₽</p>
    </div>
    <button
      class="card__add-button"
      @click="this.$store.dispatch('addInBasket', this.card.id)">+
    </button>
    <button
      class="card__add-button"
      @click="this.$store.dispatch('addInBasket', this.card.id)">+
    </button>
  </div>
</template>

<script>

  export default {
    name: 'Card',
    props:{
      card: {
        type: Object,
        required: true,
      }
    },
    computed: {
      imagePath() {
        if (this.card.img !== '') {
          return require(`@/assets/${this.card.img}`);
        }
      }
    }
  };
</script>

<style lang="scss">
.card {
  height: 376px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__img-block {
    width: 100%;
    height: 278px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
  }

  &__data {
    display: flex;
    flex-direction: column;
    gap: 21px;
  }

  &__add-button {
    width: 80px;
    height: 32px;
    border-radius: 8px;
    background: rgba(123, 184, 153, 1);
    position: absolute;
    bottom: 16px;
    right: 0px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &__price{
    font-weight: 600;
    color: rgba(31, 32, 32, 1);

  }
}

.card:hover .card__add-button{
  opacity: 1;
}

.card:hover .card__img{
  scale: 1.5;
}

@media (max-width: 1439.9px ) {
  .card {
    &__img {
      height: 180px;
      width: 180px;
    }
  }
}

@media (max-width: 767.9px ) {
  .card {
    &__img {
      height: 140px;
      width: 140px;
    }
  }
}

@media (max-width: 424.9px ) {
  .card {
    height: 270px;

    &__img {
      height: 112px;
      width: 112px;
    }
  }
}
</style>
