<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="tablet-portrait-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18zM100 448V64h312v384z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="tablet-portrait-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18zM100 448V64h312v384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "tablet-portrait-sharp-icon",
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

