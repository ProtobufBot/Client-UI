import httpClient from "@/client/HttpClient";
import {AxiosRequestConfig} from "axios";
import {Message, Method, rpc, RPCImpl, RPCImplCallback, util} from "protobufjs";
import newBuffer = util.newBuffer;
import {urls} from "@/client/urls";
import {dto} from "@/client/gen/proto";
import HttpService = dto.HttpService;


export const protobufAxiosConfig: AxiosRequestConfig = {
    method: 'post',
    headers: {
        'Content-Type': 'application/x-protobuf',
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: "arraybuffer"
}

// 基于 HTTP 实现的 RPC
export const rpcImpl: RPCImpl = (method: (Method | rpc.ServiceMethod<Message<{}>, Message<{}>>), requestData: Uint8Array, callback: RPCImplCallback) => {
    // TODO 想办法获取 URL path，有没有更好地办法？
    let url = urls[method.name]
    httpClient.post(url, newBuffer(Array.from(requestData)), protobufAxiosConfig).then((res) => {
        let numberArray: number[] = res.data
        callback(null, newBuffer(numberArray))
    }).catch(reason => {
        console.log(reason)
        callback(reason, null)
    })
}

export const service = HttpService.create(rpcImpl)
