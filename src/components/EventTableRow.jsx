import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
function EventTableRow({ item }) {
  return (
    <TableRow
      className="items-center grid md:grid-cols-4  grid-cols-3  font-medium rounded-md  bg-[#FAFAFA]  mt-3  border-none py-2"
      key={item?.title}
    >
      <TableCell className=" py-2">{item?.title}</TableCell>
      <TableCell className=" py-2">
        {item?.startDate} - {item?.endDate}
      </TableCell>
      <TableCell className=" py-2">
        <span>{item?.description}</span>
      </TableCell>
      <TableCell className=" hidden md:block py-2 text-left">
        {item?.status}
      </TableCell>
    </TableRow>
  );
}

export default EventTableRow;
