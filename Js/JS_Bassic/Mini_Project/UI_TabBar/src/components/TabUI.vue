<template>
  <div class="body-content">
    <v-card variant="text" class="card-parent">
      <v-tabs v-model="tab" bg-color="light" color="pink">
        <v-tab value="React"
          ><span class="mdi mdi-code-tags"></span>React</v-tab
        >
        <v-tab value="Angular"><span class="mdi mdi-cog"></span>Angular</v-tab>
        <v-tab value="Ember"
          ><span class="mdi mdi-plus-circle"></span>Ember</v-tab
        >
        <v-tab value="VueJS"
          ><span class="mdi mdi-fountain-pen-tip"></span>VueJs</v-tab
        >
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="React">
            <v-card variant="text">
              <v-card-title> React</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consequuntur sed odit deserunt facilis. Neque, repellat, quas
                praesentium qui nobis porro reiciendis voluptatibus sint natus
                omnis hic, ratione iure dignissimos.
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="Angular">
            <v-card variant="text">
              <v-card-title>Angular</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consequuntur sed odit deserunt facilis. Neque, repellat, quas
                praesentium qui nobis porro reiciendis voluptatibus sint natus
                omnis hic, ratione iure dignissimos.
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item value="Ember"
            ><v-card variant="text">
              <v-card-title>Ember</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consequuntur sed odit deserunt facilis. Neque, repellat, quas
                praesentium qui nobis porro reiciendis voluptatibus sint natus
                omnis hic, ratione iure dignissimos.
              </v-card-text>
            </v-card></v-tabs-window-item
          >
          <v-tabs-window-item value="VueJS"
            ><v-card variant="text">
              <v-card-title>VueJS</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                consequuntur sed odit deserunt facilis. Neque, repellat, quas
                praesentium qui nobis porro reiciendis voluptatibus sint natus
                omnis hic, ratione iure dignissimos.
              </v-card-text>
            </v-card></v-tabs-window-item
          >
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);
</script>

<style lang="css" scoped>
.card-parent {
  width: 430px;
}
.body-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
