<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo"><SvgLogo /></div>
      <div class="header__links-wrapper">
        <div class="header__navigation">
          <button class="header__link text" v-for="link in links">{{ link }}</button>
        </div>
        <div class="header__phone">
          <a href="tel:+74952217769" class="header__phone-number text"
            >+7 (495) 221-77-69</a
          >
          <button class="header__callback text">Заказать звонок</button>
      </div>
      </div>
      
      <div class="header__icons">
        <button class="header__search"><SvgSearch /></button>
        <button class="header__profile"><SvgProfile /></button>
        <button class="header__heart"><SvgHeart /></button>
      </div>
      <button class="header__basket">{{ stuff }}</button>
    </div>
    
  </header>
</template>

<script>
import SvgLogo from '../SVGs/Logo';
import SvgSearch from '../SVGs/Search';
import SvgProfile from '../SVGs/Profile';
import SvgHeart from '../SVGs/Heart';

export default {
  name: 'Header',
  components: {
    SvgLogo,
    SvgProfile,
    SvgHeart,
    SvgSearch,
  },
  data() {
    return {
      links: ['ПРОДУКТЫ', 'ЦВЕТА', 'ВДОХНОВЕНИЕ', 'СОВЕТЫ', 'НАЙТИ МАГАЗИН'],
      stuff: 5
    };
  },
};
</script>

<style lang="scss">
.header {
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 64px;
  }

  &__links-wrapper{
    display: flex;
    justify-content: space-between;
    margin: 0 116px 0 172px;
    width: 100%;
  }

  &__link {
    font-size: 0.875rem;
    letter-spacing: 0.8px;
  }

  &__icons,
  &__navigation {
    display: flex;
    gap: 24px;
  }

  &__icons{
    margin-right: 24px;
  }

  &__phone {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__phone-number{
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: -0.32px;
  }

  &__callback{
    font-size: 0.875rem;
    color: rgba(31, 32, 32, 1);
    opacity: 30%;
  }

  &__basket {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #7BB899;
    flex-shrink: 0;
  }
}
</style>
