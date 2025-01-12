// PURPOSE: Make use of report tool kit's inspect functionality
// RUN: node --experimental-report --max-old-space-size=20 inspect.js
// CHECK:
// 1. A report is generated
// 2. Report event is recorded as "Javascript API"
// 3. Report trigger is recorded as "API"
// 4. A valid native stack is present in the report
// 5. Javascript heap section is present
// 6. run: rtk inspect <generated report>
// 7. Observe the output


// Define a custom type
function Type() {
  this.name = 'foo'
  this.id = 128
  this.account = 9845432470
}

// A global array, only to leak memory
const l = []

// Create half a million objects and fill those into the array
for (var i = 0; i < 500000; i++) {
  const r = new Type()
  l.push(r)
}

// Generate a report
process.report.writeReport()
