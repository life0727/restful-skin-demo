<template>
    <div class="block">
        <el-color-picker v-model="color" @change="colorChange"></el-color-picker>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'colorPick',
    data() {
      return {
        color: '#409EFF',
      }
    },
    methods:{
         ...mapActions(['changeThemeColorAsync']),
        colorChange(color){
            this.changeThemeColorAsync(color)
        }
    }
}
</script>

<style>

</style>