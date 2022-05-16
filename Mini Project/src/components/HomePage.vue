<template>
<div class="div1">
    
<HeaderPage/>
<br><br>
<h2>English Course Management</h2>


<div class="container">
  <div class="row">
    <div class="col">
      <img src="../assets/add.png"/>
    </div>
    <div class="col">
        <p>English course management application is a data management application for
        students who take English courses. So far, a lot of data collection has been carried out
        manually, the risk of losing data is very large, for that an application is made
        this website to meet these needs, store data safely and effectively.
        </p>

    </div>
    <div class="col">
       <br><br><br><br>
     <router-link to="/add-page" class="btn btn-outline-danger">Add Student</router-link>
  
    </div>

    <div class="row">
        <div class="col">
           <img src="../assets/state2.png"/> 
        </div>

        <div class="col">
          <p>English course management application is a data management application for
        students who take English courses. So far, a lot of data collection has been carried out
        manually, the risk of losing data is very large, for that an application is made
        this website to meet these needs, store data safely and effectively.
        </p>  
        </div>

        <div class="col">
            <br><br><br><br>
       <router-link to="/update-page/:id" class="btn btn-outline-danger">Update Student</router-link><br><br>
        </div>

    </div>

    <div class="row">
        <div class="col">
           <img src="../assets/see.png"/> 
        </div>

        <div class="col">
          <p>English course management application is a data management application for
        students who take English courses. So far, a lot of data collection has been carried out
        manually, the risk of losing data is very large, for that an application is made
        this website to meet these needs, store data safely and effectively.
        </p>  
        </div>

        <div class="col">
            <br><br><br><br>
<router-link to="/data-person" class="btn btn-outline-danger">See Student</router-link><br><br>
        </div>

    </div>


    
    
  </div>
</div>
 
</div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default{
    name: 'HomePage',

    data(){
        return{
            name:''
        }
    },
    components:{
        HeaderPage
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name: 'SignUp'})
        }
    }
}

</script>

<style>

.logo{
    height:40px;
}
</style>

