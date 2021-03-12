<template>
    <div>
        <Nav></Nav>
        <h1>Activities</h1>
        <div class="container">
          <div class="row">
                <div class="col-sm-8">
                    <h3>Describir a personas</h3>
                    <iframe src="https://learningapps.org/watch?app=1400176" style="border:0px;width:100%;height:500px" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    <br>
                    <hr>
                    <h3>Subjuntivo o Indicativo</h3>
                    <iframe src="https://learningapps.org/watch?app=10237019" style="border:0px;width:100%;height:500px" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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

<style>

</style>