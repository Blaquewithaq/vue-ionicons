<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="today-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="today-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "today-sharp-icon",
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

