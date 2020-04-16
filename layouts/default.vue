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
	import Navbar from '@/components/Navbar'
	import Footer from '@/components/Footer'
	export default
	{
		data: () => ({

		}),

		components: {
			Navbar,
			Footer,
		}
	}
</script>
