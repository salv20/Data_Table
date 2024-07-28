import { ref, watchEffect } from "vue";

export const currentUsers = ref([]);

const allUsersFunc = (allusers) => {
  watchEffect(() => {
    currentUsers.value = allusers;
  }, allusers);

  return currentUsers.value;
};

export default allUsersFunc;
