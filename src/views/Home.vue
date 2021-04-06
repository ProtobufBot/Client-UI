<template>
  <v-container class="home">

    <v-btn @click="showCreateDialog=true" color="primary">创建机器人</v-btn>
    <span style="margin:16px">界面很丑，不要介意，但是能用</span>
    <v-dialog v-model="showCreateDialog">
      <v-card class="pa-4">
        <v-row>
          <v-col cols="6">
            <q-r-code-create @finish="onCreateFinish"/>
          </v-col>
          <v-col cols="6">
            <password-create @finish="onCreateFinish"/>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-card class="pa-4 ma-4">
      <list-bot/>
    </v-card>

    <v-card class="pa-4 ma-4">
      <process-captcha/>
    </v-card>

  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import {Component, Vue} from "vue-property-decorator";
import QRCodeCreate from "@/views/CreateBot/QRCodeCreate.vue";
import PasswordCreate from "@/views/CreateBot/PasswordCreate.vue";
import ProcessCaptcha from "@/views/ProcessCaptcha/ProcessCaptcha.vue";
import ListBot from "@/views/ListBot/ListBot.vue";

@Component({
  components: {ListBot, ProcessCaptcha, PasswordCreate, QRCodeCreate}
})
export default class Home extends Vue {
  showCreateDialog: boolean = false

  onCreateFinish() {
    this.showCreateDialog = false
  }
}
</script>
