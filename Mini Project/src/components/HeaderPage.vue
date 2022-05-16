<template>
   <div class="nav">
       <router-link to="/">Home</router-link>
       <router-link>Add</router-link>
       <router-link>Update</router-link>
       <router-link to="/data-person">Data</router-link>
       <a v-on:click="logout" href="#">Logout</a>

   </div>
</template>

<script>
export default{
    name:'HeaderPage',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'SignUp'})
        }

    }
}
</script>

<style>
.nav{
    background-color: rgb(205, 25, 19);
    overflow:hidden;

}

.nav a{
    float:left;
    color:white;
    padding:14px 16px;
    text-align: center;
    font-size:17px;
    text-decoration: none;
    margin-right:5px;
}

.nav a:hover{
    background:white;
    color: #333;
    border-radius: 2px;
}

</style>