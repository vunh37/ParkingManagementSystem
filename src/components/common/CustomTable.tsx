import React, { useEffect, useMemo } from "react";
import { ICustomTable } from "../constant/interfaces";

const CustomTable = ({
  data,
  headers,
  deleteFunction,
  showFunction,
}: ICustomTable) => {
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
          let tableRowContent = Object.keys(item).map(
            (key: string, i: number) => {
              return <td key={`${item}${i}`}>{item[key]}</td>;
            }
          );

          return (
            <tr>
              {tableRowContent}
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => showFunction(index)}
                >
                  Xem
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFunction(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(CustomTable);
