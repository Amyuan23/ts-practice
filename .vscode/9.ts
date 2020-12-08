export function debounce(func:Function, wait:number = 0) {
  let timeout = null
  let args:any[]
  function debounced(...arg) {
    args = arg
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    return new Promise((resolve, reject) => {
      timeout = setTimeout(async () => {
        try {
          const result = await func.apply(this, args)
          resolve(result)
        } catch (e) {
          reject(e)
        }
      }, wait)
    })
  }