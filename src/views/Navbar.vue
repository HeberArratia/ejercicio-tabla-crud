<template>
	<div>
	  	<nav class="ui secondary menu">
		    <div class="header item">
		    	Builder 👷🏻‍♂️
		    </div>
		    <router-link class="item" to="/">Personas</router-link>
		  	<router-link class="item" to="/about">Acerca de Heber 👨🏻‍💻</router-link>
		    <div class="right menu">
		      <div class="item">
		        <div class="ui icon input">
		          <input type="text" placeholder="Search...">
		          <i class="search link icon"></i>
		        </div>
		      </div>
		      <a class="ui item">
		        Logout
		      </a>
		    </div>
	 	 </nav>
	</div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {

  }
}
</script>

<style lang="scss">
	nav{
		padding-top: 10px;
	}
	.router-link-exact-active{
		background: #F2F2F2 !important;
	}
</style>

