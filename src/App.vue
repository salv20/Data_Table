<template>
  <main className="bg-[#f4f2ff] pt-10 p-5">
    <div className="mx-auto container">
      <Header :closeSort="closeSort" />

      <div class="border-2 my-6 shadow-lg shadow-[#f4f2ff] rounded-lg">
        <Search
          @searchInput="setSearch"
          :isOpen="isOpen"
          :openSort="openSort"
        />

        <div class="overflow-scroll bg-[#ffffff]">
          <TableHeader />
          <TableContentVue :sValue="searchValue" :closeSort="closeSort" />
        </div>

        <Footer />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import TableContentVue from "./components/TableContent.vue";
import TableHeader from "./components/TableHeader.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Search,
    TableHeader,
    TableContentVue,
    Footer,
  },
  data() {
    return {
      searchValue: "",
      isOpen: false,
    };
  },

  methods: {
    setSearch(search) {
      this.searchValue = search;
    },

    openSort() {
      this.isOpen = !this.isOpen;
    },

    closeSort() {
      this.isOpen = false;
    },
  },
};
</script>
