<template>
  <div>
    <div class="ui container">
      <navbar></navbar>
      <div class="ui divider"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
