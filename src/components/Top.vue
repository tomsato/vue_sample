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
  <div id="top">
    <p>top</p>
  </div>
</template>

<script>
  // JSを記述する
  export default {
    name: 'Top'
  }
</script>

<style>
  /*
    CSSを記述する
    ここで記述したCSSはtemplateで記述したHTMLにしか反映されない
  */
  #top {
    background-color: lavenderBlush;
  }
</style>
