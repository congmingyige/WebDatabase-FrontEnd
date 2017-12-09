<template>
  <div id="ArticleDecorate">
    <el-input type="textarea" v-model="title"> </el-input>
    <el-input type="textarea" v-model="text"> </el-input>
    {{ xxx }}
  </div>
</template>

<script>
  export default {
  name: 'ArticleDecorate',
  data() {
    return {
      title: '',
      text: '',
    }
  },
  methods: {
  }
}
</script>

<style>
    textarea.article {
    resize:none;
    width:500px;
    height:300px;
  }
</style>
