<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="phone-landscape-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18zm448 234H64V148h384z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="phone-landscape-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18zm448 234H64V148h384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "phone-landscape-sharp-icon",
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

