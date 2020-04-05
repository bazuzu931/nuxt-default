<template>
	<div class="">
		<ul>
			<li v-for="user of users" :key="user.id">
				<!-- <a class="" @click.prevent="openUser(user)">{{ user.name }}</a> -->
				<nuxt-link :to="'/users/' + user.id" exact> {{ user.name }} </nuxt-link>
			</li>
		</ul>
	</div>
</template>

<style lang="sass">
	.el-link
		font-size: 2em

</style>

<script>
	export default {
		async fetch({store}) {
			if (store.getters['users/users'].length === 0) {
				await store.dispatch('users/fetch')
			}
		},
		data: () => ({

		}),
		methods: {
			// openUser(user) {
			// 	this.$router.push('/users/' + user.id)
			// }
		},
		computed: {
			users() {
				return this.$store.getters['users/users']
			}
		}
	}
</script>