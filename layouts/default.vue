<template>
	<div class="flex flex-col min-h-screen ">

		<!-- Navbar -->
		<Navbar />

		<!-- Content -->
		<main class="content flex-grow mx-auto w-10/12 ">
			<nuxt/>
		</main>
		<main>
		</main>

		<footer>
			<Footer />
		</footer>

	</div>
</template>

<style lang="sass" scoped>

</style>


<script>
	import customIcon from 'vue-icon/lib/vue-feather.esm'
	import Navbar from '@/components/Navbar'
	import Footer from '@/components/Footer'
	export default
	{
		data: () => ({
			baseClass: 'v-icon'
		}),

		components: {
			customIcon,
			Navbar,
			Footer,
		}
	}
</script>
