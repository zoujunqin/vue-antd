<script setup lang="jsx">
    defineRender(
        <div class="flex flex-col gap-y-[10px]">
            <h3 class="w-full"> 概念：允许在函数创建的作用域之外访问该作用域内的变量 </h3>
            <h4 class="w-full"> 作用：常用于模块化代码，创建私有变量，比如 hook </h4>
            <h4 class="w-full"> ❌ 闭包所占用的内存都不会被 GC 回收 </h4>
            <h4 class="w-full"> ✔ 闭包本身不会造成内存泄漏，除非错误的代码编写 </h4>
            <h4 class="w-full">
                闭包导致的内存泄露主要是因为：闭包的作用域内变量所占用的内存无法被清除，一整个闭包作用域内有一个变量无法释放内存那么其他的变量同样无法被释放
                <br></br>
                比如：闭包作用域内部引用了 dom 变量且没有正确释放
                <br></br>
                比如：太过深层的闭包嵌套，无限循环
            </h4>

            <h4>
                避免闭包内存泄漏的方法 <br></br>
                比如：大对象，dom对象等应该手动清除引用 <br></br>
                比如：减少嵌套 <br></br>
                比如：使用弱引用的 WeakMap，WeakSet
                这样的弱引用集合，这类集合不会阻止其内元素被垃圾回收器回收，当对象的其他引用都被清除后，WeakMap和WeakSet中的引用也不会阻止对象被回收
            </h4>
        </div>
    )
</script>
