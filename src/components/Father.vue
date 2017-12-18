<template>
    <Son id="editor" class="editor" @ee="cc"></Son>
</template>
<script>
  import Son from '../components/Son'
  export default {
    components: {
      Son
    },
    methods: {
      cc: function (str) {
        alert(str)
      }
    }
}
</script>
