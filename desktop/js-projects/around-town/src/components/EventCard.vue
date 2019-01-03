<template>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
            <b-card :title="event.title"
            :img-src="eventImage"
            img-alt="event"
            img-top
            tag="event"
            style=""
            class="text-center">
            <p>{{ event.description }}</p>
            <h3 class="card-text"><b>Time:</b> {{ event.time }} on {{ event.date }}</h3>
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
.card-text {
    color:#000;
    font-size:16px;
}
.card-group .card {
    width: 270px;
    height: 300px;
    margin: 3px;
}
.card-group .card p {
    color:#000;
}
.card-img-top {
    max-width: 100px;
    margin: 15px auto;
}
.card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5), 0 1px 15px 0 rgba(0, 0, 0, 0.5);
}
</style>
