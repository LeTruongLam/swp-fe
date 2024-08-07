import { TableHead, TableRow } from "@/components/ui/table";
function EventHeaderRow() {
  return (
    <TableRow className="grid grid-cols-4 py-4">
      <TableHead className="text-black h-full basis-3/12">Title</TableHead>
      <TableHead className="text-black h-full basis-2/12">Date</TableHead>
      <TableHead className="text-black h-full basis-3/12">
        Description
      </TableHead>
      <TableHead className="text-black text-left h-full basis-3/12">
        Status
      </TableHead>
      <TableHead className="text-black h-full text-right basis-1/12"></TableHead>
    </TableRow>
  );
}
export default EventHeaderRow;
