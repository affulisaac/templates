
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    useHead({
        title:  _to.meta?.title as string 
    })
})