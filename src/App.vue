<!--
単一ファイルコンポーネントについて
https://jp.vuejs.org/v2/guide/single-file-components.html

単一ファイルコンポーネントでは
<template>、<script>、<style>
の三つのブロックで構成されている
-->

<template>
  <!--
    HTMLを記述する
    template内では1つのタグで囲まれている必要があるので
    <div></div><div></div>など2つ以上のタグを記述することはできない
  -->
  <div id="app">
    <header>
      <p>headerだよ</p>
      <Mainmenu />
    </header>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <footer>
      <p>footerだよ</p>
    </footer>
  </div>
</template>

<script>
  // JSを記述する
  import Mainmenu from './components/Mainmenu.vue'
  export default {
    name: 'App',
    components: {
      // 他のファイルを読み込んでtemplateに配置することができる
      Mainmenu: Mainmenu
    }
  }
</script>

<style>
  /*
    CSSを記述する
    ここで記述したCSSはtemplateで記述したHTMLにしか反映されない
  */
  #app {
    background-color: LightGreen;
    padding: 15px;
  }
  header {
    background-color: LightBlue;
    padding: 15px;
  }
  footer {
    background-color: Khaki;
  }
</style>
