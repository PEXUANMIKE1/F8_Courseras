<template>
  <div class="container">
    <div>
      <!-- tab items -->
      <div class="tabs">
        <div
          class="tab-item"
          @click="changeTab('react')"
          :class="{ active: currentTab === 'react' }"
        >
          <i class="tab-icon fas fa-code"></i>
          React
        </div>
        <div
          class="tab-item"
          @click="changeTab('angular')"
          :class="{ active: currentTab === 'angular' }"
        >
          <i class="tab-icon fas fa-cog"></i>
          Angular
        </div>
        <div
          class="tab-item"
          @click="changeTab('ember')"
          :class="{ active: currentTab === 'ember' }"
        >
          <i class="tab-icon fas fa-plus-circle"></i>
          Ember
        </div>
        <div
          class="tab-item"
          @click="changeTab('vue.js')"
          :class="{ active: currentTab === 'vue.js' }"
        >
          <i class="tab-icon fas fa-pen-nib"></i>
          Vue.js
        </div>
        <div class="line" :style="lineStyle"></div>
      </div>

      <!-- tab content -->
      <div class="tab-content">
        <div class="tab-pane" :class="{ active: currentTab === 'react' }">
          <h2>React</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
        <div class="tab-pane" :class="{ active: currentTab === 'angular' }">
          <h2>Angular</h2>
          <p>
            Angular is an application design framework and development platform
            for creating efficient and sophisticated single-page apps.
          </p>
        </div>
        <div class="tab-pane" :class="{ active: currentTab === 'ember' }">
          <h2>Ember</h2>
          <p>
            Ember.js is a productive, battle-tested JavaScript framework for
            building modern web applications. It includes everything you need to
            build rich UIs that work on any devic
          </p>
        </div>
        <div class="tab-pane" :class="{ active: currentTab === 'vue.js' }">
          <h2>Vue.is</h2>
          <p>
            Vue (pronounced /vjuː/, like view) is a progressive framework for
            building user interfaces. Unlike other monolithic frameworks, Vue is
            designed from the ground up to be incrementally adoptable.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentTab = ref("react");

const changeTab = (tab) => {
  currentTab.value = tab;
};

const lineStyle = computed(() => {
  const left =
    25 * ["react", "angular", "ember", "vue.js"].indexOf(currentTab.value);
  return {
    left: `${left}%`,
  };
});
</script>
<style scoped>
.container{
  display: flex;
  font-family: "Poppins", sans-serif;
}
.container > div{
  margin: 100px auto 0;
  max-width: 720px;
}
.tabs {
  display: flex;
  position: relative;
  max-width: 640px;
}
.tabs .line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 25%;
  border-radius: 15px;
  background-color: #c23564;
  transition: all 0.2s ease;
}
.tab-item {
  min-width: 160px;
  padding: 16px 20px 11px 20px;
  font-size: 20px;
  color: #c23564;
  text-align: center;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 5px solid transparent;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.5s ease;
}
.tab-icon {
  font-size: 24px;
  width: 32px;
  position: relative;
  top: 2px;
}
.tab-item:hover {
  opacity: 1;
  border-color: rgba(194, 53, 100, 0.1);
  background-color: rgba(194, 53, 100, 0.05);
}
.tab-item.active {
  opacity: 1;
}
.tab-pane {
  color: #333;
  display: none;
}
.tab-pane.active {
  display: block;
}
.tab-pane h2 {
  font-size: 24px;
  margin-bottom: 8px;
}
</style>
