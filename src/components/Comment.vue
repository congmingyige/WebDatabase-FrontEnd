<template>
  <div id="Comment">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="author">
          <img src="../assets/logo.png" class="nav-usr" style="height:40px;">
          <div style="position:relative; left:40px;">
            <a style="font-size:14px;line-height:1.5"> {{ author }} </a>
            <div>
              <span class="font-size-exsmall font-color-light"> {{ time }} </span>
            </div>
          </div>
        </div>
        <div class="font-size-small font-color-medium">
          <p> {{ content }} </p>
        </div>
        <div class="rating">
          <span class="font-size-small font-color-light"> 请给这篇文章打个分吧 </span>
          <el-rate
            v-model="article_score"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
      name: 'Comment',
      data(){
        return {
          author: '',
          time: '',
          content: '',
          article_score: 0
        }
      },
      method: {

      }
  }
</script>

<style>
.font-size-small{
  font-size:12px;
}
  .font-size-exsmall{
  font-size:10px;
}
  .font-color-medium{
  color:#404040;
}
  .font-color-light{
  color:##595959;
}
</style>
