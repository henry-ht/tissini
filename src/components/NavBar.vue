<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">TISSINI</router-link>
            
            <div class="d-inline p-1 d-lg-none d-block fw-bold text-capitalize text-white">
                {{name}}
            </div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- ms-auto mb-2 mb-lg-0 -->
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/categories">Categories</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/catalogue">Catalogo</router-link>
                    </li>
                </ul>
            </div>
            <div class="d-inline p-1 d-none d-lg-block fw-bold text-capitalize text-white">
                {{name}}
            </div>
        </div>
    </nav>
</template>
<script>
let customer = JSON.parse(localStorage.getItem('customer'));

export default {
    data: () => ({
      name: customer.firstname+' '+customer.lastname,
    })
};
</script>
