<template>
  <div
    class="flex flex-col rounded-md gap-4 sm:flex-row justify-between bg-white p-2.5 w-full overflow-hidden"
  >
    <div class="flex w-full items-center">
      <button
        aria-label="filter-btn"
        class="flex items-center bg-transparent rounded-lg h-full border-[#C6C2DE] border-2 px-5 py-2 gap-1 btn-1 slide-btn"
        @click.self="openSort"
      >
        <i class="bx bxs-filter-alt text-xl text-[#8B83BA]" />
        <span class="text-[#25213B] font-semibold capitalize">filter</span>
      </button>

      <div class="w-full md:w-3/5 ml-6">
        <input
          v-model="searchValue"
          type="search"
          class="indent-4 w-full bg-[#F4F2FF] capitalize h-12 text-sm rounded-lg transition-all duration-500 outline-none border-transparent border-[2px] hover:border-[#6D5BD0] hover:shadow-sm hover:shadow-[#6D5BD0]"
          placeholder="search users by name, emial or date"
        />
      </div>
    </div>

    <button
      class="bg-[#6D5BD0] text-[#FFFFFF] uppercase font-semibold rounded-lg w-[120px] py-3"
      @click="payDuesFunc"
    >
      pay dues
    </button>
  </div>

  <DropdownVue :isOpen="isOpen" :openSort="openSort" />
</template>

<script>
import { mapMutations } from "vuex";
import DropdownVue from "./Dropdown.vue";

export default {
  emits: ["searchInput"],
  props: ["isOpen", "openSort"],

  components: {
    DropdownVue,
  },

  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapMutations(["markPaid"]),
  },

  methods: {
    payDuesFunc() {
      document.querySelectorAll(".user-container").forEach((cont) => {
        if (cont.classList.contains("mark-paid")) {
          this.$store.commit("markPaid", cont.id);

          cont.classList.remove("mark-paid");
        }
      });
    },
  },

  updated() {
    this.$emit("searchInput", this.searchValue);
  },
};
</script>
