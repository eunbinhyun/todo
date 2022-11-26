import React from "react";
import { FilterType } from '../../App';

interface props {
  filters: FilterType[],
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void;
}

export default function Header({ filters, filter, onFilterChange }: props) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
