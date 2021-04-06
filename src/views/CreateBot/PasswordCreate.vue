<template>
  <div class="password-create">
    <v-row>
      <v-col cols="12">
        <h2>使用账号密码</h2>
        <span>不能密码流程进行到一半改为密码，如果需要请重启浏览器和程序。</span>
        <span style="color:red">点击<strong>创建</strong>之后不要点击获取二维码。</span>
      </v-col>
      <v-col cols="12">
        <v-text-field dense v-model="createBotId" outlined placeholder="QQ"/>
      </v-col>
      <v-col cols="12">
        <v-text-field dense v-model="createBotPassword" outlined placeholder="密码"
                      type="password"/>
      </v-col>
      <v-col cols="12">
        <v-btn block @click="createBot" color="primary">创建</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {service} from "@/client/RpcImpl";
import Long from "long";
import {dto} from "@/client/gen/proto";
import ICreateBotReq = dto.ICreateBotReq;

@Component({
  components: {}
})
export default class PasswordCreate extends Vue {
  createBotId: string = ''
  createBotPassword: string = ''

  get createBotReq(): ICreateBotReq {
    return {
      botId: Long.fromString(this.createBotId),
      password: this.createBotPassword
    }
  }

  async createBot() {
    await service.createBot(this.createBotReq).then(resp => {
      alert("创建成功，请处理下方验证码，如果是设备锁验证码填1234")
      this.$emit('finish')
    }).catch(reason => {
      alert("创建失败")
    })
  }
}

</script>

<style scoped>

</style>
