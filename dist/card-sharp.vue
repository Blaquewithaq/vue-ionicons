<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="card-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V222H32zm66-138a8 8 0 0 1 8-8h92a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-92a8 8 0 0 1-8-8zM464 80H48a16 16 0 0 0-16 16v66h448V96a16 16 0 0 0-16-16z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="card-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V222H32zm66-138a8 8 0 0 1 8-8h92a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-92a8 8 0 0 1-8-8zM464 80H48a16 16 0 0 0-16 16v66h448V96a16 16 0 0 0-16-16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "card-sharp-icon",
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

