<template>
    <div class="div">
        <HeaderPage/>
        <img src="../assets/see.png"/>
        <br>
        <table class=" table table-hover">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Addres</td>
                <td>Level</td>
                <td>Actions</td>
            </tr>
            <tr v-for="item in resto" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>{{item.level}}</td>
                <td><router-link :to="'/update-page/'+item.id" class="btn btn-outline-danger">Update</router-link>
                 <button class="btn btn-outline-danger" v-on:click="deleteResto(item.id)">Delete</button>
                 <router-link to="/add-page" class="btn btn-outline-danger">Add</router-link>
                </td>
                

            </tr>
        </table>
    </div>
</template>


<script>

import axios from 'axios';
import HeaderPage from './HeaderPage.vue'
export default{
    name: 'DataPerson',

    data(){
        return{
            name:'',
            resto:[],
        }
    },
    components:{
        HeaderPage
    },

    methods:{
        async deleteResto(id)
        {
            let result =await axios.delete("http://localhost:3000/resto/"+id);
            console.warn(result)
            if(result.status==200)
            {
                this.loadData() 
            }
        },
        async loadData()
    {
      let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name: 'SignUp'})
        }

        let result =await axios.get("http://localhost:3000/resto");
        this.resto=result.data;  
    } 
    },

    
   async mounted(){
        this.loadData();

    }
}

</script>

<style>
td{
    width:350px;
    height: 40px;
    
}

img{
    width:300px;
}


</style>