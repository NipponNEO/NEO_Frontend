export const customModelFields = {
  id: 'TaskID',
  title: 'Title',
  description: 'Description',
  start: 'start',
  end: 'end',
  switch: 'Switch',
  startUA: 'UAstart',
  endUA:'UAend'
};
const currentYear = new Date().getFullYear();

const parseAdjust = eventDate => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  return date;
};

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const displayDate = new Date();
// export const sampleData = baseData.map(dataItem => ({
//   id: Item.TaskID,
//   start: parseAdjust(Item.Start),
//   startTimezone: Item.startTimezone,
//   end: parseAdjust(dataItem.End),
//   endTimezone: dataItem.endTimezone,
//   isAllDay: dataItem.isAllDay,
//   title: dataItem.Title,
//   description: dataItem.Description,
//   recurrenceRule: dataItem.RecurrenceRule,
//   recurrenceId: dataItem.RecurrenceID,
//   recurrenceExceptions: dataItem.RecurrenceException,
//   roomId: dataItem.RoomID,
//   ownerID: dataItem.OwnerID,
//   personId: dataItem.OwnerID,
// }));
// // baseData.forEach((item,i)=>{
// //   item.id=i+1;
// // })
// export const sampleDataWithResources = baseData.map(dataItem => ({
//   id: dataItem.TaskID,
//   start: parseAdjust(dataItem.Start),
//   startTimezone: dataItem.startTimezone,
//   end: parseAdjust(dataItem.End),
//   endTimezone: dataItem.endTimezone,
//   isAllDay: dataItem.isAllDay,
//   title: dataItem.Title,
//   description: dataItem.Description,
//   recurrenceRule: dataItem.RecurrenceRule,
//   recurrenceId: dataItem.RecurrenceID,
//   recurrenceExceptions: dataItem.RecurrenceException,
//   roomId: randomInt(1, 2),
//   personId: randomInt(1, 2)
// }));
const data=[];
export const sampleDataWithCustomSchema = data.map(dataItem => ({
  ...dataItem,
  Start: parseAdjust(dataItem.start),
  End: parseAdjust(dataItem.end),
  UAend: parseAdjust(dataItem.UAend),
  UAstart: parseAdjust(dataItem.UAstart),
  switch:false
}));