<template>
    
    <div>
         <Nav></Nav>
         <h1>Free Material</h1>
         <div class="container">
              <div class="row">
                <div class="col-sm-8">
                   <b-list-group>
                    <b-list-group-item href="#some-link">Awesome link <button> Downlaod </button> </b-list-group-item>
                    <b-list-group-item href="#" active>Link with active state <button> Downlaod </button></b-list-group-item>
                    <b-list-group-item href="#">Action links are easy <button> Downlaod </button></b-list-group-item>
                    <b-list-group-item href="#foobar">Disabled link <button> Downlaod </button></b-list-group-item>
                </b-list-group>
                </div>
                <div class="col-sm-4">
                    <Finder></Finder>
                </div>
            </div>            
        </div>
    </div>    

</template>

<script>

import Nav from "./Nav.vue"
import Finder from "./Finder.vue"

export default {
     components: {
        Nav,
        Finder
    }
    
}
</script>