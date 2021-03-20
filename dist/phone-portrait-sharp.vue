<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="phone-portrait-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18zM148 448V64h216v384z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="phone-portrait-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18zM148 448V64h216v384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "phone-portrait-sharp-icon",
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

