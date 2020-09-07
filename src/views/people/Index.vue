<template>
    <div class="column">
      	<div id="top-people-bar">
      		<router-link  to="/new" class="ui primary button">
      		<i class="plus icon"></i>
			  Nuevo
			</router-link>
      	</div>		
    	<table class="ui celled table">
		  <thead>
		    <tr>
		    	<th>ID</th>
			    <th>Nombre</th>
			    <th>Apellido</th>
			    <th>Email</th>
			    <th style="width: 120px;">Acciones</th>
		  	</tr>
		  </thead>
		  <tbody v-if="people !== []">
		    <tr v-for="person in people.data">
		      <td>{{ person.id }}</td>
		      <td>{{ person.first_name }}</td>
		      <td>{{ person.last_name }}</td>
		      <td>{{ person.email }}</td>
		      <td>
				<router-link :to="{ path: 'update/' + person.id}" class="">
					<button class="ui blue circular facebook icon button tiny">
					<i class="edit icon"></i>
					</button>
				</router-link>
				<button @click="deletePerson(person)" class="ui red circular facebook icon button tiny">
				  <i class="trash icon"></i>
				</button>
		      </td>
		    </tr>
		  </tbody>
		</table>

		<div class="column">
			<div class="ui pagination menu">
				<a class="item" @click="changePage(currentPage - 1)" :class="{ 'button-pagination-disabled': currentPage === 1}">
					Anterior
				</a>
				<a v-for="page in pagesNumber" class="item" @click="changePage(page)" :class="{ 'active': page === currentPage}">
					{{ page }}
				</a>
				<a class="item" @click="changePage(currentPage + 1)"  :class="{ 'button-pagination-disabled': currentPage === people.totalPages}">
					Siguiente
				</a>
			</div>
		</div>

    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Index',
  components: {
  },
  data () {
    return {
	  currentPage: 1
    }
  },
  computed: {
	  ...mapState(['people']),
	  pagesNumber: function () {
		if (!this.people.totalPages) {
			return [];
		}

		const offset = 4;
		let from = this.currentPage - offset;
		if (from < 1) {
			from = 1;
		}

		let to = from + (offset * 2);
		if (to >= this.people.totalPages) {
			to = this.people.totalPages;
		}

		let pagesArray = [];
		while (from <= to) {
			pagesArray.push(from);
			from++;
		}
		return pagesArray;
	  }
  },
   mounted () {
	this.fetchPeople(this.currentPage); 
  },
  methods: {
		...mapActions(['fetchPeople', 'removePerson']),
		changePage (page) {
			if (page >= 1 && page <= this.people.totalPages) {
				this.currentPage = page;
				this.fetchPeople(page);	
			}
		},
		deletePerson(person) {
			this.$swal({
			title: 'Estas seguro?',
			text: 'Esta acción es permanente',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si, eliminar',
			cancelButtonText: 'No',
			showCloseButton: true,
			showLoaderOnConfirm: true
			}).then((result) => {
				if(result.value) {
					this.removePerson(person);
					this.currentPage = 1;
					this.$swal('Eliminado!', 'Se ha eliminado correctamente', 'success');
				}
			})
		}
  }
}
</script>

<style lang="scss">
	#top-people-bar{
		display: flex; 
		justify-content: flex-end;
		padding-bottom: 5px;
	}
	.button-pagination-disabled {
		color: #7F8389 !important;
	}
</style>
˘