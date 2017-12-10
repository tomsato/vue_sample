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
  <div id="contents2">
    <p>contents2</p>
    <button v-on:click="sample_method">sampleMethodを実行!!</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
  // JSを記述する
  export default {
    name: 'Contents2',
    data: function () {
      return {
        message: 'click前'
      }
    },
    methods: {
      // template内で使う関数の定義
      sample_method () {
        this.message = 'click後'
        console.log('sampleMethodを実行!!')
      }
    },
    // インスタンスのライフサイクルについて
    // https://012-jp.vuejs.org/api/options.html#ライフサイクル
    // https://jp.vuejs.org/v2/guide/instance.html#ライフサイクルダイアグラム
    beforeCreate: function () {
      console.log('beforeCreate')
      console.log('  インスタンスが作成される前の処理')
    },
    created: function () {
      console.log('created')
      console.log('  インスタンスが作成された後の処理')
    },
    beforeMount: function () {
      console.log('beforeMount')
      console.log('  DOMにマウントされる前の処理')
    },
    mounted: function () {
      console.log('mounted')
      console.log('  DOMにマウントされた後の処理')
    },
    beforeUpdate: function () {
      console.log('beforeUpdate')
      console.log('  データがアップデートされDOMが更新される前の処理')
    },
    updated: function () {
      console.log('updated')
      console.log('  DOMが更新された後の処理')
    },
    beforeDestroy: function () {
      console.log('beforeDestroy')
      console.log('  インスタンスが削除される前の処理')
    },
    destroyed: function () {
      console.log('destroyed')
      console.log('  インスタンスが削除される後の処理')
    }
  }
</script>

<style>
  /*
    CSSを記述する
    ここで記述したCSSはtemplateで記述したHTMLにしか反映されない
  */
  #contents2 {
    background-color: lavenderBlush;
  }
</style>
