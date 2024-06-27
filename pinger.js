
import fetch from "node-fetch";
import { performance } from "perf_hooks";

const caller = async (link) => {
    const res = await fetch(link)
    const status = res.status
    return status
}

async function Pinger(jsonData){
    const stats = await Promise.all(jsonData.links.map(async (link) => {
        const start = performance.now()
        const stat = await caller(link)
        const end = performance.now()
        console.log(`start : ${start} end :  ${end} , time : ${end - start}`)
        return {
            "link" : link,
            "status" : stat,
            "time" : `${end - start} ms `
        }
    }))
    return stats
}

export { Pinger };


