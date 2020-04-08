<template>
	<div class="flex flex-col min-h-screen ">

		<!-- Navbar -->
		<Navbar />

		<!-- Content -->
		<main class="content flex-grow ">
			<nuxt/>
		</main>
		<main>
		</main>

		<footer class="footer  ">
			Footer
		</footer>

	</div>
</template>

<style lang="sass" scoped>

</style>


<script>
	import Navbar from '@/components/Navbar'
	export default
	{
		data: () => ({

		}),

		components: {
			Navbar,
		}
	}
</script>
