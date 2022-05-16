<template>
<div class="div1">
<HeaderPage />
<br><br>


<h2>English Course Management</h2>

<div class="container">
  <div class="row">
    <div class="col">
      <img src="../assets/state2.png"/>
    </div>
    <div class="col">
        <p>There is a data update feature, where after the data is added and stored, we can update the data quickly and effectively.
        </p>

    </div>
    <div class="col">
      <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="resto.name"/>
    <input type="text" name="contact" placeholder="Enter Contact" v-model="resto.contact"/>
    <input type="text" name="address" placeholder="Enter Address" v-model="resto.address"/>
    <input type="text" name="level" placeholder="Enter Level" v-model="resto.level"/>
    <button type="button" v-on:click="updateResto" class="btn btn-outline-dark">Update</button>
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
    name: 'UpdatePage',
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
        async updateResto()
        {
            console.warn(this.resto)
            const result = await axios.put("http://localhost:3000/resto/"+this.$route.params.id,{
                name:this.resto.name,
                contact:this.resto.contact,
                address:this.resto.address,
                level:this.resto.level
            });
            if(result.status==200)
            {
                this.$router.push({name:'DataPerson'});
            }


        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name: 'SignUp'})
        }
        const result = await axios.get("http://localhost:3000/resto/"+this.$route.params.id)
        console.warn(result)
        
    }
}
 
</script>
