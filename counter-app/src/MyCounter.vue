<template>
	<div>
		<center>
			<div class="contain">
				<h1>{{ counter }}</h1>
				<div>
					<input type="number" v-modal="counter" />
					<button @click="$event => setValue(counter)" class="btn4">Set Value</button>
				</div>
			<div>
				<button @click="increment" class="btn1">Increment</button>
				<button @click="reset" class="btn2">Reset</button>
				<button @click="decrement" class="btn3">Decrement</button>
			</div>
			</div>
		</center>
	</div>
  </template>
  
  <script>
  /* eslint-disable no-mixed-spaces-and-tabs */
  
  export default {
	components: { 
	},
	computed:{
	  counter(){
		return this.$store.state.count;
	  }
	},
	methods:{
	  increment(){
		this.$store.dispatch('increment')
	  },
	  reset(){
		this.$store.dispatch("reset")
	  },
	  decrement(){
		this.$store.dispatch('decrement')
	  },
	  $event(){
		this.$store.dispatch("")
	}
	}
	
  }
  /* eslint-disable no-mixed-spaces-and-tabs */
  </script>
  
  <style>
  .contain{
	background-color: green;
	height: 180px;
	width: 400px;
	padding: 5px;
	margin-top: 10px;
	border-radius: 5px;
  }
  h1{
	color: white;
  }
  button {
	color: white;
	margin-left: 4px;
	margin-top: 5px;
  }
  .btn1 {
	background-color: rgb(46, 156, 46);
	border: none;
	padding: 10px;
	cursor: pointer;
  }
  .btn2 {
	background-color: rgb(139, 24, 24);
	border: none;
	padding: 10px;
	cursor: pointer;
  }
  .btn3 {
	background-color: rgb(12, 47, 160);
	border: none;
	padding: 10px;
	cursor: pointer;
  }
  .btn4 {
	background-color: rgb(67, 148, 202);
	border: none;
	padding: 5px;
	cursor: pointer;
  }
  input{
	margin-bottom: 5px;
	width: 50px;
	height: 20px;
  }

  @media only screen and (max-width: 768px) {
	.container{
		width: 98hv;
	}
  }
  </style>
  