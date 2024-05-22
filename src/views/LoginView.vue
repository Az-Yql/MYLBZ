<template>
    <div class="box">
        <div class="login">
            <h3 style="text-align: center; font-size: 19px; margin: 0;">用户登录</h3>
            <p style="color: #909399; font-size:14px; text-align: center;margin: 5px;">青牛前端后台管理系统</p>

            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input :prefix-icon="Avatar" v-model="ruleForm.username" placeholder="请输入用户名" />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input show-password :prefix-icon="Lock" v-model="ruleForm.password" placeholder="请输入密码" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>

            </el-form>

        </div>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { loginApi } from '../api/index'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {Lock,Avatar} from '@element-plus/icons-vue'
const router = useRouter()
const ruleFormRef = ref()

//登录参数类型
type LoginType = {
    password: string,
    username: string
}
//登录参数
const ruleForm = ref<LoginType>({
    password: '',
    username: ''
})
//登录校验
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
    ]
}
//登录方法加token存储
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            loginApi(ruleForm.value).then(res => {
                if (res.code == 200) {
                    localStorage.setItem('token', res.data)
                    router.push('/')

                }
                console.log(res);
            })
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>
<style lang='scss' scoped>

.box {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

  

    .login {
        width: 400px;
        height: 200px;
        border-radius: 10px;
        margin: 0 auto;
        padding: 10px;
        margin-bottom: 10px;
    }

}
</style>