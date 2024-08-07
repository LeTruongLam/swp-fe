import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table";
import EventHeaderRow from "./EventHeaderRow";
import EventTableRow from "./EventTableRow";

const events = [
  {
    title: "Event 1",
    startDate: "2024-08-01",
    endDate: "2024-08-02",
    description: "Description for Event 1",
    status: "Upcoming",
  },
  {
    title: "Event 2",
    startDate: "2024-08-05",
    endDate: "2024-08-06",
    description: "Description for Event 2",
    status: "Ongoing",
  },
  {
    title: "Event 3",
    startDate: "2024-08-10",
    endDate: "2024-08-11",
    description: "Description for Event 3",
    status: "Completed",
  },
  {
    title: "Event 4",
    startDate: "2024-08-15",
    endDate: "2024-08-16",
    description: "Description for Event 4",
    status: "Upcoming",
  },
  {
    title: "Event 5",
    startDate: "2024-08-20",
    endDate: "2024-08-21",
    description: "Description for Event 5",
    status: "Ongoing",
  },
];

function EventTable() {
  return (
    <div>
      <Table>
        <TableCaption className="mt-3"></TableCaption>
        <TableHeader>
          <EventHeaderRow />
        </TableHeader>
        <TableBody>
          {events.map((item, index) => (
            <EventTableRow key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default EventTable;
