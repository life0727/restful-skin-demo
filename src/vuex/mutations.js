const mutations = {
    initThemeColor:(state,color) => {
        state.themeColor = color;
     },
    //改变主题颜色themeColor
    changeThemeColor : (state,color) => {
       state.themeColor = color;
    }
}
export default mutations