<template>
    <div>
      <h1><span>Local</span> Events</h1>
      <b-container class="card-container">

          <b-card-group>
            <EventCard v-for="event in events" :key="event.id" :event="event"/>
          </b-card-group>

          <template v-if="page != 1">
              <router-link :to="{ name: 'home', query: { page: page - 1 } }" 
              rel="prev"><span class="prev-page">&larr; Prev Page</span></router-link>
              <template v-if="hasNextPage"><span class="sep"> | </span></template>
          </template>
 
          <template v-if="hasNextPage">
              <router-link :to="{ name: 'home', query: { page: page + 1 } }" 
              rel="next"><span class="next-page">Next Page &rarr;</span></router-link>
          </template>

      </b-container>

    </div>
</template>
    
<script>
    import EventCard from '@/components/EventCard.vue'
    import { mapState } from 'vuex'
    
    export default {
      components: {
        EventCard
      },
      created() {
        this.perPage = 8
        this.$store.dispatch('fetchEvents', {
          perPage:this.perPage,
          page: this.page
        })
      },
      computed: {
        page() {
          return parseInt(this.$route.query.page) || 1
        },
        hasNextPage() {
          return this.totalEvents > this.page * this.perPage
        },
        ...mapState(['events', 'totalEvents'])
      }
    }
 </script>

<style>
.card-container {
  margin-top:30px;
  margin-bottom:30px;
}
.sep {
  color:#fff;
}
.next-page, .prev-page {
  color:#fff;
  font-weight:bold;
  display:inline-block;
  margin-top:20px;
}
</style>