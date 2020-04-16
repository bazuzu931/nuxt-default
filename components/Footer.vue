<template>
	<div class=" bg-orange-500 ">
		<div class=" flex flex-col w-11/12 mx-auto  antialiased  py-4  ">


			<div class="  ">

				<ion-icon class=" text-gray-800 text-5xl "  name="headset"></ion-icon>

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