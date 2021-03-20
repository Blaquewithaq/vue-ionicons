<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="medkit-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16z" data-fill="none"/><path d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64zm-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32zm16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="medkit-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16z" data-fill="none"/><path d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64zm-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32zm16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "medkit-icon",
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

