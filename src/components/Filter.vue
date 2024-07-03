<template>
  <form class="filter" @change="filter">
    <label class="filter__item text">
      <input class='filter__input switch' type="radio" name='filter' value='new' v-model="filterValue">НОВИНКИ</label>
    <label class="filter__item text">
      <input class='filter__input switch' type="radio" name='filter' value='exist' v-model="filterValue">ЕСТЬ В НАЛИЧИИ</label>
    <label class="filter__item text">
      <input class='filter__input switch' type="radio" name='filter' value='used' v-model="filterValue">КОНТРАКТНЫЕ</label>
    <label class="filter__item text">
      <input class='filter__input switch' type="radio" name='filter' value='exclusive' v-model="filterValue">ЭКСКЛЮЗИВНЫЕ</label>
    <label class="filter__item text">
      <input class='filter__input switch' type="radio" name='filter' value='sale' v-model="filterValue">РАСПРОДАЖА</label>
  </form>
</template>

<script>
export default {
  name: 'Filter',
  data(){
    return {
      filterValue: null
    }
  },
  methods: {
    filter(){
      switch (this.filterValue) {
        case 'new':
          this.$store.dispatch('fetchData', {name: 'newProduct', value: true})
          break;
        case 'exist':
          this.$store.dispatch('fetchData', {name: 'inStock', value: true})
          break;
        case 'used':
          this.$store.dispatch('fetchData', {name: 'used', value: true})
          break;
        case 'exclusive':
          this.$store.dispatch('fetchData', {name: 'exclusive', value: true})
          break;
        case 'sale':
          this.$store.dispatch('fetchData', {name: 'sale', value: true})
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss">
  .filter {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item{
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      width: max-content;    
      cursor: pointer;
    }

    &__input {
      appearance: none;
      width: 36px;
      height: 22px;
      cursor: pointer;
      background: rgba(242, 242, 242, 1);
      position: relative;
      vertical-align: middle;
      margin-right: 12px;

      &::after{
        content: '';
        left: 0;
        top: 0;
        position: absolute;
      }

      &:checked {
        background: rgba(123, 184, 153, 1);
      }
    }
  }

  .switch{
    width: 36px;
    height: 22px;
    border-radius: 11px;

    &::after{
      left: 7px;
      top: 7px;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      background: rgba(31, 32, 32, 1);
    }

    &:checked{

      &::after{
        transform: translateX(14px);
      }
    }
  }
</style>
