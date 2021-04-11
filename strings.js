const strings = {
  "departureTerminals": [
    "tsawwassen",
    "swartz bay",
    "nanaimo (duke pt)",
    "nanaimo (dep.bay)",
    "horseshoe bay",
    "langdale"
  ],
  "destinationTerminals": {
    "tsawwassen": [
      "swartz bay",
      "southern gulf islands",
      "nanaimo (duke pt)"
    ],
    "swartz bay": [
      "tsawwassen",
      "fulford harbour (saltspring is.)",
      "southern gulf islands"
    ],
    "nanaimo (duke pt)": [
      "tsawwassen"
    ],
    "nanaimo (dep.bay)": [
      "horseshoe-bay"
    ],
    "horseshoe bay": [
      "nanaimo (dep.bay)",
      "langdale",
      "snug cove (bowen is.)"
    ],
    "langdale": [
      "horseshoe bay"
    ]
  }
};

export default strings;