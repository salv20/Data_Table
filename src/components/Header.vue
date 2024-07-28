<template>
  <header class="w-full overflow-hidden" @click="closeSort">
    <div class="leading-loose border-b border-[#C6C2DE] font-bold grid gap-4">
      <h2 class="text-[#6E6893] uppercase font-bold tracking-widest">
        table heading
      </h2>
      <article
        class="md:flex justify-between space-y-2 md:space-y-0 text-[#6E6893]"
      >
        <ul class="flex space-x-3" @click="ActiveList">
          <button className="list active" @click="unfilteredFunc">all</button>
          <button className="list" @click="paidFunc">paid</button>
          <button className="list unpaid" @click="unpaidFunc">unpaid</button>
          <button className="list" @click="overDueFunc">overdue</button>
        </ul>

        <p class="text-[#6E6893]">
          Total payable amount:
          <span class="text-[#8172d6]">{{ Total }}</span>
          <span> USD</span>
        </p>
      </article>
    </div>
  </header>
</template>

<script>
import allUsersFunc, { currentUsers } from "../reuseable/AllUsers";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";

export default {
  props: ["closeSort"],

  setup() {
    const store = useStore();
    const allUsers = store.getters.allUsers;
    let unpaidUsers, paidUsers, overdueUsers;

    const Total = ref(null);

    onMounted(() => {
      unpaidUsers = store.getters.unpaidUsers;
      paidUsers = store.getters.paidUsers;
      overdueUsers = store.getters.overdueUsers;

      const price = [];

      unpaidUsers.map((users) => price.push(users.amount));
      overdueUsers.map((users) => price.push(users.amount));
      Total.value = price.reduce((sig, sum) => sig + sum);
    });

    watch(store.state, () => {
      unpaidUsers = store.getters.unpaidUsers;
      paidUsers = store.getters.paidUsers;

      if (currentUsers.value.length <= 3) {
        allUsersFunc(unpaidUsers);
      }

      const price = [];

      unpaidUsers.map((users) => price.push(users.amount));
      overdueUsers.map((users) => price.push(users.amount));
      Total.value = price.reduce((sig, sum) => sig + sum);

      console.log(Total.value);
    });

    const unfilteredFunc = () => {
      allUsersFunc(allUsers);
    };
    const paidFunc = () => {
      allUsersFunc(paidUsers);
    };
    const unpaidFunc = () => {
      allUsersFunc(unpaidUsers);
    };
    const overDueFunc = () => {
      allUsersFunc(overdueUsers);
    };

    // TOGGLE ACTIVE CLASS
    const ActiveList = (e) => {
      if (e.target.classList.contains("list")) {
        document
          .querySelectorAll(".list")
          .forEach((li) => li.classList.remove("active"));
      }
      e.target.classList.add("active");
    };

    return {
      paidFunc,
      unpaidFunc,
      overDueFunc,
      unfilteredFunc,
      ActiveList,
      Total,
    };
  },
};
</script>
