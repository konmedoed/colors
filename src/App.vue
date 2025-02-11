<template>
  <Header />
  <Slider />
  <CardsWrapper />
  <Footer />
  <Basket />
</template>

<script>
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import CardsWrapper from '@/components/CardsWrapper';
import Footer from '@/components/Footer';
import Basket from '@/components/Basket';

export default {
  components: {
    Header,
    Slider,
    CardsWrapper,
    Footer,
    Basket
  },
  beforeMount(){
    this.$store.dispatch('fetchData');
  }
};
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
