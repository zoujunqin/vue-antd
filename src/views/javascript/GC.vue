<script setup lang="jsx">
    defineRender(
        <div class="flex flex-col gap-y-[10px]">
            <h3 class="w-full"> 概念：垃圾回收机制，如果一个对象不再被需要，GC就会在特定的时间回收它们释放内存 </h3>
            <h3 class="w-full"> 现代浏览器主要有2种垃圾回收策略 </h3>
            <h4 class="w-full">
                引用计数法：给占用物理内存空间的对象添加一个计数器，被引用一次就 +1，取消引用就 -1，但是这样无法解决循环引用的问题 <br></br>
                比如：'const a = {'{}'}; const b = {'{}'}; a.p = b; b.p = a'
            </h4>
            <h4 class="w-full">
                在 javascript 内存管理中有一个概念叫 可达性。就是以某种方式能够访问则保存在内存中，反之不可访问则回收。<br></br>
                标记清除法: 在运行时给内存中所有的变量打上标记，从根对象开始遍历，是垃圾的标为0，不是垃圾的标为1，清理所有为标记为0的垃圾并回收他们所占用的空间
                <br></br>
            </h4>

            <h4 class="w-full">v8 引擎对 GC 的优化：分代回收，并行回收，增量标记等</h4>
        </div>
    )
</script>
