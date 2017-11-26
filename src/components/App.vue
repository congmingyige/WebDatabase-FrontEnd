<template>
  <div id="app">
    <el-row class="body-style">
       <img src="../assets/logo.png" ></img>    
    </el-row>
    
    <div class="block1">
      <el-row :gutter="20" class="body-style">
            <span class="demonstration" v-model="cha1">这里你将见到知识的海洋</span>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-white"></div>
        </el-col>
        <el-col :span="8" class="col-style">
          <div class="tab1">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-size">
              <el-tab-pane name="first"></el-tab-pane>
              <el-tab-pane label="登录" name="second">
                <div class="input3">
                  <el-input v-model="username" placeholder="手机号或邮箱" :cols="3" class="input-style"
                    maxlength=64 minlength=6 ></el-input>
                </div>
                <div class="input4">
                  <el-input v-model="password" placeholder="密码" :cols="3" class="input-style"
                    maxlength=64 minlength=6 type="password"></el-input>
                </div>
                <div class="button1">
                  <el-button class="el-button" @click="loginSubmit(username,password)" type="primary">登录</el-button> 
                </div>
                <el-row>
                  <el-col :span="8">
                    <div class="button2">
                      <el-button type="text" v-model="button2" class="text-button-style1">手机二维码登录</el-button>
                    </div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content bg-white">
                    </div>
                  </el-col>
                  <el-col :span="1">
                    <div class="button3">
                      <el-button type="text" v-model="button3" class="text-button-style2" >无法登录?</el-button>
                    </div>
                  </el-col>
                </el-row>
                {{flag}}
              </el-tab-pane>
              <el-tab-pane name="third"></el-tab-pane>
              <el-tab-pane name="fourth" label="注册">
                <!--这里就需要稍微布局一下了-->
                <div class="input5">
                  <el-input v-model="input5" placeholder="姓名" :cols="3" class="input-style"></el-input>
                </div>
                <div class="input6">
                  <el-input v-model="input6" placeholder="手机号" :cols="3" class="input-style"></el-input>
                </div>
                <div class="input7">
                  <el-input v-model="input7" placeholder="邮箱号" :cols="3" class="input-style"></el-input>
                </div>
                <div class="input8">
                  <el-input v-model="input8" placeholder="密码" :cols="3" class="input-style"></el-input>
                </div>
                <div class="input9">
                  <el-input v-model="input9" placeholder="密码确认" :cols="3" class="input-style"></el-input>
                </div>
                <div class="input10">
                  <el-input v-model="input10" placeholder="身份证号" :cols="3" class="input-style"></el-input>
                </div>
                <div class="button3">
                  <el-button class="el-button" v-model="button1" type="primary">注册</el-button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
     </div>
   </div>
</template>

<script>
export default {
  data (){
    return {
			input: '',
    	activeName: 'second',
      username: '',
      password: '',
      flag: ''
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    loginSubmit (username, password) {
      if(username.length>5 && username.length<64) {
          if(password.length>5 && password.length<64) {
            var account_code = {
            "100": "not_POST",
            "101": "username_invalid",
            "102": "password_invalid",
            "103": "username_existed",  //for register
            "105": "username_not_exist",  //for login
            "106": "password_error",
            "110": "register_success",
            "120": "login_success",
            "130": "reset_password_success",
            "140": "logout_success",
            "150": "options_request"
        };
        let temp = {
            "username": username,
            "password": password
        };
        let account = JSON.stringify(temp);
        this.$http.post("http://127.0.0.1:8000/login/",account)
                  .then((response) => {
                      console.log("OK");
                      console.log(response);
                      this.flag = "OJBK!!";
                      alert(account_code[response.body]);
                      if(response.body == "120") {
                        this.$router.push('/hello');
                      }
                  },
                  (response) => {
                         console.log("Not OK");
                         console.log(response);
                  });
          }
          else {
            alert("Your password input is invalid !!");
          }
      }
      else {
        alert("Your username input is invalid !!");
      }
        
    }
  }
}
</script>
<style>
body {
  font-family: Helvetica, sans-serif,MicrosoftYahei;
}
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
 .body-style {
    text-align: center;
  }
  .el-menu {
     background-color: transparent;
     width: 200px;
  }
  .el-button {
     width: 230px;
  }
  .col-style {
    margin-left: -10px;
  }
  .demonstration {
    font-size: 400;
  }
  .tab-size {
    width: 230px;
    padding-left: 15px;
  }
  .input-style {
    margin-bottom: 5px;
    width: 230px;
    height: 40px;
  }
  .text-button-style1 {
    text-align:left;
    width:120px; 
  }
  .text-button-style2 {
    text-align:right;
    width:135px;
    color:grey;
  }
    
  
</style>