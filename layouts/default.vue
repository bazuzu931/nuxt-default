<template>
	<div class="container mx-auto flex flex-col min-h-screen mx-auto w-4/5">

		<!-- Navbar -->
		<Navbar />

		<!-- Content -->
		<main class="content flex-grow ">
			<nuxt/>
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
