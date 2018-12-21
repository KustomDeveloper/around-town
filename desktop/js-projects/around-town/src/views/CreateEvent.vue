<template>
<div>

     <b-form @submit.prevent="createEvent" id="create-event-form">
       <h1>Create an Event</h1>
      <!-- <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select> -->
        <h3>Name and describe your event</h3>
        <b-form-group class="field" id="event-name">
            <b-form-input id="event-name-field"
                type="text"
                v-model="event.title"
                required
                placeholder="Add an event title">
            </b-form-input>
        </b-form-group>
        

        <b-form-textarea class="field" id="textarea1"
              v-model="event.description"
              placeholder="Add a description"
              :rows="3"
              :max-rows="6">
        </b-form-textarea>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </b-form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event')
        })
    },
    getCoordinates() {
      this.$getLocation(options)
      .then(coordinates => {
       console.log(coordinates);
      });
    },
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
#create-event-form {
  width:100%;
  max-width:400px;
  margin:0 auto;
}
#create-event-form h3 {
  text-align:left;
  font-size:18px;
  margin:40px 0 20px;
}
#create-event-form h1 {
  text-align:left;
}
</style>
