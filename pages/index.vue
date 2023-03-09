<template>
  <div>
    <div>
      <p>
        ts.getAll()
      </p>
      <div
        v-for="(item, index) in ts.getAll()"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>

    <div>
      <div>
        ts.getItem(7)
      </div>
      <div>
        {{ ts.getItem(7) }}
      </div>
      <br>
    </div>

    <div>
      <p>
        ts.getChildren(4)
      </p>
      <div
        v-for="(item, index) in ts.getChildren(4)"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>

    <div>
      <p>
        ts.getChildren(5)
      </p>
      <div
        v-for="(item, index) in ts.getChildren(5)"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>

    <div>
      <p>
        ts.getChildren(2)
      </p>
      <div
        v-for="(item, index) in ts.getChildren(2)"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>

    <div>
      <p>
        ts.getAllChildren(2)
      </p>
      <div
        v-for="(item, index) in ts.getAllChildren(2)"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>

    <div>
      <p>
        ts.getAllParents(7)
      </p>
      <div
        v-for="(item, index) in ts.getAllParents(7)"
        :key="`ts.getAll() - ${index}`"
      >
        {{ item }}
      </div>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TreeStore from '~/utils/classes/TreeStore'
import { IItem } from '~/utils/classes/types'

export default Vue.extend({
  name: 'IndexPage',

  data() {
    return {
      items: [
        { id: 1, parent: 'root' },

        { id: 2, parent: 1, type: 'test' },
        { id: 3, parent: 1, type: 'test' },

        { id: 4, parent: 2, type: 'test' },
        { id: 5, parent: 2, type: 'test' },
        { id: 6, parent: 2, type: 'test' },

        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null },

        { id: 9, parent: 5, type: null },

        { id: 10, parent: 9, type: null }
      ] as IItem[]
    }
  },

  computed: {
    ts(): TreeStore {
      return new TreeStore(this.items)
    }
  }
})

</script>

<style lang="scss">

</style>
