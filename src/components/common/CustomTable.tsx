import React, { useEffect, useMemo } from "react";
import { ICustomTable } from "../constant/interfaces";

const CustomTable = ({ data, headers }: ICustomTable) => {
  let headerContent = headers.map((headerItem: string, index: number) => {
    return <th key={`${headerItem}${index}`}>{headerItem}</th>;
  });
  headerContent.push(
    <th key={`action`} title="">
      {"Action"}
    </th>
  );
  return (
    <table className="table">
      <thead>
        <tr>{headerContent}</tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => {
          const tableRowContent = Object.keys(item).map(
            (key: string, i: number) => {
              return <td>{item[key]}</td>;
            }
          );
          return tableRowContent;
        })}
      </tbody>
    </table>
  );
};

export default React.memo(CustomTable);
