<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="folder-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 420a28 28 0 0 0 28 28h424a28 28 0 0 0 28-28V208H16zM496 124a28 28 0 0 0-28-28H212.84l-48-32H44a28 28 0 0 0-28 28v84h480z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="folder-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 420a28 28 0 0 0 28 28h424a28 28 0 0 0 28-28V208H16zM496 124a28 28 0 0 0-28-28H212.84l-48-32H44a28 28 0 0 0-28 28v84h480z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "folder-sharp-icon",
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

