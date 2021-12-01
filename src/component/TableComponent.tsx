import { Fragment, useState } from "react";

type TProps = {
  columns: Array<{
    title: string;
    dataIndex: string;
    render?: (item: any, index: number) => any;
  }>;
  dataSource: any[];
};

const TableComponent = (props: TProps) => {
  const { columns, dataSource } = props;

  return (
    <div>
      <table style={{ border: "solid 1px #000" }}>
        <tbody>
          <tr>
            {columns.map((item: any, index: number) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
          {dataSource.map((item: any, index) => (
            <tr key={index}>
              {columns.map((key: any, index1: number) => (
                <Fragment key={index1}>
                  {key.render ? (
                    <td>{key.render(item, index)}</td>
                  ) : (
                    <td>{item[key.dataIndex]}</td>
                  )}
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
/**
 * 
 *     name: "John",
      lastname: "01",
      status: true,



 *  item.id
 *
 * item
 */

/**
 *
 * 1. id, name, lastname, button
 *
 * 2. name, lastname, status,
 *
 *
 *
 *
 */
