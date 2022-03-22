export const calenderData=[{
              
            res_id: 1,
            start: new Date('2022-03-16T12:00'),
            end: new Date('2022-03-16T13:00:00'),
            Contactnumber: "5555555",
            Description: "dddddddd",
            Title: "aaaaaaa",
            },
       
            {
            res_id: 2,
            start: new Date('2022-03-17T09:00:00'),
            end: new Date('2022-03-17T11:00:00'),
            Contactnumber: "55555555555555",
            Description: "fffffffffff",
            Title: "bbbbbbbbbbbbbbb"
            // timezoneStartAt: 'Europe/Berlin', // optional
           
            },
            {
            res_id: 3,
            start: new Date('2022-03-21T10:00:00'),
            end: new Date('2022-03-21T12:00:00'),
            Contactnumber: "44444444444",
            Description: "ttttttttttttt",
            Title: "mmmmmmmmmmmmmm"
            }
]
// .map(
//             calenderData=>({
//                 ...calenderData,
//                 isAllDay: false,
//                 start: calenderData.start,
//                 end: calenderData.end,
//                 Title:calenderData.Title,
//                 Description:calenderData.Description,
//                 Contactnumber:calenderData.Contactnumber
//             })
        // )

        export const ordersModelfields = {
            SEid: 'res_id',
            start: 'start',
            end: 'end',
            Title:"Title",
            Description:'Description',
            Contactnumber:'Contactnumber'
        };

        const currentYear = new Date().getFullYear();


    export const displayDate = new Date(Date.UTC(currentYear, 2, 15));
   

    // export const sampleDatum = calenderData.map(dataItem => ({ ...dataItem,
    //     start: parseAdjust(dataItem.start),
    //     end: parseAdjust(dataItem.end),
    //     Title: dataItem.Title,
    //     Description: dataItem.Description,
    //     Contactnumber: dataItem.Contactnumber,
    //     isAllDay: dataItem.isAllDay,
    //     SEid: dataItem.res_id
    // }));

    // export const sampleDataWithCustomSchema=calenderData.map(dataItem=>({
    //     ...dataItem,
    //     start:parseAdjust(dataItem.start),
    //     end: parseAdjust(dataItem.end),
    // }))