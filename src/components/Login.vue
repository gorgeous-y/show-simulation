<template>
	<div class="login-bar">
		<div class="login-box">
			<!-- 头像框 -->
			<div class="avatar-box">
				<img src="../assets/img/avatar.png" alt="头像" />
			</div>
			<!-- 登录表单区 -->
			<el-form
				:model="loginForm"
				:rules="rules"
				label-width="0px"
				class="login-form"
                ref="loginFormRef"
			>
				<!-- 用户名 -->
				<el-form-item prop="username">
					<el-input
						v-model="loginForm.username"
						prefix-icon="iconfont icon-user"
					></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input
						v-model="loginForm.password"
						type="password"
						prefix-icon="iconfont icon-3702mima"
					></el-input>
				</el-form-item>
				<!-- 按钮 -->
				<el-form-item class="btns">
					<el-button type="primary" @click="loginEnter" ref="" round>登录</el-button>
					<el-button type="info" @click="resetLoginForm" round>重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 登录表单
			loginForm: {
				username: "admin",
				password: "123456",
			},
			rules: {
				username: [
					{
						required: true,
						message: "请输入用户名",
						trigger: "blur",
					},
					{
						min: 3,
						max: 10,
						message: "长度在 3 到 10 个字符",
						trigger: "blur",
					},
				],
                password: [
					{
						required: true,
						message: "请输入密码",
						trigger: "blur",
					},
					{
						min: 6,
						max: 15,
						message: "长度在 6 到 15 个字符",
						trigger: "blur",
					},
				],

			},
		};
	},
    methods: {
        resetLoginForm(){
                //console.log(this) //通过ref访问
            this.$refs.loginFormRef.resetFields();	
        },
        loginEnter(){
            this.$refs.loginFormRef.validate(async valid=>{
                if(!valid)return;
                const {data:res}=await this.$http.post('login',this.loginForm);
                if(res.meta.status!==200)return this.$message.error('登录失败，请重试！');
                this.$message.success('登录成功！');
                console.log(res);
                window.sessionStorage.setItem('token',res.data.token);
                this.$router.push('/home');
            });	
        }
    }
};
</script>

<style lang="less" scoped>
.login-bar {
	background: url(../assets/img/bg.png) center;
	background-size: cover;
	height: 100%;
	.login-box {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 400px;
		height: 250px;
		box-shadow: 0 0px 15px rgb(90, 89, 90);
		background-color: rgb(211, 200, 185);
		border-radius: 5px;
		opacity: 0.9;
		.avatar-box {
			position: absolute;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80px;
			height: 80px;
			border-radius: 50%;
			padding: 5px;
			background-color: #baf;
			box-shadow: 0 2px 10px #baf;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.login-form {
			position: absolute;
			width: 100%;
			padding: 0px 30px;
			box-sizing: border-box;
			bottom: 0;
			.btns {
				display: flex;
				justify-content: flex-end;
			}
		}
	}
}
</style>