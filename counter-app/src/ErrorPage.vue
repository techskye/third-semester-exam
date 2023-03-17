<template>
	<center>
		<div>
		<h3>Sorry, this page is not available. <router-link to="/">Go to Home Page</router-link></h3>
	</div>
	</center>
</template>
<script>
export default {
	method: {
		redirectMe(){
			this.$router.push({ name: 'Home' })
		}
	}
}
</script>
<styles></styles>