<template>
	<div class=" bg-orange-500 ">
		<div class=" flex flex-col w-11/12 xl4:w-9/12 mx-auto  antialiased  py-4  ">

			<div class="  flex flex-row  mb-4 ">
				<div class="  uppercase text-gray-900 font-bold  ">Контакты</div>
				<div class=" flex items-center  w-full ml-4 ">
					<hr class=" border border-gray-900 w-full  "  >
				</div>
			</div>

			<!-- Footer contacts -->
			<div class="  w-3/5  ">
				<div class=" w-3/5  t py-2 ">
					<p class=" pb-1 "  > <ion-icon class="tel t "  name="call"></ion-icon> <a href="tel:+994507784055">+(994) 50 111-11-11</a></p>
					<p class=" pb-1 "  > <ion-icon class=" t "  name="call"></ion-icon> <a href="tel:+994507784055">+(994) 50 222-22-22</a></p>
					<ion-icon class=" text-white-500 "  name="airplane-outline"></ion-icon>

				</div>
				<!-- Footer Email -->
				<div class="   border-t border-dashed border-gray-900 py-2">
					<div class=" flex items-center "  >
						<ion-icon class=" t "   name="mail"></ion-icon>
						<a href="mailto:bazuzu931@yandex.ru" class=" t pl-2">limon931@mail.ru</a>
					</div>
				</div>
				<!-- Footer nav -->
				<div class="   border-t border-dashed border-gray-900 py-2">
					<div class=" flex  items-center "  >
						<ion-icon class=" t "   name="compass"></ion-icon>
						<a href="https://goo.gl/maps/BJBv2e5XYyU1K3j29" class="t  pl-2">Баку, ул. Джафар Джаббарлы</a>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="sass" scoped>
	.tel
		font-size: 2rem
</style>


<script>
	export default
	{
		data: () => ({

		}),

		components: {

		}
	}
</script>