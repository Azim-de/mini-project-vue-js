<template>
<div class="signup">
    <br>
    <h2>English Course Management</h2>
    <img src="../assets/state2.png">
<img src="../assets/add.png">
<img src="../assets/see.png">

    <div class="font"><h2>SignUp</h2>
<div class="register">
<input type="text" v-model="name" placeholder="Enter Name"/>
<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="password" v-model="password" placeholder="Enter Password/">
<button class="btn btn-outline-dark" v-on:click="signUp">Sign Up</button>
<p>
    <router-link to="/login-page">Login</router-link>
</p>
</div>
</div>
</div>






</template>


<script>
import axios from 'axios'
export default{
    name : 'SignUp',
    data(){
        return{
            name :'',
            email:'',
            password:''
        }
    },
    methods:{
       async signUp(){
        let result = await axios.post("http://localhost:3000/users",{
            email:this.email,
            password:this.password,
            name:this.name
       });

       console.warn(result);
       if(result.status==201)
       {
           
           localStorage.setItem("user-info", JSON.stringify(result.data))
           this.$router.push({name:"LoginPage"})
       }

       console.warn(result)

    }
    },

    mounted(){
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name: 'LoginPage'})
        }
    }

}
</script>

<style>
.register input {
    border: 1px solid rgb(200, 17, 17);
    margin-right: auto;
    margin-bottom: 30px;
    display: block;
    padding-left: 20px;
    height: 40px;
    width: 400px;
    margin-left: auto;
}

.font{
    margin-bottom:5rem ;
}

.register button{
    border: 1px rgb(200, 17, 17);
    height: 40px;
    width: 425px;
    background: rgb(200, 17, 17);
    color: white;
    cursor: pointer;
}



</style>