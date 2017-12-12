<template>
  <div id="ArticleCreate">
    <ArticleDecorate ref="article_decorate"></ArticleDecorate>
    <el-button @click="articleCreate">确定</el-button>
  </div>
</template>

<script>
  import ArticleDecorate from '../components/ArticleDecorate'
  export default {
    components: {
      ArticleDecorate,
    },
    name: 'ArticleCreate',
    data() {
      return {
      }
    },
    methods: {
      articleCreate: function () {
        let title = this.$refs.article_decorate.title;
        if (title.length == 0) {
          alert("标题不能为空");
          return;
        }
        let text = this.$refs.article_decorate.text;
        if (text.length == 0) {
          alert("内容不能为空");
          return;
        }

        let temp = {
          title: title,
          text: text
        };
        let article = JSON.stringify(temp);
        this.$http.post("http://127.0.0.1:8005/p/create", article)
                  .then((response) => {
                      if (response.body == '105') {
                        alert('同名文章存在');
                        return;
                      }
                      alert('创建文章成功');
                    },
                    (response) => {
                      alert('数据传输失败');
                    });
      }
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
