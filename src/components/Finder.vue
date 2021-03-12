<template>
  <div class="jumbotron">
     <b-list-group style="max-width: 300px;">
     
      <b-list-group-item v-for="item in info" :key="item.id" class="d-flex align-items-center">
        <b-avatar class="mr-3" :src="item.avatar"></b-avatar>
        <span class="mr-auto"> {{ item.first_name }} {{ item.last_name }}</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
 
 const axios = require('axios').default; 

  export default {
    data() {
      return {
        info: []       
      }
    },
    methods: {
        getAvatar(index) {
          console.log(this.info.indexOf(index).avatar);
          return this.info.indexOf(index - 1).avatar
      },
      async fetchData(){
        try {
          const response = await axios.get('https://reqres.in/api/users?page=1');
          this.info =  response.data.data
        } catch (error) {
          console.error(error);
        }
        /*  axios //promises
            .get('https://reqres.in/api/users?page=1')
            .then(response => (this.info = response))*/
      }
    },
    created(){
        
    },
    mounted () {

        this.fetchData()
    }
    
    
  }
</script>