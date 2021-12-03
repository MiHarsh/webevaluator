import {
  // crawlerColumns,
  sslColumns,
  sslId,
  cookiesColumns,
  cookiesId,
  adaColumn,
  adaId,
  wcagColumns,
  section508Columns,
  snifferId,
} from "constants/columns";

const mappings = [
  // {
  //   id: 0,
  //   title: "Media URLs",
  // },
  // {
  //   id: 1,
  //   title: "Site URLs",
  // },
  {
    id: 2,
    title: "SSL Certificates",
    columns: sslColumns,
    uniqueId: sslId,
  },
  {
    id: 3,
    title: "Initial Cookies",
    columns: cookiesColumns,
    uniqueId: cookiesId,
  },
  {
    id: 5,
    title: "Accepted Cookies",
    columns: cookiesColumns,
    uniqueId: cookiesId,
  },
  {
    id: 6,
    title: "Denied Cookies",
    columns: cookiesColumns,
    uniqueId: cookiesId,
  },
  {
    id: 7,
    title: "WCAG2A",
    columns: wcagColumns,
    uniqueId: snifferId,
  },
  {
    id: 8,
    title: "WCAG2AA",
    columns: wcagColumns,
    uniqueId: snifferId,
  },
  {
    id: 9,
    title: "WCAG2AAA",
    columns: wcagColumns,
    uniqueId: snifferId,
  },
  {
    id: 10,
    title: "Section 508",
    columns: section508Columns,
    uniqueId: snifferId,
  },
  {
    id: 11,
    title: "Accessibility Error",
    columns: adaColumn,
    uniqueId: adaId,
  },
  {
    id: 12,
    title: "Accessibility Warnings",
    columns: adaColumn,
    uniqueId: adaId,
  },
];

export default mappings;
