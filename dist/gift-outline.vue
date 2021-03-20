<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="gift-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 104v56h56a56 56 0 1 0-56-56zM256 104v56h-56a56 56 0 1 1 56-56z" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272M256 160v304" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="gift-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 104v56h56a56 56 0 1 0-56-56zM256 104v56h-56a56 56 0 1 1 56-56z" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272M256 160v304" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "gift-outline-icon",
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

