import TableComponent from "../component/TableComponent";

const Table2 = () => {
  const column = [
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "lastname",
      dataIndex: "lastname",
    },
    {
      title: "status",
      dataIndex: "status",
      render: (item: any, index: number) => {
        return <>{item.status ? "Yes" : "No"}</>;
      },
    },
  ];

  const data = [
    {
      name: "John",
      lastname: "01",
      status: true,
    },
    {
      name: "Wick",
      lastname: "02",
      status: false,
    },
  ];

  return (
    <div>
      <h1>Table 2</h1>
      <TableComponent columns={column} dataSource={data} />
    </div>
  );
};

export default Table2;
