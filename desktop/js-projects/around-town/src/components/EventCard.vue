<template>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
            <b-card :title="event.title"
            :img-src="eventImage"
            img-alt="event"
            img-top
            tag="event"
            style=""
            class="text-center">
            <p class="card-text">@{{ event.time }} on {{ event.date }}</p>
            <p><BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon></p>
            </b-card>
    </router-link>
</template>

<script>


export default {
    props: {
        event: Object
    },
    data() {
        return {
            eventImage: require('@/assets/event.svg')
        }
    }
}
</script>

<style scoped>
.event-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
}
.card-group .card {
    width: 270px;
    height: 300px;
    margin: 3px;
}
.card-img-top {
    max-width: 100px;
    margin: 15px auto;
}
.card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
