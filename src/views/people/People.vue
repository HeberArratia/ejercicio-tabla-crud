<template>
    <div>
    	<div id="people-main-bar">
    		<h2>Gestión de personas 👨🏻</h2>
    	</div>
    	<div class="ui divider"></div>
    	<div class="ui grid">
    		<router-view/>
    	</div>
    </div>
</template>

<script>

export default {
  name: 'People',
  components: {
  }
}
</script>

<style lang="scss">
	#people-main-bar{
		padding-top: 15px;
	}
</style>
