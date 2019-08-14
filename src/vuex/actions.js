const actions = {
    changeThemeColorAsync:({commit},color) => {
        setTimeout(() => {
            commit('changeThemeColor',color)
        }, 1000)
     },
}
export default actions