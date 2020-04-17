<template>
	<header class=" mb-10 bg-orange-500  "  >

		<div class="  sm:flex sm:justify-between sm:items-center md:w-11/12 md:mx-auto ">
			<div>
				<div class="flex items-center justify-between px-4 py-3 ">
					<!-- Logo -->
					<div class=" z-10  "  >
						<nuxt-link to="/" class="logo flex items-center"  >
							<div class="logo-img">

							</div>
							<span class=" text-lg lg:text-2xl font-bold  pl-2 t text-gray-200 "> Logo</span>
						</nuxt-link>
					</div>
					<!-- Respon Menu button -->
					<div class=" z-10 sm:hidden "  >
						<button @click="isOpen = !isOpen" type="button"  class="block focus:outline-none "  >
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" h-8 lg:h-12 fill-current text-gray-300"  >
							  <path  v-if="!isOpen" d="M3 12h18M3 6h18M3 18h18"/>
							  <path  v-if="isOpen" d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Lg+ navbar -->
			<div :class="isOpen ? 'flex flex-col   ' : 'hidden' " class="  px-2 pt-2 pb-4 sm:block uppercase ">
				<nuxt-link class=" z-10 t text-gray-200  flex self-end text-md mt-1 px-8 py-1 "  to="/products">Продукция</nuxt-link>
				<nuxt-link class=" z-10 t text-gray-200  flex self-end text-md mt-1 px-8 py-1 "  to="/contacts">Контакты</nuxt-link>
				<nuxt-link class=" z-10 t text-gray-200  flex self-end text-md mt-1 px-8 py-1 "  to="/about">О нас</nuxt-link>
			</div>
		</div>
		<!-- Responsive navbar -->

	</header>
</template>

<script>
	export default
	{
		data: () => ({
			isOpen: false
		}),

		components: {

		}
	}
</script>