<script setup lang="jsx">
    /*
            1. 有状态，改变后不可再改变
            2. 链式调用
            3. return 返回的也是一个 promise
        */

    const resolvePromise = (promise, x, resolve, reject) => {
        if (x === promise) {
            return reject(new TypeError('Chaining cycle detected for promise'))
        }
        let called
        if (x != null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                let then = x.then
                if (typeof then === 'function') {
                    then.call(
                        x,
                        y => {
                            if (called) return
                            called = true
                            resolvePromise(promise, y, resolve, reject)
                        },
                        err => {
                            if (called) return
                            called = true
                            reject(err)
                        }
                    )
                } else {
                    resolve(x)
                }
            } catch (e) {
                if (called) return
                called = true
                reject(e)
            }
        } else {
            resolve(x)
        }
    }

    class PromiseA {
        PENDING_STATUS = 'pending'
        FULFILLED_STATUS = 'fulfilled'
        REJECTED_STATUS = 'rejected'

        value
        reason
        status
        resolveArr
        rejectArr

        constructor(executor) {
            this.status = this.PENDING_STATUS
            this.resolveArr = []
            this.rejectArr = []

            const resolve = value => {
                if (this.status === this.PENDING_STATUS) {
                    this.value = value
                    this.status = this.FULFILLED_STATUS
                    this.resolveArr.forEach(cb => typeof cb === 'function' && cb(value))
                }
            }

            const reject = reason => {
                if (this.status === this.PENDING_STATUS) {
                    this.reason = reason
                    this.status = this.REJECTED_STATUS
                    this.rejectArr.forEach(cb => typeof cb === 'function' && cb(reason))
                }
            }

            try {
                executor(resolve, reject)
            } catch (err) {
                reject(err)
            }
        }

        then(onFulfilled, onRejected) {
            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
            onRejected =
                typeof onRejected === 'function'
                    ? onRejected
                    : reason => {
                          throw reason
                      }

            let promise
            promise = new PromiseA((resolve, reject) => {
                const fulfilledExecutor = value => {
                    try {
                        const result = onFulfilled(value)
                        resolvePromise(promise, result, resolve, reject)
                    } catch (err) {
                        reject && reject(err)
                    }
                }

                if (this.status === this.FULFILLED_STATUS) {
                    fulfilledExecutor(this.value)
                }

                const rejectedExecutor = reason => {
                    try {
                        const result = onRejected(reason)
                        resolvePromise(promise, result, resolve, reject)
                    } catch (error) {
                        reject && reject(err)
                    }
                }

                if (this.status === this.REJECTED_STATUS) {
                    rejectedExecutor(this.reason)
                }

                if (this.status === this.PENDING_STATUS) {
                    this.resolveArr.push(fulfilledExecutor)
                    this.rejectArr.push(rejectedExecutor)
                }
            })

            return promise
        }

        resolve(value) {
            return new PromiseA(resolve => {
                resolve(value)
            })
        }

        reject(value) {
            return new PromiseA((resolve, reject) => {
                reject(value)
            })
        }

        catch(onRejected) {
            return this.then(null, onRejected)
        }
    }

    const promise = new PromiseA(resolve => {
        resolve(1)
    })
    promise
        .then(res => {
            console.log('xxx', res)
            return 2
        })
        .then(res => {
            console.log(res)
            return 3
        })
        .then(res => {
            console.log(res)
        })

    defineRender(
        <div>
            <h4>
                Promise 是基于观察者设计的模式 <br />
                1. pending 请求态，既不完成也不拒绝 <br />
                2. fulfilled 完成态 <br />
                3. rejected 拒绝态 <br />
                状态一旦改变就不会再改变了
            </h4>

            <h4>Promise then 链式调用返回的不是同一个 promise</h4>
        </div>
    )
</script>
