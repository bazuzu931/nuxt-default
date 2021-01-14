<template>

  <div class="  ">
    <div class="max-w-3xl bg-white mx-auto p-16">
      <h1 class="text-2xl font-medium mb-2 tracking-wider ">Let's Build: With Tand CSS</h1>
      <h2 class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Responsive Navbar</h2>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
      <menu-icon fillColor="#FF0000" />
      <android-icon fillColor="" :size="100" />
      <android-icon fillColor="" :size="100" />
      <android-icon fillColor="" :size="100" />
      <account-child />

    </div>
  </div>

</template>

<script>
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
  import AndroidIcon from 'vue-material-design-icons/Android.vue';
  import AccountChild from 'vue-material-design-icons/AccountChild.vue';
  export default
  {
  	data: () => ({

  	}),

  	components: {
      MenuIcon,
      AndroidIcon,
      AccountChild,
  	}
  }
</script>