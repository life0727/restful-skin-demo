<template>
  <div class="father">
    <i>i am father</i>
    <button>to girl</button>
    <button>to boy</button>
    <button>to mather</button>
    <button @click="load">load</button>
    <button @click="acion">acion</button>
    <button @click="changeThemeColor('purple')">切换颜色</button>
    <el-button type="primary" @click="dialogVisible = true">主要按钮</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <colorPick/>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState , mapGetters , mapMutations , mapActions } from 'vuex'
import colorPick from './colorPick'
export default {
  name: 'Father',
  components:{colorPick},
  mounted () {
    //this.initThemeColor('green')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio:'1',
      dialogVisible: false
    }
  },
  computed:{
    ...mapState(['commomData', 'themeColor']),
    ...mapGetters(['getFire']),
  },
  watch:{
    themeColor(val,old){
      document.getElementsByTagName('body')[0].style.setProperty('--color-primary',val)
      this.$message('这是一条消息提示');
    }
  },
  methods:{
    ...mapMutations(['changeThemeColor','initThemeColor']),
    //...mapActions(['changeThemeColorAsync']),

    load(){
      //document.getElementsByTagName('body')[0].style.setProperty('--color-primary','blue')
      // let load = this.$loading({ fullscreen: true });
      // setTimeout(()=>{load.close()},2000)
      console.log(this.commomData)
      console.log(this.themeColor)
      console.log(this.getFire)
      this.$api.article.getArticleList().then(res => {console.log(res)}).catch(res => {console.log(res)})
    },
    acion(){
      //this.changeThemeColorAsync('gray')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.father{
  i,button{
    color: $commonColor;
  }
}
</style>
