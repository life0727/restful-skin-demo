const getters = {
    //获取火警信息
    getFire : state => {
        return state.commonNumList.filter(item => item.num == 119)
    }
}
export default getters