import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
function EventTableRow({ item }) {
  return (
    <TableRow
      className="grid grid-cols-4 font-medium rounded-md  bg-[#FAFAFA] hover:bg-[#CDC3FF] mt-3 items-center border-none py-2"
      key={item?.title}
    >
      <TableCell className="basis-3/12 py-2">{item?.title}</TableCell>
      <TableCell className="basis-2/12 py-2">
        {item?.startDate} - {item?.endDate}
      </TableCell>
      <TableCell className="basis-3/12 overflow-hidden py-2">
        {item?.description}
      </TableCell>
      <TableCell className="basis-3/12 py-2 text-start">
        {item?.status}
      </TableCell>
    </TableRow>
  );
}

export default EventTableRow;
