<script setup lang="jsx">
    defineRender(
        <div class="flex h-full">
            <div class="flex flex-col gap-y-[10px] flex-1 h-full overflow-y-auto">
                <h3 class="w-full"> 网络协议是为了在计算机网络中传输数据而建立的规则 </h3>

                <h4>
                    TCP/IP 四层模型, 自下而上 <br></br>
                    1. 应用层 <br></br>
                    2. 传输层 <br></br>
                    3. 网络层 <br></br>
                    4. 网络接口层 <br></br>
                </h4>

                <h4>
                    TCP/IP 五层模型，网络接口层拆成两层, 自下而上 <br></br>
                    1. 应用层 <br></br>
                    2. 传输层 <br></br>
                    3. 网络层 <br></br>
                    4. 数据链路层 <br></br>
                    5. 物理层 <br></br>
                </h4>

                <h4>
                    OSI/RM 七层模型，网络接口层拆成两层, 应用层拆成三层， 自下而上 <br></br>
                    1. 应用层 <br></br>
                    2. 表示层 <br></br>
                    3. 会话层 <br></br>
                    4. 传输层 <br></br>
                    5. 网络层 <br></br>
                    6. 数据链路层 <br></br>
                    7. 物理层 <br></br>
                </h4>

                <h4>
                    TCP/IP：<br></br>
                    1. TCP 即传输控制协议 transmission controls protocol, 作用在传输层 <br></br>
                    2. IP 即网际协议 internet protocol，作用在网络层，给每台联网的设备分配一个地址
                </h4>

                <h4>
                    TCP三次握手: <br></br>
                    可靠链接并且保证数据完整，服务端维护很多虚假链接浪费资源
                </h4>

                <h4>
                    TCP四次握手: <br></br>
                    保证客户端和服务端都没有传输和接收数据的需求。断开一端需要两次握手
                </h4>

                <h4>
                    UDP协议：用户数据报协议即 user datagram protocol <br></br>
                    1. 面向无连接 <br></br>
                    2. 不可靠 <br></br>
                    3. 广播 <br></br>
                    4. 轻量，实时的 <br></br>
                </h4>

                <h4>
                    UDP应用场景： <br></br>
                    1. 实时的多媒体流，比如视频音频 <br></br>
                    2. 在线游戏 <br></br>
                    3. 广播和多播，比如会议，视频直播
                </h4>
            </div>

            <div class="flex flex-col gap-y-[10px] flex-1 h-full overflow-y-auto">
                <h4>
                    <p> 开放系统互联参考模型 即 OSI/RM open system interconnection/reference model </p>
                    <img src="https://www.runoob.com/wp-content/uploads/2018/09/1538030296-7490-20150904094019903-1923900106.jpg" alt="" />
                    <img src="https://www.runoob.com/wp-content/uploads/2018/09/1538030296-8668-20150904095142060-1017190812.gif" alt="" />
                </h4>

                <h4>
                    <p> TCP三次握手四次挥手 </p>
                    <img src="https://www.runoob.com/wp-content/uploads/2018/09/1538030297-3779-20150904110054856-961661137.png" alt="" />
                    <img src="https://www.runoob.com/wp-content/uploads/2018/09/1538030297-7824-20150904110008388-1768388886.gif" alt="" />
                </h4>
            </div>
        </div>
    )
</script>
