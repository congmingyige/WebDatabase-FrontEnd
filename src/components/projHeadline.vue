<template>
  <div class="projHeadline">
    <el-row>
      <el-menu :default-active="activeIndex2" class="headline-style" mode="horizontal">
        <el-row>
          <el-col :span="1">
            <img src = "../assets/logo.png" style="height:40px;width:40px"  class="ywl-style"></img>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="1">发现</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="1">关注</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="1">消息</el-menu-item>
          </el-col>
          <el-col :span="4" :offset="2">
            <el-menu-item index="1">
              <el-input
                placeholder="请输入想查找的内容"
                icon="search"
                v-model="input2">
              </el-input>
              <el-button type="primary">搜索</el-button>
            </el-menu-item>
          </el-col>
          <el-col :span="1":offset="1">
            <!--看来图片都得放在相对应vue文件的子目录下-->
            <img src="../assets/logo.png" style="height:40px;width:40px" class="ywl-style"></img>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-submenu index="2">
              <template slot="title">个人中心</template>
              <el-menu-item index="2-1">我的主页</el-menu-item>
              <el-menu-item index="2-2">设置</el-menu-item>
              <el-menu-item index="2-3">退出</el-menu-item>
            </el-submenu>
          </el-col>
        </el-row>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .ywl-style
  {
  margin-top:10%;
  width:100%;
  height:100%;
  }
  .headline-style
  {
  border-bottom-style: double;
  border-bottom-width: medium;
  border-bottom-color: #e4e8f1;
  background-color: white;
  }
</style>
