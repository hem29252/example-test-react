import { useState } from "react";
import TableComponent from "../component/TableComponent";

const Table1 = () => {
  const [counter, setCounter] = useState<number>(0);
  const [test, setTest] = useState<string[] | undefined>(undefined);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const column = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "lastname",
      dataIndex: "lastname",
    },
    {
      title: "Action",
      dataIndex: "button",
    },
  ];

  const data = [
    {
      id: 1,
      name: "user",
      lastname: "01",
      button: (
        <>
          <button onClick={handleIncrement}>increment</button>
        </>
      ),
    },
    {
      id: 2,
      name: "user",
      lastname: "01",
      button: (
        <>
          <button onClick={handleIncrement}>increment</button>
        </>
      ),
    },
    {
      id: 3,
      name: "user",
      lastname: "01",
      button: (
        <>
          <button onClick={handleIncrement}>increment</button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Table 1</h1>
      <h2>counter: {counter}</h2>

      <TableComponent columns={column} dataSource={data} />
    </div>
  );
};

export default Table1;
