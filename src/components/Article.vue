<template>
    <div id="Article" v-show="condition">
    <el-container>
        <el-header style="padding:0;">
            <el-row>
                <el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal">
                <el-row>
                    <el-col :span="8"  type="flex" justify="space-around">
                      <el-menu-item index="1" class="font-size-large">
                        <a src="www.baidu.com"><img src="../assets/logo.png" style="height:60px;" class="nav-logo"></a>
                      </el-menu-item>
                      <el-menu-item index="1" class="font-size-large">发现</el-menu-item>
                      <el-menu-item index="1" class="font-size-large">关注</el-menu-item>
                      <el-menu-item index="1" class="font-size-large">消息</el-menu-item>
                    </el-col>
                    <el-col :span="14">
                      <el-menu-item index="1">
                          <el-input>
                                placeholder="请输入想查找的内容"
                                icon="search"
                                v-model="input2"
                                :on-icon-click="handleIconClick">
                          </el-input>
                          <el-button type="primary">搜索</el-button>
                      </el-menu-item>
                    </el-col>
                    <el-col :span="2">
                      <div style="display:flex; display:-webkit-flex; align-items:center;">
                          <el-submenu index="2">
                              <template slot="title"><img src="../assets/logo.png" style="height:40px;"></template>
                              <el-menu-item index="2-1">我的主页</el-menu-item>
                              <el-menu-item index="2-2">设置</el-menu-item>
                              <el-menu-item index="2-3">退出</el-menu-item>
                          </el-submenu>
                      </div>
                    </el-col>
                </el-row>
                </el-menu>
            </el-row>
        </el-header>


        <el-main>
          <div>
            <el-row>
                <el-col :span="6" :offset="6">
                  <div class="headline-center-outer">
                    <h1 class="font-size-exlarge font-color-heavy headline-center-inner"> {{ title }} </h1>
                  </div>
                </el-col>
                <el-col :span="4" :offset="20">
                    这里放广告
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" :offset="6">
                  <div class="author">
                    <img src="../assets/logo.png" class="nav-usr" style="height:40px;">
                    <div style="position:relative; left:40px;">
                      <a class="font-size-small font-color-medium"> {{ author }} </a>
                      <div>
                        <span class="font-size-exsmall font-color-exlight">
                          {{ time }} 字数 {{ text_length }}  阅读 {{ views }} 评论 {{ comment_count }} 喜欢 {{ liked }}
                        </span>
                      </div>
                      <el-button-group>
                        <el-button type="primary" icon="el-icon-edit" @click="articleUpdate"></el-button>
                        <el-button type="primary" icon="el-icon-delete" @click="articleDelete"></el-button>
                        <el-button type="primary" v-bind:icon='star' @click="starChange"></el-button>
                        <el-button type="primary" icon="el-icon-arrow-up" @click="likedChange"></el-button>
                        <el-button type="primary" icon="el-icon-arrow-down" @click="not_likedChange"></el-button>
                      </el-button-group>
                    </div>
                  </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" :offset="6">
                  <p id="article_text"></p>
                </el-col>
            </el-row>
          </div>

          <div>
            <el-row>
              <el-col :span="12" :offset="6" style="padding:0 0 0 3px;margin-bottom:10px;border-bottom-color:rgb(240,240,240); border-bottom-style:solid; border-bottom-width:0.9px; ">
                <div class="author">
                  <img src="../assets/logo.png" class="nav-usr" style="height:40px;">
                  <div style="text-align:center; margin-top:10px;">
                    <el-input
                      type="text"
                      :rows="2"
                      placeholder="请在此添加你的评论"
                      v-model="content"
                      style="position:relative; left:50px;">
                    </el-input>
                    <el-button type="primary" round style="display:inline; margin:10px 0 10px;" @click="commentCreate">提交</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24" style="text-align:center">
                <div class="rating">
                  <span class="font-size-small font-color-light text-align:center"> 请给这篇文章打个分吧 </span>
                  <el-rate
                    v-model="article_score"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
              </el-col>
            </el-row>

            <span v-for="comment in comments">
              <Comment :comment_id="comment.id" :comment_author="comment.author" :comment_time="comment.time" :comment_content="comment.content"></Comment>
            </span>
          </div>

        </el-main>
        <el-footer>
          <div class="footer">
            footer
          </div>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Comment from '../components/Comment'
  export default {
    components: {
      Comment,
    },
    name: 'Article',
    data() {
      this.articleOpen();
      return {
        condition: false,
        star: 'el-icon-star-off',
        title: '',
        author: '',
        time: '',
        text: '',
        views: 0,
        liked: 0,
        text_length: 0,
        comment_count: 0,
        activeIndex: '1',
        content: '',

        article_score: 0,

        comments: '',
        comment_id: '',
        comment_author: '',
        comment_time: '',
        comment_content: ''

      }
    },
    methods: {
      articleOpen: function () {
        document.cookie = "username" + "=" + "chen" + ";";
        this.$http.post("http://127.0.0.1:8005/p/" + this.$route.params.id_article)
          .then((response) => {
              if (response.body == "106") {
                alert('文章不存在');
                return;
              }
              this.condition = true;
              var article = response.body.article[0];
              this.title = article[0];
              if (article[2] == null)
                this.author = article[1];
              else
                this.author = article[2];
              this.time = article[3];
              this.text = article[4];
              this.views = article[5];
              this.liked = article[6];
              this.text_length = this.text.length;
              document.getElementById('article_text').innerHTML = this.text;

              this.comments = response.body.article_comments;
              this.comment_count = this.comments.length;

            },
            (response) => {
              alert('数据传输失败');
            });
      },
      starChange: function () {
        if (this.star == "el-icon-star-off")
          this.star = "el-icon-star-on";
        else
          this.star = "el-icon-star-off";
      },
      likedChange: function () {
        this.$http.post("http://127.0.0.1:8005/p/" + this.$route.params.id_article + '/liked')
          .then((response) => {
              this.liked = this.liked + 1;
            },
            (response) => {
              alert('数据传输失败');
            });

      },
      not_likedChange: function () {
        this.$http.post("http://127.0.0.1:8005/p/" + this.$route.params.id_article + '/not_liked')
          .then((response) => {
              this.liked = this.liked - 1;
            },
            (response) => {
              alert('数据传输失败');
            });

      },
      articleUpdate: function () {
        this.$router.push("/p/" + this.$route.params.id_article + '/update');
      },
      articleDelete: function () {
        this.$http.post("http://127.0.0.1:8005/p/" + this.$route.params.id_article + '/delete')
          .then((response) => {
              alert('删除文章成功');
              location.reload();
            },
            (response) => {
              alert('数据传输失败');
            });
      },
      commentCreate: function () {
        if (this.content.length == 0) {
          alert('评论信息不能为空');
          return;
        }
        let temp = {
          'content': this.content
        };
        let comment = JSON.stringify(temp);
        this.$http.post("http://127.0.0.1:8005/p/" + this.$route.params.id_article + "/c/create", comment)
          .then((response) => {
              //刷新当前网页
              location.reload();
            },
            (response) => {
              alert('数据传输失败');
            });
      }
    }
  }
</script>

<style>
   .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.font-size-exlarge{
  font-size:40px;
}
.font-size-large{
  font-size: 20px;
}

.font-size-medium{
  font-size: 15px;
}

.font-size-small{
  font-size:12px;
}

.font-size-exsmall{
  font-size:10px;
}

.font-color-exheavy{
  color:##000000//be careful when using it cuse it atrract too much attention
}

.font-color-heavy{
  color:#1a1a1a;
}

.font-color-medium{
  color:#404040;
}

.font-color-light{
  color:##595959;
}

.font-color-exlight{
  color:#999999;
}

.blcok-bottom-line{
  border-bottom-color:rgb(240,240,240);
  border-bottom-style:solid;
  border-bottom-width:0.9px;
}

.img-height{
  display: inline;
  height:100%;
}

.img-center{
  text-align:center;
}

.footer{
  height:200px;
  background-color:#4d79ff;
  color: #ffffff;
}

.text-certer-outer{
  height:40px;
  width: 100%;
  margin: 20px auto 10px;
}

.text-center-inner{
  margin:0 auto;

}
</style>
