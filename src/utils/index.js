export const jsonStringify = obj=>{
    return JSON.stringify(obj, (key, value)=>{
        return value   
    }, 2)
}

export const jsonParse = string=>{
    return JSON.parse(string, (key, value)=>{
        return value
    })
}
