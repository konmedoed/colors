<template>
  <header class="header">
    <div class="header__wrapper">

      <button class="header__burger burger" @click="toggleBurgerMenu">
        <div class="burger__row"></div>
        <div class="burger__row"></div>
        <div class="burger__row"></div>
      </button>
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
      <button class="header__basket" @click="openBasket">{{ this.$store.getters.getNumOfBasketStuff }}</button>
    </div>
    
    <div class="header__burger-menu closed" ref="burgerMenu">
      <div class="header__burger-links-wrapper">
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
      <div class="header__burger-icons">
        <button class="header__search"><SvgSearch /></button>
        <button class="header__profile"><SvgProfile /></button>
        <button class="header__heart"><SvgHeart /></button>
      </div>
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
    SvgSearch
  },
  data() {
    return {
      links: ['ПРОДУКТЫ', 'ЦВЕТА', 'ВДОХНОВЕНИЕ', 'СОВЕТЫ', 'НАЙТИ МАГАЗИН'],
    };
  },
  methods: {
    openBasket(){//я знаю, что это неправильно, но, к сожалению, не успевал :(
      document.querySelector('.basket').style.right = "0";
      document.querySelector('.basket-background').style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
    },
    toggleBurgerMenu() {
      if (this.$refs.burgerMenu.classList.contains('closed')) {
        this.$refs.burgerMenu.style.left = "0px";
        this.$refs.burgerMenu.classList.remove('closed');
        document.querySelector('body').style.overflow = 'hidden';
      }
      else {
        this.$refs.burgerMenu.style.left = "-375px";
        this.$refs.burgerMenu.classList.add('closed');
        document.querySelector('body').style.overflow = 'auto';
      }
    }
  }
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

  &__burger,
  &__burger-menu {
    display: none;
  }
}

@media (max-width: 1439.9px ) {
  .header {
    &__wrapper {
      padding: 0 20px;
    }

    &__links-wrapper {
      margin: 0 23px 0 34px;
    }

    &__navigation {
      gap: 10px;
    }
  }
}

@media (max-width: 1023.9px ) {
  .header {
    &__wrapper {
      padding: 0 10px;
    }

    &__links-wrapper {
      margin: 0 10px 0 10px;
    }

    &__link {
      font-size: 0.75rem;
    }

    &__icons {
      gap: 5px;
      margin-right: 5px;
    }

    &__phone-number {
      font-size: 0.75rem;
      letter-spacing: -1.32px;
    }
  }
}

@media (max-width: 767.9px ) {
  .header {
    width: 100vw;
    position: fixed;
    z-index: 2;
    background: rgba(255, 255, 255, 1);

    &__burger,
    &__burger-menu {
      display: block;
    }

    &__links-wrapper,
    &__icons {
      display: none;
    }

    &__wrapper {
      justify-content: space-between;
      padding: 0 40px;
      z-index: 2;
    }

    &__burger-menu {
      width: 375px;
      height: 100vh;
      position: fixed;
      z-index: 1;
      top: 0;
      left: -375px;
      background: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition-duration: 300ms;
      transition-timing-function: ease-in-out;
    }

    &__burger-links-wrapper {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    &__navigation {
      flex-direction: column;
      gap: 24px
    }

    &__link {
      font-size: 1rem;
    }

    &__phone {
      align-items: center;
    }

    &__phone-number {
      font-size: 1rem;
      letter-spacing: -0.32px;
    }

    &__burger-icons {
      display: flex;
      justify-content: space-around;
      margin-bottom: 24px;
    }
  }

  .burger {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__row {
      width: 24px;
      height: 2px;
      background: rgba(31, 32, 32, 1);

    }
  }
}

@media (max-width: 424.9px ) {
  .header {
    height: 64px;

    &__wrapper {
      padding: 0 24px;
    }

    &__logo {
      scale: 0.75;
    }
  }
}
</style>
