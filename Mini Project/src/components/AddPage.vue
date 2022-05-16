<template>
<div class="div2">
<HeaderPage/>
<br><br>


<h2>English Course Management</h2>

<div class="container">
  <div class="row">
    <div class="col">
      <img src="../assets/add.png"/>
    </div>
    <div class="col">
        <p>There is an added data feature, where this feature can add the desired data. With just one click, we can add data quickly and easily
        </p>

    </div>
    <div class="col">
      <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="resto.name"/>
    <input type="text" name="contact" placeholder="Enter Contact" v-model="resto.contact"/>
    <input type="text" name="address" placeholder="Enter Address" v-model="resto.address"/>
    <input type="text" name="level" placeholder="Enter Level" v-model="resto.level"/>
    
    

    <button type="button" v-on:click="addResto" class="btn btn-outline-dark">Add</button>
</form>
    </div>
    
    
  </div>
</div>

</div>
</template>

<script>
import axios from 'axios'
import HeaderPage from './HeaderPage.vue'
export default{
    name: 'AddPage',
    components:{
        HeaderPage
    },

    data()
    {
        return{
            resto:{
                name:'',
                contact:'',
                address:'',
                level:''

            }
        }
    },

    methods:{
       async addResto()
        {
            console.warn(this.resto)
            const result = await axios.post("http://localhost:3000/resto",{
                name:this.resto.name,
                contact:this.resto.contact,
                address:this.resto.address,
                level:this.resto.level,
            }
            
            );
            if(result.status==201)
            {
                this.$router.push({name:'DataPerson'})
            }

            console.warn("result",result)

        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name: 'SignUp'})
        }
    }
}

</script>

<style>
.container{
    margin-top: 10rem;
}
 
</style>
