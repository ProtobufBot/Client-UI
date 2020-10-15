<template>
    <v-container class="home">
        <v-card class="pa-4 ma-4">
            <v-row>
                <v-col><h2>创建机器人</h2></v-col>
                <v-col cols="4">
                    <v-text-field dense v-model="createBotId" outlined placeholder="QQ"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field dense v-model="createBotPassword" outlined placeholder="密码"
                                  type="password"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="createBot" color="primary">创建</v-btn>
                </v-col>
            </v-row>

            <v-container>
                <h1>机器人列表</h1>
                <v-data-table :items="listBotResp.botList" :headers="botTableHeaders">
                    <template v-slot:item.isOnline="{ item }">
                        <v-chip :color="item.isOnline?'success':'error'">{{item.isOnline?'在线':'离线'}}</v-chip>
                    </template>
                    <template v-slot:item.login="{ item }">
                        <v-btn :disabled="item.isOnline" @click="login(item.botId)" color="success">登陆</v-btn>
                    </template>
                </v-data-table>
            </v-container>
        </v-card>


        <v-card class="pa-4 ma-4">
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
                        <span v-if="item.captchaType===CaptchaType.SMS">{{item.url}}</span>
                    </template>
                </v-data-table>

            </v-container>
        </v-card>


    </v-container>
</template>

<script lang="ts">
    // @ is an alias to /src


    import {Component, Vue} from "vue-property-decorator";
    import {dto} from "@/client/gen/proto";
    import ICreateBotReq = dto.ICreateBotReq;
    import Long from "long";
    import {service} from "@/client/RpcImpl";
    import IListBotResp = dto.IListBotResp;
    import ListBotReq = dto.ListBotReq;
    import IListCaptchaResp = dto.IListCaptchaResp;
    import ListCaptchaReq = dto.ListCaptchaReq;
    import CaptchaType = dto.Captcha.CaptchaType;

    @Component
    export default class Home extends Vue {
        CaptchaType = CaptchaType

        mounted() {
            setInterval(() => {
                this.listBot()
                this.listCaptcha()
            }, 1000)
        }

        createBotId: string = ''
        createBotPassword: string = ''

        get createBotReq(): ICreateBotReq {
            return {
                botId: Long.fromString(this.createBotId),
                password: this.createBotPassword
            }
        }

        createBot() {
            service.createBot(this.createBotReq).then(resp => {
                alert("创建成功，请处理下方验证码，如果是设备锁验证码填1234")
            }).catch(reason => {
                alert("创建失败")
            })
        }

        getImage(bytes: Uint8Array): string {
            let data = ""
            for (let i = 0; i < bytes.length; i++) {
                data += String.fromCharCode(bytes[i])
            }
            return "data:image/png;base64," + window.btoa(data)
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

        async listBot() {
            this.listBotResp = await service.listBot(new ListBotReq({}))
        }

        login(botId: Long) {
            service.botLoginAsync({
                botId: botId
            })
        }

        listCaptchaResp: IListCaptchaResp = {
            captchaList: []
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

        async listCaptcha() {
            this.listCaptchaResp = await service.listCaptcha(new ListCaptchaReq())
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
