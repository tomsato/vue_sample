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
  <div id="menu">
    <p>メインメニュー</p>
    <ul>
      <li><a href="/">/topへのリンク</a></li>
      <li><a href="/contents1">/contents1へのリンク</a></li>
      <li><a href="/contents2">/contents2へのリンク</a></li>
    </ul>
  </div>
</template>

<script>
  // JSを記述する
  export default {
    name: 'Mainmenu'
  }
</script>

<style>
  /*
    CSSを記述する
    ここで記述したCSSはtemplateで記述したHTMLにしか反映されない
  */
  #menu {
    background-color: azure;
  }
</style>