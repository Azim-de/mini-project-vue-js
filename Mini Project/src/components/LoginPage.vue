<template>
 
 <div class="login">
<br>
    <h2>English Course Management</h2>
<img src="../assets/state2.png">
<img src="../assets/add.png">
<img src="../assets/see.png">



    <div class="font"><h2>Login</h2>
<div class="login">

<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="password" v-model="password" placeholder="Enter Password/">
<button class="btn btn-outline-dark" v-on:click="login">Login</button>
<p>
    <router-link to="/sign-up">SignUp</router-link>
</p>
</div>
</div>
</div>
  
</template>

<script>
import axios from 'axios'
export default{
    name:'LoginPage',
    data(){
        return{
            email:'',
            password:''
        }

    },

    methods:{
        async login(){
        let result = await axios.get('http://localhost:3000/users?email=${this.email}&password=${this.password}'
        )
        if(result.status==200 && result.data.length>0)
        {
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({name:'HomePage'})
        }

        console.warn(result)
    


    
           
       
       
        

    }

    },

    mounted()
        {
            let user= localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({name:'HomePage'})
            }
        }
};

</script>
