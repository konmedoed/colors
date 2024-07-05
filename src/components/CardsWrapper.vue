<template>
  <main class="main">
    <div class="main__wrapper">
      <Filter/>
      <section class="main__cards-block">
        <div class="main__sort-block">
          <button class="main__open-filter-button text text_s" @click="openFilter">ФИЛЬТРЫ</button>
          <p class="main__stuff-sum text text_s">{{ calculateStuff() }}</p>
          <Dropdown/>
        </div>
        <div class="main__cards">
          <Card 
            v-for="card in this.$store.state.data.slice(0,15)"
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
    methods: {
      calculateStuff(){
        const value = this.$store.getters.getSumOfStuff;
        if (value > 1 && value < 5) return `${value} ТОВАРА`
        else if (value === 1) return `${value} ТОВАР`
        return `${value} ТОВАРОВ`;
      },
      openFilter(){
        document.querySelector('.filter').classList.add('opened-filter');
        document.querySelector('.background-filter').classList.add('opened-filter');
      }
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

  &__open-filter-button {
    display: none;
  }
}

@media (max-width: 1439.9px ) {
  .main {
    padding: 72px 20px 0 20px;

    &__wrapper {
      gap: 10px;
    }

    &__cards {
      grid-template-columns: repeat(4, 1fr);
      gap: 10px 15px;
    }
  }
}

@media (max-width: 1023.9px ){
  .main {
    padding: 40px 10px 0 10px;

    &__cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px 15px;
    }
  }
}

@media (max-width: 767.9px ){
  .main {

    &__cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 5px 10px;
    }

    &__open-filter-button {
      display: block;
    }

    &__stuff-sum {
      display: none;
    }
  }
}

@media (max-width: 599.9px ){
  .main {

    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
