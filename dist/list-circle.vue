<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="list-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-71a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-73a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="list-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-71a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-73a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "list-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

