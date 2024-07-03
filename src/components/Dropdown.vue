<template>
  <div class="dropdown">
    <div class="dropdown__background" ref="background" @click="closeDropdown"></div>
    <div class="dropdown__wrapper">
      <div class="dropdown__icon"></div>
      <button class="dropdown__button text text_s" @click="openDropdown">{{ getWord() }}</button>
      <div class="dropdown__list" ref="dropdown">
        <button
          class="dropdown__list-item text text_s" 
          @click="()=>{
            this.$store.dispatch('sortByPrice', 'big');
            changeSortWord('СНАЧАЛА ДОРОГИЕ');
          }"
        >СНАЧАЛА ДОРОГИЕ</button>
        <button class="dropdown__list-item text text_s" @click="()=>{
          this.$store.dispatch('sortByPrice', 'low');
          changeSortWord('СНАЧАЛА НЕДОРОГИЕ');
        }">СНАЧАЛА НЕДОРОГИЕ</button>
        <button class="dropdown__list-item text text_s" @click="changeSortWord('СНАЧАЛА ПОПУЛЯРНЫЕ')">СНАЧАЛА ПОПУЛЯРНЫЕ</button>
        <button class="dropdown__list-item text text_s" @click="changeSortWord('СНАЧАЛА НОВЫЕ')">СНАЧАЛА НОВЫЕ</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    data(){
      return {
        sortWord: null
      }
    },
    methods:{
      changeSortWord(str){
        this.sortWord = str;
        this.closeDropdown();
      },
      getWord(){
        if (this.sortWord) return this.sortWord
        else return 'СНАЧАЛА ДОРОГИЕ'
      },
      openDropdown(){
        this.$refs.dropdown.style.display = 'block';
        this.$refs.background.style.display = 'block';
      },
      closeDropdown(){
        this.$refs.dropdown.style.display = 'none';
        this.$refs.background.style.display = 'none';
      },
      sortByLowPrice(){
        this.$store.dispatch('sortByPrice', 'low');
        this.closeDropdown();
      },
      sortByHightPrice(){
        this.$store.dispatch('sortByPrice', 'big');
        this.closeDropdown();
      },
    }
  };
</script>

<style lang="scss">
  .dropdown{
    &__wrapper{
      position: relative;
      width: max-content;
    }

    &__button{
      width: max-content;
      padding-right: 13px;
    }

    &__list{
      list-style-type: none;
      background: rgba(255, 255, 255, 1);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: none;
    }

    &__list-item{
      width: 248px;
      height: 48px;
      padding: 0 0 0 24px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover{
        background: rgba(123, 184, 153, 1);   
      }
      &:focus{
        background: rgba(123, 184, 153, 1);
        outline: none;
      }
    }

    &__icon{
      position: absolute;
      top: 30%;
      right: 1px;
      display: block;
      pointer-events: none;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 6px 4px 0 4px;
      border-color: rgb(32, 32, 32) transparent transparent transparent;
      transform: rotate(0deg);
    }

    &__background{
      display: none;
      position: absolute;
      z-index: 2;
      width: 100vw;
      height: 200vh;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  
</style>
