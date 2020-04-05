<template>
	<div class="loginPage">

		<el-row type="flex" justify="center" align="middle" >
			<el-col :span="12">
				<div class="grid-content">

					<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span>Login Page</span>
					    <nuxt-link to="/">
							<el-link style="float: right" type="success">Home</el-link>
					    </nuxt-link>
					  </div>
					  <div v-for="o in 4" :key="o" class="text item">
					    {{'List item ' + o }}
					  </div>
					</el-card>

				</div>
			</el-col>
		</el-row>

	</div>
</template>

<style lang="sass" scoped>
	.el-row
		min-height: 100vh
</style>

<script>
	export default {
		layout: 'empty',
		data: () => ({
			labelPosition: 'left',
		    formLabelAlign: {
		      login: '',
		    }
		}),
	}
</script>

