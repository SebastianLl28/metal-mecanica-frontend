import { styled } from 'styled-components'

export const TableStyle = styled.table`
  width: 100%;
  min-height: 35rem;
  overflow-y: scroll;

  thead {
    background-color: #f0f0f0;
    text-align: center;
  }

  th,
  td {
    padding: 16px;
  }

  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: background-color 0.2s;
    cursor: pointer;
  }

  thead tr:first-child {
    border: unset;
  }

  tr:hover {
    background-color: rgba(0, 0, 0, 0.015);
  }

  .noData {
    text-align: center;
    font-size: 1.2em;
    line-height: 30rem;
  }

  .actions {
    display: flex;
    gap: 1.2rem;

    & > button {
      cursor: pointer;
    }
  }
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
