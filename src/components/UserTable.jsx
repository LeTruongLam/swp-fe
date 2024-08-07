import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table";
import UserHeaderRow from "./UserHeaderRow";
import UserTableRow from "./UserTableRow";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "********",
    status: "Active",
    role: "Visitor",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "********",
    status: "Inactive",
    role: "Sponsor",
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "********",
    status: "Active",
    role: "Event Operator",
  },
  {
    name: "Bob Brown",
    email: "bob@example.com",
    password: "********",
    status: "Pending",
    role: "Checking Staff",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: "********",
    status: "Active",
    role: "Visitor",
  },
];

function UserTable() {
  return (
    <div>
      <Table>
        <TableCaption className="mt-3"></TableCaption>
        <TableHeader>
          <UserHeaderRow />
        </TableHeader>
        <TableBody>
          {users.map((item, index) => (
            <UserTableRow key={item.email} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserTable;
