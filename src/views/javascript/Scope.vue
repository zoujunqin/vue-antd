<script setup lang="jsx">
    const globalVar = $ref('globalVar')

    {
        const partialVar = $ref(1)
        console.log(partialVar)
        console.log(globalVar)
    }

    const partialVar = $ref(1)
    console.log(partialVar)

    /* Closure */
    const fn = function () {
        const varInFn = 'varInFn'

        return function () {
            console.log(varInFn)
        }
    }
    const x = fn()
    x()

    defineRender(
        <div class="flex flex-col gap-y-[20px]">
            <h4>
                作用域： <br></br>
                1. 全局作用域 <br></br>
                2. 块级作用域 <br></br>
                3. 函数作用域，闭包作用域 <br></br>
            </h4>

            <h4>
                变量定义： <br></br>
                1. 函数声明提升，优先级更高 <br></br>
                2. var 变量声明提升 <br></br>
                3. let, const 不会有声明提升，会有暂时性死区
            </h4>
        </div>
    )
</script>
