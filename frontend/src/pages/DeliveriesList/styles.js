import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: 20px auto;
  max-width: 850px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #444;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const SearchBar = styled.div`
  justify-content: flex-start;
  padding: 20px 0px;

  svg {
    position: absolute;
    margin-left: 10px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 16px 5px 28px;
    color: #999;
    display: block;
  }
`;

export const DeliveriesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  tbody tr {
    background: white;
  }

  th {
    text-align: left;
    color: #444;
    padding: 10px;

    &:last-child {
      text-align: center;
    }
  }

  td {
    color: #666;
    padding: 10px;

    &:last-child {
      text-align: center;
      cursor: pointer;

      svg:hover {
        color: #c6c6c6;
      }
    }
  }
`;

export const DeliverymanTableData = styled.td`
  display: flex;
  align-items: center;

  div {
    color: ${props => props.color};
    padding: 5px;
    width: min-content;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StatusTableData = styled.td`
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  width: min-content;
  padding: 2px 8px;
  color: ${props => props.color} !important;

  background-color: ${props => props.backgroundColor};

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px 0 0;
    background-color: ${props => props.color};
  }
`;
