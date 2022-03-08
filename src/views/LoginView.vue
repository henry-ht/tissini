<template>
  <div class="bg-1">
  </div>
  <div class="div-center">
    <div class="content p-3">
      <form @submit.prevent="onSubmit()">
          <img alt="tinisino" class="d-block m-auto img-size-logo" src="../assets/img/logo.png">
          <h3 class="text-white text-center mt-5 mb-3">
            Ingresa el número de teléfono
            de tu asesora independiente.
          </h3>
          <div class="form-group">
            <input class="form-control bg-transparent text-white fw-bold h1" maxlength="12" placeholder="Telefono" v-model="tel" type="tel">
          </div>
      </form>
    </div>
  </div>
   
</template>

<script>
import axios from 'axios';

export default { 
    data: () => ({
      tel: null,
    }),
    methods: {
      async onSubmit () {
        axios.post("https://v3.tissini.app/api/v3/login/client", {mobilephone: this.tel})
        .then((result) => {
          if(result.data.customer){
            localStorage.setItem('categories', JSON.stringify(result.data.categories));
            localStorage.setItem('customer', JSON.stringify(result.data.customer));
            this.$router.push('/home');
          }
        })
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-1{
  background-image: url('../assets/img/bg-1.jpg');
  background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  position: absolute;
}
.img-size-logo{
  width: 13rem;
}

.div-center {
  width: 30rem;
  height: auto;
  position: absolute;
  background-color: transparent;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: auto;
  display: table;
}

div.content {
  display: table-cell;
  vertical-align: middle;
}
</style>
