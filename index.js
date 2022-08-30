// assumptions
// employees always check in and check out.
// employees always check in and out on the hour
// Employees will never work across days
//   in at 2200 and out at 0400 the next day

// time represented on 24-hour
// timestamps as Strings:
//   "YYYY-MM-DD 800"
//   "YYYY-MM-DD 1800"
//   "2018-01-01 2300"

function createEmployeeRecord (srcArr) {
    return {
      firstName: srcArr[0],
      familyName: srcArr[1],
      title: srcArr[2],
      payPerHour: srcArr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
}
  
function createEmployeeRecords (srcArrofArrs) {
    return srcArrofArrs.map(createEmployeeRecord);
}
  
function createTimeInEvent (timeInStr) {
    let [date, hour] = timeInStr.split(" ");
    let newEvent = { type: "TimeIn", date, hour: parseInt(hour, 10) };
    this.timeInEvents.push(newEvent);
    return this
}

function createTimeOutEvent (timeOutStr) {
    let [date, hour] = timeOutStr.split(" ");
    let newEvent = { type: "TimeOut", date, hour: parseInt(hour, 10) };
    this.timeOutEvents.push(newEvent);
    return this
}

function hoursWorkedOnDate (dateStr) {
    let timeIn = this.timeInEvents.find(function(e) { return e.date === dateStr });
    let timeOut = this.timeOutEvents.find(function(e) { return e.date === dateStr });
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate (dateStr) {
    return hoursWorkedOnDate.call(this, dateStr) * this.payPerHour
}

function findEmployeeByFirstName (srcArray, employeeNameStr) {
    return srcArray.find(function(record){ return record.firstName === employeeNameStr })
  }
  
function calculatePayroll (employeeObjsArr) {
    return employeeObjsArr.reduce(function(previousVal, record){ return previousVal + allWagesFor.call(record) }, 0)
}

function allWagesFor () {
    let eligibleDates = this.timeInEvents.map(function (event) { return event.date })
    let payable = eligibleDates.reduce(function (previousVal, date) { return previousVal + wagesEarnedOnDate.call(this, date) }.bind(this), 0)
    return payable
}