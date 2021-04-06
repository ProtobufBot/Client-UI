<template>
  <div class="list-bot">
    <v-container>
      <h1>机器人列表</h1>
      <v-data-table :items="listBotResp.botList" :headers="botTableHeaders">
        <template v-slot:item.isOnline="{ item }">
          <v-chip :color="item.isOnline?'success':'error'">{{ item.isOnline ? '在线' : '离线' }}</v-chip>
        </template>
        <template v-slot:item.login="{ item }">
          <v-btn :disabled="item.isOnline" @click="login(item.botId)" color="success">登陆</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {service} from "@/client/RpcImpl";
import {dto} from "@/client/gen/proto";
import ListCaptchaReq = dto.ListCaptchaReq;
import ListBotReq = dto.ListBotReq;
import Long from "long";
import IListBotResp = dto.IListBotResp;

@Component({
  components: {}
})
export default class ListBot extends Vue {
  mounted() {
    setInterval(async () => {
      this.listBotResp = await service.listBot(new ListBotReq({}))
    }, 3000)
  }

  listBotResp: IListBotResp = {
    botList: []
  }
  botTableHeaders = [
    {
      text: "QQ",
      value: "botId",
      align: "center"
    },
    {
      text: "在线",
      value: "isOnline",
      align: "center"
    },
    {
      text: "登陆",
      value: "login",
      align: "center"
    }
  ]


  login(botId: Long) {
    service.botLoginAsync({
      botId: botId
    })
  }




}

</script>

<style scoped>

</style>
