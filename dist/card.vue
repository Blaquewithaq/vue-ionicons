<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="card-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30zM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="card-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30zM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "card-icon",
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

