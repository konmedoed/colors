<template>
  <Header />
  <Slider />
  <CardsWrapper :cards = 'this.$store.state.data'/>
  <Footer />
</template>

<script>
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import CardsWrapper from '@/components/CardsWrapper';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Slider,
    CardsWrapper,
    Footer
  },
  beforeMount(){
    this.$store.dispatch('fetchData');
  },
  methods: {
  }
};
</script>

<style lang="scss">
#app {
}
</style>
