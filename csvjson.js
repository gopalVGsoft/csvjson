const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')


csv(csvFilePath = 'customer-data.csv' )
  .fromFile(csvFilePath)
  .on("end_parsed",function(jsonArrayObj){ 
     fs.writeFile('customer-data.json',JSON.stringify(jsonArrayObj,null,2),  function (err) {if(err) {console.log("Error writing into file")}   } )
         console.log('Csv to Json Conversion complete')
         
   })

csv()