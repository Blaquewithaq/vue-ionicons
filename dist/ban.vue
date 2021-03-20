<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ban-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="48" cx="256" cy="256" r="200"/><path stroke="#000" stroke-miterlimit="10" stroke-width="48" d="M114.58 114.58l282.84 282.84"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ban-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="48" cx="256" cy="256" r="200"/><path stroke="#000" stroke-miterlimit="10" stroke-width="48" d="M114.58 114.58l282.84 282.84"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ban-icon",
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

