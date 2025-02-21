<script setup lang="jsx">
    defineRender(
        <div class="flex h-full">
            <div class="flex flex-col gap-y-[10px] flex-1 h-full overflow-y-auto">
                <h3 class="w-full"> 网络协议是为了在计算机网络中传输数据而建立的规则 </h3>
                <h3 class="w-full"> http 是一种无状态协议 stateless protocol </h3>
                <h3 class="w-full"> http 即超文本传输协议 hyperText transfer protocol </h3>
                <h3 class="w-full"> https 即超文本传输协议安全 hyperText transfer protocol secure </h3>

                <h4>
                    http 默认使用 80 端口<br></br>
                    1. 请求响应模式 <br></br>
                    2. 文本明文传输，ASCII <br></br>
                    3. 多媒体传输 <br></br>
                    4. 无连接无状态 <br></br>
                </h4>

                <h4>
                    https 默认使用 443 端口 ，http 的基础上增加了 SSL/TSL 内容加密 <br></br>
                    1. 客户端发起请求，服务端返回数字证书（公钥）<br></br>
                    2. 客户端验证数字证书是否有效（TSL的工作） <br></br>
                    3. 如果有效，客户端生成随机值用公钥加密发送给服务端，服务端私钥解密得到随机值 <br></br>
                    4. 然后两端进行对称加密的数据传输 <br></br>
                </h4>

                <h4>
                    http 状态码 <br></br>
                    200 ok 请求成功处理 <br></br>
                    201 created 请求已成功并分配了新的资源，通常是 POST 请求或是某些 PUT 请求 <br></br>
                    204 no content 请求没有内容可用，但头部字段可能有用 <br></br>
                    301 moved permanently 资源被永久更改, 永久重定向，客户端请求可以更改为新的地址 <br></br>
                    302 not found 临时重定向，客户端应用原来的资源路径进行请求 <br></br>
                    304 not modified 缓存，告诉客户端资源未被更改 <br></br>
                    400 bad request 客户端导致的错误 <br></br>
                    401 unauthorized 未授权，客户端需要进行自身的验证 <br></br>
                    403 forbidden 客户端没有访问资源的权限 <br></br>
                    404 not found 服务器找不到请求的资源 <br></br>
                    500 internal server error 服务器遇到了未知的错误 <br></br>
                    502 bad gateway 网关错误 <br></br>
                    503 service unavailable 服务不可用，可能由于服务器繁忙或者维护 <br></br>
                    504 gateway timeout 网关超时 <br></br>
                </h4>

                <h4> http 缓存 </h4>

                <h4>
                    私有缓存：绑定到特定的客户端，一般指浏览器缓存 <br></br>
                    cache-control 设为 private
                </h4>

                <h4>
                    共享缓存：位于客户端和服务端之间，可以存储能在用户之间响应的 <br></br>
                    1. 代理缓存: 通常不由服务开发人员管理，开发人员无需关系 <br></br>
                    2. 托管缓存：由开发人员明确部署，以降低服务器的资源负载并有效的交付内容，比如反向代理，cdn，serviceWorker <br />
                </h4>

                <h4>
                    强缓存：根据时间来判定缓存是否过期 <br />
                    1. http1.0 根据头的 expires 字段来判断是否过期，受本地时间影响 <br />
                    2. http1.1 根据 cache-control: max-age 来判断是否过期
                </h4>

                <h4>
                    协商缓存：浏览器和服务端协商 <br />
                    1. 使用 last-modified 和 if-modified-since,
                    服务器发送文件的最后修改时间，客户端请求时带上最后修改时间，服务端进行修改时间比对，相同则命中缓存返回 304 <br />
                    2. 使用 etag 和 if-not-match, etag 表示文件是否被修改，其余同上。该方式能解决在 1s 内多次修改，但是 last-modified （最小单位为 1s）
                    一样的情况
                </h4>
            </div>
        </div>
    )
</script>
