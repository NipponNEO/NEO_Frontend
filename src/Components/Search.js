import React from "react";


import FuzzyReactSelect from "./FuzzyReactSelect";

import MOCKDATA from "../JsonData/searchdata.json"

const pickedMockdata = MOCKDATA.map(data => ({
  ...data,
  label:  [data["name"],[" "],["-"],[" "],data["phoneno"]] ,
  value: data.id
}));

// fuze.js options
const fuzzyOptions = {
  keys: [
    { name: "name", weight: 0.7 },
    // { name: "last_name", weight: 0.5 },
    { name: "phoneno", weight: 0.2 }
  ],
  valueKey: "first_name",
  maxPatternLength: 2,
  includeScore: true,
  maxResults: 25,
  threshold: 0.3
};

export default function Search() {
  return (
    <div style={{maxWidth:'50%'}} >

      <FuzzyReactSelect
        options={pickedMockdata}
        fuzzyOptions={fuzzyOptions}
        autoCorrect="off"
        spellCheck="off"
        placeholder="Search LeadName / PhoneNumber"
      />
    </div>
  );
}


