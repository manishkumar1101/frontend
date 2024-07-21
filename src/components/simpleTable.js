import React from "react";
import { Table, Button } from "antd";

const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button
            type="primary"
            onClick={() => onEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button type="danger" onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="id"
      pagination={false}
      style={{ width: '100%' }}
    />
  );
};

export default SimpleTable;
