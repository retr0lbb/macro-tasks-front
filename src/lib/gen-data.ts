export const graphData = {
  nodes: [
    { id: "My Vegas Trip 2026", group: 1, val: 50, color: "#ec4899" },

    { id: "Get Good to Go!", group: 1, val: 8, color: "#f43f5e" },
    { id: "Sell at least a House", group: 1, val: 8, color: "#f43f5e" },
    { id: "Se if Erik Let me on Vacation", group: 1, val: 8, color: "#f43f5e" },

    { id: "Rent a big car", group: 1, val: 4, color: "#f43f5e" },
    { id: "Renew My Drivers License", group: 1, val: 4, color: "#f43f5e" },
    { id: "See if Luke let me borrow his", group: 1, val: 4, color: "#f43f5e" },

    { id: "Call Homies", group: 1, val: 4, color: "#f43f5e" },
    { id: "Call Luke", group: 1, val: 4, color: "#f43f5e" },
    { id: "Call Bob", group: 1, val: 10, color: "#f43f5e" },

    { id: "Book hotel", group: 2, val: 5, color: "#22c55e" },
    { id: "View Possible Dates", group: 2, val: 5, color: "#22c55e" },
    { id: "Se if hotel has Cassino", group: 2, val: 5, color: "#22c55e" },
    { id: "Pack luggage", group: 2, val: 3, color: "#22c55e" },
    { id: "Buy a bigger Case", group: 2, val: 3, color: "#22c55e" },
    { id: "See prices", group: 2, val: 3, color: "#22c55e" },
    {
      id: "Se if i can bring Vodka on a plane",
      group: 2,
      val: 3,
      color: "#22c55e",
    },

    { id: "Plan activities", group: 2, val: 6, color: "#22c55e" },
    {
      id: "Reserve a table for 3 in L'appat",
      group: 2,
      val: 6,
      color: "#22c55e",
    },
    { id: "Buy trip to Grand Canyon", group: 2, val: 6, color: "#22c55e" },
  ],
  links: [
    // todas conectadas à viagem
    { source: "Get Good to Go!", target: "My Vegas Trip 2026", value: 2 },
    { source: "Sell at least a House", target: "Get Good to Go!", value: 2 },
    {
      source: "Se if Erik Let me on Vacation",
      target: "Get Good to Go!",
      value: 2,
    },

    { source: "Rent a big car", target: "My Vegas Trip 2026", value: 2 },
    { source: "Renew My Drivers License", target: "Rent a big car", value: 2 },
    {
      source: "See if Luke let me borrow his",
      target: "Rent a big car",
      value: 2,
    },

    { source: "Call Luke", target: "Call Homies", value: 2 },
    { source: "Call Bob", target: "Call Homies", value: 2 },
    { source: "Call Homies", target: "My Vegas Trip 2026", value: 2 },

    { source: "Book hotel", target: "My Vegas Trip 2026", value: 2 },
    { source: "View Possible Dates", target: "Book hotel", value: 2 },
    { source: "Se if hotel has Cassino", target: "Book hotel", value: 2 },

    { source: "Plan activities", target: "My Vegas Trip 2026", value: 2 },
    {
      source: "Reserve a table for 3 in L'appat",
      target: "Plan activities",
      value: 2,
    },
    { source: "Buy trip to Grand Canyon", target: "Plan activities", value: 2 },

    { source: "Pack luggage", target: "My Vegas Trip 2026", value: 2 },
    { source: "Buy a bigger Case", target: "Pack luggage", value: 2 },
    { source: "See prices", target: "Buy a bigger Case", value: 2 },
    {
      source: "Se if i can bring Vodka on a plane",
      target: "Pack luggage",
      value: 2,
    },
  ],
};
