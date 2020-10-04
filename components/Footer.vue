<template>
	<div class=" bg-blue-500 ">
		<div class=" flex flex-col w-11/12 mx-auto  antialiased  py-4  ">

        <div>
          <p class="aa">aa</p>
        <v-icon name="eye"></v-icon>
        <v-icon name="x"></v-icon>
        <p class="aa ">rrr
          <custom-icon class="aa"  name="eye" base-class="custom-icon"></custom-icon>
        </p>
    </div>

		</div>
	</div>
</template>

<style lang="sass" scoped>
  .aa
    font-size: 60px !important
  .icon
    color: #666

</style>

<script>
  import customIcon from 'vue-icon/lib/vue-feather.esm'
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'

  export default
  {
    components: {
      customIcon,
      Navbar,
      Footer,
    },
    data: function () {
        return {
            baseClass: 'v-icon'
        }
    },

  }
</script>