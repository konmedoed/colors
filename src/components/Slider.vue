<template>
  <div class="slider">
    <div class="slider__pages">
      <p class="slider__page text">ГЛАВНАЯ</p>
      <div class="slider__point"></div>
      <p class="slider__page text">ПРОДУКТЫ</p>
      <div class="slider__point"></div>
      <p class="slider__page text">КРАСКИ</p>
    </div>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
      <SplideSlide>
        <div class="slide__content">
          <p class="slide__heading text">Краски</p>
          <p class="slide__slogan text">Идеально подходят для стен и других поверхностей.<br>Найди свой идеальный цвет!</p>
        </div>
        <img src="../assets/slide1.png" alt="slide №1">
      </SplideSlide>
    </Splide>
  </div>
    
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default ( {
  name: 'Slider',
  components: {
    Splide,
    SplideSlide,
  },
} );
</script>

<style lang="scss">
.slider{
  width: 100vw;
  height: 560px;
  position: relative;

  &__pages {
    position: absolute;
    top: 32px;
    left: 64px;
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.3;
    color: rgba(255, 255, 255, 1);
    z-index: 1;
  }

  &__point {
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 1);
  }

  &__page {
    font-size: 10px;
    letter-spacing: 0.06em;
  }
}

.slide {
  &__content {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 217px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  &__heading {
    font-size: 72px;
    line-height: 63.36px;
    letter-spacing: -0.02em;
  }

  &__slogan {
    font-weight: 500;
    line-height: 20.8px;
    letter-spacing: 0.02em;
  }
}

.splide__pagination{
  width: max-content;
  padding: 13px 20px 13px 20px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  position: relative;
  bottom: 70px;
  left: 8px;

  &__page {
    width: 6px;
    height: 6px;
    margin: 0 4px;
    opacity: 0.2;
  }

  li {
    display: flex;
  }
}

.is-active {
  opacity: 1;
}

.splide__arrow {
  width: 80px;
  height: 80px;
  background: none;
  top: 63%;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  svg {
    display: none;
  }
}

.splide__arrow--prev {
  left: 394px;
  opacity: 0;

  &:hover {
    opacity: 100%;
  }

  &::before {
    content: '';
    width: 28px;
    border: 2px solid rgba(255, 255, 255, 1);
    position: absolute;
    top: 28px;
    left: 20px;
    border-radius: 1px;
    transform: rotate(-45deg);
    
  }

  &::after {
    content: '';
    width: 28px;
    border: 2px solid rgba(255, 255, 255, 1);
    position: absolute;
    top: 48px;
    left: 20px;
    border-radius: 1px;
    transform: rotate(45deg);
  }
}

.splide__arrow--next {
  right: 394px;
  opacity: 0;

  &:hover {
    opacity: 100%;
  }

  &::before {
    content: '';
    width: 28px;
    border: 2px solid rgba(255, 255, 255, 1);
    position: absolute;
    top: 28px;
    left: 28px;
    border-radius: 1px;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    width: 28px;
    border: 2px solid rgba(255, 255, 255, 1);
    position: absolute;
    top: 48px;
    left: 28px;
    border-radius: 1px;
    transform: rotate(-45deg);
  }
}

@media (max-width: 767.9px ) {
  .slider {
    margin-top: 104px;
  }
}

@media (max-width: 424.9px ){
  .splide {
    display: none;
  }

  .slider {
    width: 100%;
    height: 74px;
    padding: 0 24px;


    &__pages {
      top: 16px;
      left: 24px;
      color: rgba(31, 32, 32, 1);
    }
  }
}
</style>