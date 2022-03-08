<template>
  <NavBar />
  <div class="container pt-5">
    <section class="row">
      <aside class="col-md-12" v-if="sections.length == 0" >
        <img src="../assets/img/load/load_1.gif" class="m-auto d-block img-fluid img-size-1" alt="load gif" />
      </aside>
      <article class="col-md-12 shadow-sm mb-5" v-for="item in sections" v-bind:key="item.id" >
        <h2>
          {{item.name}}
        </h2>
        <img :src="'https://v3.tissini.app/'+item.image" class="w-100 shadow-sm" :alt="item.name" />
        <div class="row mt-5">
          <div class="col-md-2 mb-2" v-for="item_2 in item.products" v-bind:key="item_2.id"  >
            <div class="card">
              <img class="card-img-top" :src="'https://v3.tissini.app/'+item_2.image.url" :alt="item_2.name">
              <div class="card-body">
                <h5 class="card-title">
                  {{item_2.name}}
                </h5>
                <p class="card-text">
                  {{item_2.categories.category}}
                  <small class="d-block small text-warning">
                    ${{item_2.price}}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style v-if="true">
body{
  background-image: none;
  background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
}
.img-size-1{
  width: 5rem;
}
</style>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  data: () => ({
      sections: [],
  }),
  name: 'HomeView',
  components: {
    NavBar
  },
  created(){
    this.getSections()
  },
  methods: {
    getSections: function() {
      axios.get("https://v3.tissini.app/api/v3/categories/sections")
        .then((result) => {
          console.log('section ', result)
          if(result.data.length){
            this.sections = result.data; 
          }
        })
    }
  }
}
</script>