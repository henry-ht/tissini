<template>
  <NavBar/>

  <div class="container py-4">
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>