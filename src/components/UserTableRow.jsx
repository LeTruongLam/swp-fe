import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
function UserTableRow({ item }) {
  return (
    <TableRow
      className="items-center grid md:grid-cols-5 lg:grid-cols-6 grid-cols-3  font-medium rounded-md  bg-[#FAFAFA] hover:bg-[#CDC3FF] mt-3  border-none py-2"
      key={item?.id}
    >
      <TableCell className=" py-2">{item?.name}</TableCell>
      <TableCell className=" py-2">{item?.email}</TableCell>
      <TableCell className="hidden md:block py-2">
        <span>{item?.password}</span>
      </TableCell>
      <TableCell className=" hidden lg:block py-2 text-left">
        {item?.status}
      </TableCell>
      <TableCell className=" hidden md:block py-2 text-left">
        {item?.role}
      </TableCell>
      <TableCell className="text-right py-2  ">
        <Button variant="secondary">Edit</Button>
      </TableCell>
    </TableRow>
  );
}

export default UserTableRow;
