import React, {useState, useEffect} from "react";
import List from "./List";

function mapItems(items) {
  return items.map((value, i) => ({key: i.toString(), value}));
}

function filterAndSort(data, text, asc) {
  return data
    .filter(i => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

function populateData(){
  return filterAndSort(
    new Array(100).fill(null).map((v, i) => `Item ${i}`),
    ""
  );
}

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const data = populateData();
  const [filterdList, setFilterdList] = useState(data);

  return (
    <List
      data={mapItems(filterdList)}
      asc={asc}
      onFilter={text => {
        setFilter(text);
        setFilterdList(filterAndSort(data, text, asc));
      }}
      onSort={() => {
        setAsc(!asc);
        setFilterdList(filterAndSort(data, filter, asc));
      }}
    />
  );
}
