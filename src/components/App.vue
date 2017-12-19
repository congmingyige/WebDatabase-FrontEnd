<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      name: 'App',
      data() {
          return {

          }
      },
      methods: {
          set: function (name, value, days) {
              var d = new Date;
              d.setTime(d.getTime() + 24*60*60*1000*days);
              window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
              //window.document.cookie = name + "=" + value + ";path=/;Max-Age=" + '0';
          },
          get: function (name) {
              var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
              return v ? v[2] : null;
          },
          delete: function (name) {
              this.set(name, '', -1);
          },
          //document.cookie = "Max-Age=0";
      }
  }
</script>