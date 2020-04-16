<template>
	<div class=" bg-orange-500 ">
		<div class=" flex flex-col w-11/12 mx-auto  antialiased  py-4  ">


			<div class="  ">

				<ion-icon class=" text-gray-800 text-5xl "  name="headset"></ion-icon>

			</div>


			<p class="  uppercase text-gray-800 font-bold pb-4 "  >Контакты</p>
			<div class="  pl-8 ">
				<div class=" w-3/5 border-t border-dashed text-gray-800 tracking-wide  ">
					<p class=" pb-1 "  >+7 (994) 50 111-11-11</p>
					<p class=" pb-1 "  >+7 (994) 50 111-11-11</p>
				</div>
				<div class=" w-3/5 border-t border-dashed ">
					<span>Email: </span>
					<span>limon931@mai.ru</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  export default {
    computed: {
      fas () {
         return fas
      },
      faGithub () {
         return faGithub
      }
    },
  }
</script>