import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
function AccountDropDown() {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          className="h-10 w-10 rounded-full ring-2 ring-white hover:opacity-75 cursor-pointer"
          src={currentUser?.image}
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("Logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function Header() {
  return (
    <div className="w-full h-16 px-6 ">
      <div className="flex justify-end h-full items-center">
        <div className="flex gap-3 items-center ">
          <AccountDropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
