<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="apps-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M104 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM104 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM104 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="apps-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M104 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM104 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM104 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM256 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56zM408 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "apps-icon",
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

