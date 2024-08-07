import EventTable from "@/components/EventTable";
function EventsPage() {
  return (
    <div className="bg-white rounded-md h-container-main my-5 px-3">
      {/* <div className="flex justify-end py-3">
        <Button className="bg-blue-500 hover:bg-blue-400 ">Create event</Button>
      </div> */}
      <EventTable />
    </div>
  );
}

export default EventsPage;
