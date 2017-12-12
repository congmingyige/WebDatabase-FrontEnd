<template>
  <div id="ArticleUpdate">
    <ArticleDecorate ref="article_decorate"></ArticleDecorate>
    <el-button @click="articleUpdate">确定</el-button>
  </div>
</template>

<script>
  import ArticleDecorate from '../components/ArticleDecorate'
  export default {
    components: {
      ArticleDecorate,
    },
    name: 'ArticleUpdate',
    data() {
      this.articleGet();
      return {
      }
    },
    methods: {
      articleGet: function() {
        this.$http.post("http://127.0.0.1:8005/p/"+this.$route.params.id_article+"/article")
                  .then((response) => {
                      if (response.body == '106') {
                        alert('文章不存在');
                        return;
                      }
                      this.$refs.article_decorate.title = response.body[0][0];
                      this.$refs.article_decorate.text = response.body[0][1];
                    },
                    (response) => {
                      alert('获取数据失败');
                    });
      },
      articleUpdate: function () {
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
          text: text,
        };
        let article = JSON.stringify(temp);
        this.$http.post("http://127.0.0.1:8005/p/"+this.$route.params.id_article+"/update", article)
                  .then((response) => {
                      if (response.body == '106') {
                        alert('文章不存在');
                        return;
                      }
                      if (response.body == '105') {
                        alert('同名文章存在');
                        return;
                      }
                      alert('更新文章成功');
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
