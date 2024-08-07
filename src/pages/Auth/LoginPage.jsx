import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import LoginForm from "@/components/auth/LoginForm";
import { useTranslation } from "react-i18next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoleEnum } from "@/utils/Enum";

function LoginPage({ isOpen, setOpen }) {
  const { t } = useTranslation();
  const [role, setRole] = useState(RoleEnum.ADMIN);
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <DialogContent className="w-max">
          <DialogHeader> </DialogHeader>
          <Tabs defaultValue="account" className="min-w-[400px]">
            <Card className="border-none">
              <CardHeader className="pb-3 pt-0 px-0">
                <CardTitle className="text-4xl">{t("LoginButton")}</CardTitle>
                <CardDescription>{t("LoginContent")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 py-0 px-0">
                <Tabs defaultValue={role}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value={RoleEnum.CLIENT}>Staff</TabsTrigger>

                    <TabsTrigger value={RoleEnum.ADMIN}>Admin</TabsTrigger>
                  </TabsList>
                </Tabs>
                <LoginForm role={role} />
              </CardContent>
            </Card>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoginPage;
