<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="bowling-ball-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="288" cy="200" r="24"/><circle cx="296" cy="128" r="24"/><circle cx="360" cy="168" r="24"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="bowling-ball-outline-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><circle cx="288" cy="200" r="24"/><circle cx="296" cy="128" r="24"/><circle cx="360" cy="168" r="24"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bowling-ball-outline-icon",
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

