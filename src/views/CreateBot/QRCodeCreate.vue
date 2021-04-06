<template>
  <div class="qr-code-create">
    <v-row>
      <v-col cols="12">
        <h2>扫码创建</h2>
        <span>不能扫码流程进行到一半改为密码，如果需要请重启浏览器和程序。</span>
        <span style="color:red">点击<strong>获取二维码</strong> 之后不要使用账号登录。</span>
      </v-col>
      <v-col cols="12">
        <span v-if="queryQRCodeResp.state===QRCodeLoginState.QRCodeConfirmed">二维码已确认</span>
        <span v-if="queryQRCodeResp.state===QRCodeLoginState.QRCodeWaitingForConfirm">已扫描，等待确认</span>
        <span v-if="queryQRCodeResp.state===QRCodeLoginState.QRCodeWaitingForScan">等待扫码</span>
        <span v-if="queryQRCodeResp.state===QRCodeLoginState.QRCodeTimeout">二维码超时，请重新获取</span>
        <span v-if="queryQRCodeResp.state===QRCodeLoginState.QRCodeCanceled">用户取消登录，请重新获取</span>
      </v-col>
      <v-col cols="12">
        <v-btn @click="onFetchQRCodeClick" color="primary">获取二维码</v-btn>
      </v-col>
      <v-col cols="12">
        <img style="width:300px;height:300px;background: gray"
             v-if="!!this.fetchQRCodeResp&& !!this.fetchQRCodeResp.imageData"
             :src="getImage(this.fetchQRCodeResp.imageData)">
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {dto} from "@/client/gen/proto";

import IQRCodeLoginResp = dto.IQRCodeLoginResp;

import QRCodeLoginState = dto.QRCodeLoginResp.QRCodeLoginState;
import {service} from "@/client/RpcImpl";
import {getImage} from "@/utils/img";

@Component({
  components: {}
})
export default class QRCodeCreate extends Vue {
  QRCodeLoginState = QRCodeLoginState


  fetchQRCodeResp: IQRCodeLoginResp|null = null
  queryQRCodeResp: IQRCodeLoginResp = {}
  getImage = getImage

  mounted() {
    setInterval(async () => {
      if (!!this.fetchQRCodeResp && !!this.fetchQRCodeResp.sig) {
        try {
          this.queryQRCodeResp = await service.queryQRCodeStatus({sig: this.fetchQRCodeResp.sig})
        } catch (e) {
          this.fetchQRCodeResp = null // 停止获取
          alert("出现了错误，请重新获取二维码" + e)
        }
        if (this.queryQRCodeResp.state === QRCodeLoginState.QRCodeConfirmed) {
          this.fetchQRCodeResp = null // 停止获取
          this.$emit('finish')
        }
      }
    }, 3000)
  }

  async onFetchQRCodeClick() {
    this.fetchQRCodeResp = await service.fetchQRCode({})
  }
}

</script>

<style scoped>

</style>
