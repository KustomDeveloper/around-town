<template>
  <b-container class="event-header">
    <b-row>
      <b-col class="event-details">
        <h1 class="title">{{ event.title }}</h1>
        <hr />
        <div class="event-body">
          <p class="event-time"><b>Time:</b> {{ event.time }} on {{ event.date }} | <b>Category:</b> {{ event.category }}</p>
          <h3>Location:</h3>
          <p>{{ event.location }}</p>
          <h3>Event details:</h3>
          <p>{{ event.description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchEvent", this.id)
  },
  computed: mapState(["event"]) 
}
</script>

<style>
h3 {
  color:#000;
}
.event-details {
  background: #fff;
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
  border-radius:3px;
}
.event-details h1 {
  color:#47B8A0;
}
.event-details p {
  color:#000;
}
.event-body {
  padding:20px 0;
}
.event-time {
  color:#000;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>