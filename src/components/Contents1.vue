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
  <div id="contents1">
    <p>contents1</p>
    <p>axiosを使ってAPIを叩いて結果を表示させる</p>
    <button v-on:click="get_api">click me!</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  // JSを記述する
  export default {
    name: 'Contents1',
    data: function () {
      // template内で使う変数の定義
      return {
        message: '取得結果'
      }
    },
    methods: {
      // template内で使う関数の定義
      get_api (event) {
        axios.get('https://api.github.com/users/tomsato/repos')
          .then(res => {
            this.message = res.data
            console.log(res.status, res.statusText, res.data)
          })
          .catch(error => {
            throw error
          })
      }
    }
  }
</script>

<style>
  /*
    CSSを記述する
    ここで記述したCSSはtemplateで記述したHTMLにしか反映されない
  */
  #contents1 {
    background-color: lavenderBlush;
  }
</style>
