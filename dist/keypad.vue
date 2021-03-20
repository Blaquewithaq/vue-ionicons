<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="keypad-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 400a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="keypad-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 400a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM384 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM128 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "keypad-icon",
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

