<template>
  <div id="app">
    <TabsComponent></TabsComponent>
  </div>
</template>

<script>
  import TabsComponent from "./components/Tabs";
  import Component from "vue-class-component";
  import Vue from "vue";

  @Component({
    name: 'app',
    components: {TabsComponent}
  })
  export default class App extends Vue {
  }
</script>
