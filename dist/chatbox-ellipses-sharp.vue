<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="chatbox-ellipses-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24zM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM456 80z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="chatbox-ellipses-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24zM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM456 80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "chatbox-ellipses-sharp-icon",
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

