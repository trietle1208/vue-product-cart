<template>
  <Card>
    <template #header> </template>
    <template #title>
      <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
      <span>{{ user.name }}</span>
      <Rating v-model="valRating" :cancel="false" :readonly="true"/>
    </template>
    <template #content>
      <span>{{ review.comment }}</span>
    </template>
    <template #footer>
      <!-- <Button label="Reply" icon="pi pi-comments" class="p-button-sm"  /> -->
    </template>
  </Card>
  <br />
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const user = ref({});

const { review } = defineProps({
  review: Object,
});

const valRating = review.rating;

store.dispatch("getInfoUserReview", review.user_id).then((res) => {
  user.value = res.data.data;
});
</script>

<style scoped>
.p-card {
  width: 50%;
  height: 50%;
  text-align: left;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 12px;
  /* max-height: 150px; */
}
.p-avatar {
  position: absolute;
  margin-top: 50px;
  margin-left: 16px;
}
.p-card-title span {
  font-weight: 600;
  color: crimson;
  font-size: 20px;
  margin-left: 24px;
}

.p-rating {
  margin-left: 92px;
}


.p-card-content span {
  margin-left: 92px;
}

.p-card-footer .p-button{
  margin-left: 520px;
}
.pi-star-fill {
  color: rgb(251, 251, 73);
}
</style>
