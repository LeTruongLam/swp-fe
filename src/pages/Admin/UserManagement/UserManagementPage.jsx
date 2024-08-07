import { Button } from "@/components/ui/button";
import UserTable from "@/components/UserTable";
import React from "react";
import { CreateUserForm } from "./CreateUserForm";

function UserManagementPage() {
  return (
    <div className="bg-white rounded-md h-container-main my-5 px-3">
      <div className="flex justify-end py-3">
        <CreateUserForm />
      </div>
      <UserTable />
    </div>
  );
}

export default UserManagementPage;
