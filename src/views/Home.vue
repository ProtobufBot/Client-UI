<template>
    <v-container class="home">
        <v-row>
            <v-col cols="4">
                <v-text-field dense v-model="createBotId" outlined placeholder="QQ"></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field dense v-model="createBotPassword" outlined placeholder="密码" type="password"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn @click="createBot" color="primary">创建</v-btn>
            </v-col>
        </v-row>

        <v-container>
            <h1>机器人列表</h1>
            <v-data-table :items="listBotResp.botList" :headers="botTableHeaders">
                <template v-slot:item.login="{ item }">
                    <v-btn @click="login(item.botId)" color="success">登陆</v-btn>
                </template>
            </v-data-table>
        </v-container>
        <v-container>
            <h1>验证码列表</h1>
            <v-data-table :items="listCaptchaResp.captchaList" :headers="captchaTableHeaders">

            </v-data-table>
        </v-container>
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

    @Component
    export default class Home extends Vue {

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
                alert("创建成功")
            }).catch(reason => {
                alert("创建失败")
            })
        }

        listBotResp: IListBotResp = {
            botList: []
        }
        botTableHeaders = [
            {
                text: "QQ",
                value: "botId",
                align:"center"
            },
            {
                text: "在线",
                value: "isOnline",
                align:"center"
            },
            {
                text: "登陆",
                value: "login",
                align:"center"
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
                align:"center"
            },
            {
                text: "验证类型",
                value: "captchaType",
                align:"center"
            },
            {
                text: "操作",
                value: "action",
                align:"center"
            }
        ]

        async listCaptcha() {
            this.listCaptchaResp = await service.listCaptcha(new ListCaptchaReq())

        }

    }
</script>
