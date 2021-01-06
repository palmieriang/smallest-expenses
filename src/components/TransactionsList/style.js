import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #067bb1;
  border: 1px solid #dee2e6;
  color: #fff;
  text-transform: uppercase;
`;

export const TableTr = styled.tr`
  border: 1px solid #dee2e6;

  &:nth-child(even) {
    background-color: #0000000d;
  }
`;

export const TableTh = styled.th`
  border: 1px solid #dee2e6;
  text-align: left;
  padding: 12px;
`;

export const TableTd = styled.td`
  border: 1px solid #dee2e6;
  text-align: left;
  padding: 12px;
`;
