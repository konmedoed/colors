<template>
  <main class="main">
    <div class="main__wrapper">
      <Filter/>
      <section class="main__cards-block">
        <div class="main__sort-block">
          <p class="stuff-sum text text_s">{{ getSumOfStuff }} ТОВАРОВ</p>
          <Dropdown/>
        </div>
        <div class="main__cards">
          <Card 
            v-for="card in cards.slice(0,15)"
            :card="card"
            :key="card.id"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import Card from './Card';
  import Filter from './Filter';
  import Dropdown from './Dropdown';
  import {mapGetters} from 'vuex';

  export default {
    name: 'CardsWrapper',
    components: {
      Card,
      Dropdown,
      Filter
    },
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'getSumOfStuff'
      ])
    }
  };
</script>

<style lang="scss">
.main {
  padding: 72px 64px 0 64px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__sort-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
  }

  &__cards-block {
    max-width: 1486px;
    width: 100%;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 17px 21px;
  }
}
</style>
