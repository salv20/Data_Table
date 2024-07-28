<template>
  <article
    v-for="user in currentUsers.filter((user) =>
      user.name.toLowerCase().includes(sValue.toLowerCase())
    )"
    :key="user.id"
    @click="closeSort"
    class="w-[850px] md:w-full"
  >
    <div
      class="flex justify-between border-t-2 p-4 user-container space-x-4"
      :id="user.id"
    >
      <p class="h-fit">
        <input
          type="checkbox"
          name="checkbox"
          id=""
          class="h-4 w-5 checkbox"
          :class="user.paymentStatus"
          :checked="user.paymentStatus === 'paid'"
          @click="checkboxFunc"
        />
      </p>
      <p class="h-fit text-[#8B83BA]">
        <button
          class="bx bx-chevron-down-circle text-lg px-4"
          @click="expandDetails"
        />
        <button
          class="bx bx-chevron-up-circle text-lg px-4 hidden"
          @click="closeDetails"
        />
      </p>
      <div class="h-fit w-1/4">
        <p class="capitalize text-[#25213B] font-semibold lg:">
          {{ user.name }}
        </p>
        <p class="text-[#6E6893]">{{ user.email }}</p>
      </div>

      <div class="h-fit w-1/6 space-y-1">
        <p
          class="capitalize w-fit rounded-xl px-2"
          :class="
            user.userstatus?.toLowerCase() === 'active'
              ? ' bg-[#E6E6F2] text-[#4A4AFF]'
              : ' bg-[#F2F0F9] text-[#6E6893]'
          "
        >
          <span>
            <i class="bx bxs-circle text-sm" />
          </span>
          {{ user.userstatus }}
        </p>
        <p class="text-[#6E6893]">
          Last login:
          <span class="uppercase">{{ user.loginDate }}</span>
        </p>
      </div>

      <div class="h-fitmd: w-1/6">
        <div v-if="user.paymentStatus?.toLowerCase() === 'paid'">
          <p class="capitalize bg-[#CDFFCD] w-fit rounded-xl px-2">
            <span>
              <i class="bx bxs-circle text-sm text-[#007F00]" />
            </span>
            {{ user.paymentStatus }}
          </p>
          <p class="text-[#25213B]">
            Paid on
            <span class="uppercase">{{ user.paidDate }}</span>
          </p>
        </div>

        <div v-if="user.paymentStatus?.toLowerCase() === 'overdue'">
          <p class="capitalize bg-[#FFE0E0] px-1 w-fit rounded-xl">
            <span>
              <i class="bx bxs-circle text-sm text-[#D30000]" />
            </span>
            {{ user.paymentStatus }}
          </p>

          <p class="text-[#25213B]">
            Dued on
            <span class="uppercase">{{ user.paidDate }}</span>
          </p>
        </div>
        <div v-if="user.paymentStatus?.toLowerCase() === 'unpaid'">
          <p class="capitalize w-fit bg-[#FFECCC] px-2 rounded-xl">
            <span>
              <i class="bx bxs-circle text-sm text-[#965E00]" />
            </span>
            {{ user.paymentStatus }}
          </p>
          dues on {{ user.paidDate }}
        </div>
      </div>

      <div class="h-fit w-1/12 uppercase">
        <p class="text-[#25213B] font-semibold">${{ user.amount }}</p>
        <p class="text-[#6E6893]">usd</p>
      </div>
      <p class="h-fit lg:w-fit text-[#6E6893] capitalize">view more</p>

      <div
        class="h-fit text-3xl w-18 mr-4 text-[#8B83BA]"
        :class="user.id"
        @click="toggleDots"
      >
        <i class="bx bx-dots-vertical-rounded"></i>
      </div>
    </div>

    <div :id="user.id" class="hidden additional-info w-[850px] md:w-full">
      <div v-if="user.detailDates">
        <div
          class="flex space-x-8 font-semibold pb-2.5 gap-y-80 items-center py-4 px-12 bg-[#F2F0F9] text-[#6E6893]"
        >
          <p class="w-1/6 uppercase">date</p>
          <p class="w-1/2 uppercase">user status</p>
          <div class="w-3/4 flex items-center gap-1">
            <p class="uppercase">details</p>
            <i class="bx bx-info-circle text-lg"></i>
          </div>
        </div>

        <div
          class="flex space-x-8 items-center space-y-2 py-3 border-t-[3px] py-4 px-12"
          v-for="(date, index) in user.detailDates"
          :key="index"
        >
          <p class="w-[100px] w-1/6 uppercase text-[#6E6893]">{{ date }}</p>
          <p class="w-1/2 text-[#25213B] font-semibold">
            {{ user.userActivity[index] }}
          </p>
          <p class="w-3/4 text-[#25213B] font-semibold">
            {{ user.userDetails[index] }}
          </p>
        </div>
      </div>
      <div
        class="uppercase text-[#6E6893] font-semibold md:text-lg text-center py-4"
        v-else
      >
        <h2>no records found</h2>
      </div>
    </div>
  </article>
</template>

<script>
import allUsersFunc, { currentUsers } from "../reuseable/AllUsers";
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  props: ["sValue", "closeSort"],

  setup() {
    const store = useStore();
    const allUsers = store.getters.allUsers;

    onMounted(() => {
      allUsersFunc(allUsers);
    });

    const expandDetails = (e) => {
      document
        .querySelectorAll(".bx-chevron-down-circle")
        .forEach((bx) => bx.classList.remove("hidden"));

      document
        .querySelectorAll(".bx-chevron-up-circle")
        .forEach((bx) => bx.classList.add("hidden"));

      e.target.parentElement.children[0].classList.add("hidden");
      e.target.parentElement.children[1].classList.remove("hidden");

      document
        .querySelectorAll(".additional-info")
        .forEach((info) => info.classList.add("hidden"));

      e.target
        .closest(".user-container")
        .nextSibling.classList.remove("hidden");
    };

    const closeDetails = (e) => {
      e.target.parentElement.children[0].classList.remove("hidden");
      e.target.parentElement.children[1].classList.add("hidden");

      e.target.closest(".user-container").nextSibling.classList.add("hidden");
    };

    const checkboxFunc = (e) => {
      if (e.target.classList.contains("unpaid")) {
        e.target.closest(".user-container").classList.toggle("mark-paid");
      }
    };

    return { currentUsers, expandDetails, closeDetails, checkboxFunc };
  },
};
</script>
