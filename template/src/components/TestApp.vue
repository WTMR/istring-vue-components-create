<template>
  <div class="Main">
    <h1>Hello {{ name }}!</h1>
    <input v-model="value" />
  </div>
</template>

<script>
  export default {
    name: 'testApp',

    data() {
      return {
        value: 'Hello Istrong',
      }
    },
  }
</script>

<style>
.Main h1 {
  color: #40b883;
}
</style>