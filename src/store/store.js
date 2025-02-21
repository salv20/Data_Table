import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        id: 1,
        name: "justin septimus",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 200,
        email: "justin@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        id: 2,
        name: "anika rhiek madsen",
        userstatus: "active",
        paymentStatus: "overdue",
        amount: 300,
        email: "anika@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",

        detailDates: [
          "12/apr/2020",
          "12/apr/2020",
          "08/apr/2020",
          "08/apr/2020",
          "04/apr/2020",
        ],
        userActivity: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
        ],
        userDetails: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
        ],
      },
      {
        id: 3,
        name: "miracle vaccaro",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 250,
        email: "miracle@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        id: 4,
        name: "erin levin",
        userstatus: "active",
        paymentStatus: "unpaid",
        amount: 200,
        email: "erin@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
        detailDates: [
          "12/apr/2020",
          "12/apr/2020",
          "08/apr/2020",
          "08/apr/2020",
          "04/apr/2020",
        ],
        userActivity: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
        ],
        userDetails: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
        ],
      },
      {
        id: 5,
        name: "mira herwitz",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 200,
        email: "mira@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        id: 6,
        name: "jaxson siphron",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 750,
        email: "jaxson@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        id: 7,
        name: "mira levin",
        userstatus: "active",
        paymentStatus: "unpaid",
        amount: 200,
        email: "mira@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
        detailDates: [
          "12/apr/2020",
          "12/apr/2020",
          "08/apr/2020",
          "08/apr/2020",
          "04/apr/2020",
        ],
        userActivity: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
        ],
        userDetails: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
        ],
      },
      {
        id: 8,
        name: "lincoln levin",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 350,
        email: "lincoln@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        id: 9,
        name: "philip saris",
        userstatus: "inactive",
        paymentStatus: "unpaid",
        amount: 200,
        email: "philip@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
        detailDates: [
          "12/apr/2020",
          "12/apr/2020",
          "08/apr/2020",
          "08/apr/2020",
          "04/apr/2020",
        ],
        userActivity: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo unde facere iusto similique",
        ],
        userDetails: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam voluptate soluta sapiente placeat ducimus quasi adipisci ab ad voluptatibus.",
        ],
      },
      {
        id: 10,
        name: "cheyenne ekstrom bothman",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 150,
        email: "cheyenne@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
    ],
  },

  getters: {
    allUsers: (state) => state.users,

    paidUsers: (state) =>
      state.users.filter((user) => user.paymentStatus.toLowerCase() === "paid"),

    unpaidUsers: (state) =>
      state.users.filter(
        (user) => user.paymentStatus.toLowerCase() === "unpaid"
      ),

    overdueUsers: (state) =>
      state.users.filter(
        (user) => user.paymentStatus.toLowerCase() === "overdue"
      ),
  },

  mutations: {
    markPaid: (state, payload) => {
      state.users.forEach((el) => {
        if (el.id == payload) {
          el.paymentStatus = "paid";
        }
      });
    },
  },
});
