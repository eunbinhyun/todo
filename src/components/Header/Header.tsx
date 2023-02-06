import React from "react";
import { FilterType } from '../../App';
import styles from './Header.module.css'

interface props {
  filters: FilterType[],
  filter: FilterType,
  onFilterChange: (filter: FilterType) => void;
}

export default function Header({ filters, filter, onFilterChange }: props) {
  return (
    <header className={styles.header}>
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
