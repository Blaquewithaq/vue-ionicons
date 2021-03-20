<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="journal-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186zM408 32h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="journal-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186zM408 32h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "journal-sharp-icon",
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

