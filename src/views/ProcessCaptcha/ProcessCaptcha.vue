<template>
  <div class="process-captcha">
    <v-row>
      <v-col><h2>处理验证码</h2></v-col>
      <v-col cols="4">
        <v-text-field dense v-model="captchaBotId" outlined placeholder="QQ"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field dense v-model="captchaResult" outlined placeholder="结果"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="solveCaptcha" color="primary">提交</v-btn>
      </v-col>
    </v-row>
    <v-container>
      <h1>验证码列表</h1>
      <v-data-table :items="listCaptchaResp.captchaList" :headers="captchaTableHeaders">
        <template v-slot:item.captchaType="{ item }">
          <span v-if="item.captchaType===CaptchaType.PIC_CAPTCHA">图片</span>
          <span v-if="item.captchaType===CaptchaType.SLIDER_CAPTCHA">滑动</span>
          <span v-if="item.captchaType===CaptchaType.UNSAFE_DEVICE_LOGIN_VERIFY">设备锁</span>
        </template>
        <template v-slot:item.captchaType="{ item }">
          <span v-if="item.captchaType===CaptchaType.PIC_CAPTCHA">图片</span>
          <span v-if="item.captchaType===CaptchaType.SLIDER_CAPTCHA">滑动</span>
          <span v-if="item.captchaType===CaptchaType.UNSAFE_DEVICE_LOGIN_VERIFY">设备锁</span>
          <span v-if="item.captchaType===CaptchaType.SMS">短信</span>
        </template>
        <template v-slot:item.detail="{ item }">
          <img v-if="item.captchaType===CaptchaType.PIC_CAPTCHA" :src="getImage(item.image)"
               style="height: 36px"/>
          <a v-if="item.captchaType===CaptchaType.SLIDER_CAPTCHA" target="_blank" :href="item.url">链接</a>
          <a v-if="item.captchaType===CaptchaType.UNSAFE_DEVICE_LOGIN_VERIFY" target="_blank"
             :href="item.url">链接</a>
          <span v-if="item.captchaType===CaptchaType.SMS">{{ item.url }}</span>
        </template>
      </v-data-table>

    </v-container>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {dto} from "@/client/gen/proto";
import CaptchaType = dto.Captcha.CaptchaType;
import {service} from "@/client/RpcImpl";
import Long from "long";
import IListCaptchaResp = dto.IListCaptchaResp;
import {getImage} from "@/utils/img";
import ListCaptchaReq = dto.ListCaptchaReq;


@Component({
  components: {}
})
export default class ProcessCaptcha extends Vue {
  CaptchaType = CaptchaType

  getImage = getImage

  mounted(){
    setInterval(async () => {
      this.listCaptchaResp = await service.listCaptcha(new ListCaptchaReq())
    }, 3000)
  }

  captchaTableHeaders = [
    {
      text: "QQ",
      value: "botId",
      align: "center"
    },
    {
      text: "验证类型",
      value: "captchaType",
      align: "center"
    },
    {
      text: "详情",
      value: "detail",
      align: "center"
    }
  ]

  listCaptchaResp: IListCaptchaResp = {
    captchaList: []
  }

  captchaBotId: string = ''
  captchaResult: string = ''

  solveCaptcha() {
    service.solveCaptcha({
      botId: Long.fromString(this.captchaBotId),
      result: this.captchaResult
    })
  }

}

</script>

<style scoped>

</style>
