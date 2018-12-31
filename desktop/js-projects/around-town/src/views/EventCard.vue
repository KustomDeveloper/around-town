<template>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
        <div class="event-card">
            <span class="event-card__eyebrow">@{{ event.time }} on {{ event.date }}</span>
            <h4 class="event-card__title">{{ event.title }}</h4>
            <p>{{ event.attendees.length }} attending</p>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        event: Object
    }
}
</script>

<style>
.event-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
}
.event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-weight: 100;
    border: 1px solid #eee;
    width: 257px;
    margin: 15px 10px 15px;
}
.event-card__eyebrow {
    text-decoration: none;
}
.event-card__title {
    margin: 0;
    text-decoration: none;
}
.event-card__attendees {
    text-decoration: none;
}
.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
