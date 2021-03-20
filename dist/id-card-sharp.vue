<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="id-card-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24zm-61.1 296.77a43 43 0 1 1-40.71-40.71 43 43 0 0 1 40.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="id-card-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24zm-61.1 296.77a43 43 0 1 1-40.71-40.71 43 43 0 0 1 40.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "id-card-sharp-icon",
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

