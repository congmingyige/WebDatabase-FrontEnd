<template>
  <div>
    <button @click="submit" id="abc">提交</button>
    <p id="text">12345</p>
  </div>
</template>
<script>
export default {
  data() {
    console.log(document.getElementById('text').innerHTML);
    return {

    }
  },
  methods: {
    submit: function () {
      console.log(document.getElementById('abc').innerHTML);
      console.log('abcd');
      // 子组件中触发父组件方法ee并传值cc12345
      //this.$emit('ee', 'cc12345')
    }
  }
}
</script>
