<template>
  <article
    class="absolute w-[90%] sl:w-[70%] capitalize sm:w-[60%] md:w-[40%] lg:w-[30%] 2xl:w-[20%] font-semibold space-y-2 bg-white left-4 shadow-md mt-1 rounded-xl shadow-tableDarkP p-4 px-8"
    v-if="isOpen"
  >
    <h1 class="text-[#6E6893]">sort by</h1>
    <div
      @click="sortFunc"
      class="space-y-1 text-[#25213B]"
      v-for="(sort, index) in sortBy"
      :key="index"
    >
      <div
        class="flex justify-between cursor-pointer sort-btn"
        @click="openSort"
      >
        <p>{{ sort }}</p>

        <button
          class="bx bx-circle sort-bx"
          :class="
            sort.split(' ')[0] +
            (sort.split(' ')[1] !== undefined ? sort.split(' ')[1] : '')
          "
        />
      </div>
    </div>
    <h1 class="text-[#6E6893]">users</h1>

    <div
      @click="UserFunc"
      class="space-y-1 text-[#25213B]"
      v-for="(user, index) in byUsers"
      :key="index"
    >
      <div class="flex justify-between cursor-pointer user-btn">
        <p>{{ user }}</p>

        <button class="bx bx-circle user-bx" :class="user + 'btn'" />
      </div>
    </div>
  </article>
</template>

<script>
import { currentUsers } from "../reuseable/AllUsers";

export default {
  props: ["isOpen", "openSort"],

  updated() {
    document.querySelector(".default")?.classList.add("active-Stbtn");
    document.querySelector(".allbtn")?.classList.add("active-Stbtn");
  },

  //
  setup() {
    const sortBy = [
      "default",
      "first name",
      "last name",
      "email",
      "last login",
    ];

    const byUsers = ["all", "active", "inactive"];

    const sortFunc = (e) => {
      const arrayValue = currentUsers.value;

      document
        .querySelectorAll(".sort-bx")
        .forEach((bx) => bx.classList.remove("active-Stbtn"));
      e.target.closest(".sort-btn").children[1].classList.add("active-Stbtn");

      if (
        e.target
          .closest(".sort-btn")
          ?.children[1].classList.contains("firstname")
      ) {
        arrayValue.sort((a, b) =>
          a.name.split(" ")[0] > b.name.split(" ")[0] ? 1 : -1
        );
      }

      if (
        e.target
          .closest(".sort-btn")
          ?.children[1].classList.contains("lastname")
      ) {
        arrayValue.sort((a, b) =>
          a.name.split(" ")[1] > b.name.split(" ")[1] ? 1 : -1
        );
      }

      if (
        e.target.closest(".sort-btn")?.children[1].classList.contains("email")
      ) {
        arrayValue.sort((a, b) => (a.email > b.email ? 1 : -1));
      }
    };

    const UserFunc = (e) => {
      document
        .querySelectorAll(".user-bx")
        .forEach((bx) => bx.classList.remove("active-Stbtn"));
      e.target.closest(".user-btn").children[1].classList.add("active-Stbtn");
    };

    return { sortBy, byUsers, sortFunc, UserFunc };
  },
};
</script>
