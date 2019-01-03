<template>
<div>
     <b-form @submit.prevent="createEvent" id="create-event-form">
       <h1><span>Create</span> an Event</h1>
   
        <h3>Name and describe your event</h3>
        <b-form-group class="field" id="event-name">
            <b-form-input id="event-name-field"
                type="text"
                v-model="event.title"
                required
                placeholder="Event name">
            </b-form-input>
        </b-form-group>
        <b-form-textarea class="field" id="textarea1"
              v-model="event.description"
              placeholder="Add a description"
              :rows="3"
              :max-rows="6">
        </b-form-textarea>
        <h3>Where is your event?</h3>
        <b-form-group class="field" id="event-location">
            <b-form-input class="bhalf" id="event-city-field"
                type="text"
                v-model="event.location_city"
                required
                placeholder="City">
            </b-form-input>
            <b-form-input class="bhalf" id="event-state-field"
                type="text"
                v-model="event.location_state"
                required
                placeholder="State">
            </b-form-input>
        </b-form-group>
      <h3>When is your event?</h3>
      <b-form-group class="field" id="event-date">
          <datepicker input-class="datepicker" v-model="event.date" placeholder="Select a date"/>
      </b-form-group>
      <h3>Select a time</h3>
      <b-form-group class="field" id="event-time">
        <select class="bselect" v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </b-form-group>
      <h3>Select a category</h3>
      <b-form-group class="field" id="event-category">
        <select class="bselect" v-model="event.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </b-form-group>
      <b-button type="submit" variant="primary">Create Event</b-button>
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
    const times = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", 
    "12:00 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", 
    "6:00 pm"]
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
      this.$getLocation()
      .then(coordinates => {
       console.log(coordinates);
      })
      .catch((error) => {
        console.log(error);
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
        location_city: '',
        location_state: '',
        date: '',
        time: '',
        attendees: [],
      }
    }
  }
}
</script>
<style>
.bhalf {
    float: left;
    width: 100%;
    max-width: 180px;
}
input#event-city-field {
    margin-right: 5px;
}
.field {
  margin-bottom: 15px;
}
select.bselect, #create-event-form .datepicker {
    float: left;
    height: 38px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    padding-left: 10px;
}
#create-event-form {
  width:100%;
  max-width:400px;
  margin:0 auto;
}
#create-event-form h3 {
  text-align:left;
  font-size:16px;
  margin:20px 0 8px;
}
#create-event-form h1 {
  text-align:left;
}
.btn-primary {
    color: #fff;
    background-color: #F3A61C;
    border-color: #F3A61C;
}
.btn-primary:hover {
    color: #fff;
    background-color: #CC773D;
    border-color: #CC773D;
}
#create-event-form .btn-primary:active, 
#create-event-form .btn-primary:focus, 
#create-event-form .btn-primary:visited {
    color: #fff;
    background-color: #CC773D;
    border-color: #F3A61C;
    box-shadow: 0 0 0 0.2rem rgba(243, 166, 28,.5);
}
</style>
