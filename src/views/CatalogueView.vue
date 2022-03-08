<template>
  <NavBar />
  <div class="container pt-5">
    <section class="row">
      <aside class="col-md-12" v-if="catalogues.length == 0" >
        <img src="../assets/img/load/load_1.gif" class="m-auto d-block img-fluid img-size-1" alt="load gif" />
      </aside>
      <div class="row mt-5">
        <h2 v-if="catalogues.length > 0" >
          PRODUCTOS
        </h2>
          <div class="col-md-2 mb-2" v-for="item in catalogues" v-bind:key="item.id"  >
            <div class="card">
              <img class="card-img-top" :src="'https://v3.tissini.app/'+item.images[0].url" :alt="item.name">
              <div class="card-body">
                <p class="card-text">
                  <small class="d-block small text-warning">
                    ${{item.price}}
                  </small>
                </p>
                <button type="button" class="btn btn-success btn-sm rounded" >
                  <font-awesome-icon icon="cart-shopping" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<style v-if="true">
.img-size-1{
  width: 5rem;
}
</style>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  data: () => ({
      catalogues: [],
  }),
  name: 'CatalogueView',
  components: {
    NavBar
  },
  created(){
    this.getCatalogue()
  },
  methods: {
    getCatalogue: function() {
      axios.get("https://v3.tissini.app/api/v3/categories/1/products/multivendor")
        .then((result) => {
          if(result.data.products.length){
            this.catalogues = result.data.products; 
          }
        })
    }
  }
}
</script>
