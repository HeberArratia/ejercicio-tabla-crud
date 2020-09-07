<template>
  	<div class="column">
		<div class="ui segment" style="width: 100%">
			<h3>Añadir nuevo</h3>
			<div class="ui divider"></div>
			<p v-if="errors.length">
				<b>Por favor, corrija el(los) siguiente(s) error(es):</b>
				<ul>
				<li v-for="error in errors">{{ error }}</li>
				</ul>
			</p>
			<div>
				<form class="ui form" @submit="save">
					<div class="field">
						<label>Nombre</label>
						<input type="text" v-model="person.first_name" name="first-name" placeholder="ej: Heber">
					</div>
					<div class="field">
						<label>Apellido</label>
						<input type="text" v-model="person.last_name" name="last-name" placeholder="ej: Arratia">
					</div>
					<div class="field">
						<label>Email</label>
						<input type="email" v-model="person.email" name="last-name" placeholder="ej: heber@mail.com">
					</div>
					<button class="ui button blue" type="submit">Guardar</button>
				</form>
			</div>	
		</div>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
  name: 'Person',
  components: {

  },
  data () {
    return {
	  idPerson: null,
	  errors: []
    }
  },
  mounted () {
	this.idPerson = this.$route.params.id;
	if (this.idPerson) {
		console.log('ok');
		this.fetchPerson(this.idPerson);
	}
  },
  computed: {
	  person: function () {
		  if (this.idPerson) {
			  return this.$store.state.person
		  } else {
			return {
				first_name: '',
				last_name: '',
				email: ''
			}
		  }
	  }
  },
  methods: {
	...mapActions(['addPerson', 'fetchPerson', 'updatePerson']),
	save(e) {
		this.errors = [];
		if (this.person.first_name === '') {
			this.errors.push('Debe ingresar un nombre');
		}
		if (this.person.last_name === '') {
			this.errors.push('Debe ingresar un apellido');
		}
		if (this.person.email === '') {
			this.errors.push('Debe ingresar un email');
		}
		const re = /\S+@\S+\.\S+/
		if (!re.test(this.person.email)) {
			this.errors.push('Debe ingresar un email válido');
		}
		e.preventDefault();
		if (!this.errors.length) {
			if (this.idPerson) {
				this.updatePerson(this.person);
			} else {
				this.addPerson(this.person);
			}
			this.$router.push('/');
		}
		e.preventDefault();
	}
  }
}
</script>

<style lang="scss">
	
</style>

