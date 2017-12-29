const pages = [
  {
    id: -1,
    page: "/"
  },
  {
    id: 0,
    page: "/home"
  },
  {
    id: 1,
    page: "/aging"
  },
  {
    id: 2,
    page: "/acip"
  },
  {
    id: 3,
    page: "/efficacy"
  },
  {
    id: 4,
    page: "/safety"
  },
  {
    id: 5,
    page: "/moa"
  }
]

export const data = {
  methods: {
    getPageFromID (n) {
      var _num = Number(n);
      return pages.filter(page => page.id === _num)[0].page;
    },
    getIDFromPage (value) {
      return pages.filter(page => page.page === value)[0].id;
    }
  }
}