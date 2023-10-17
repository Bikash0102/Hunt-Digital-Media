var idvalue=document.getElementById("id-value");
var startdate=document.getElementById("data-picker1");
var enddate= document.getElementById("data-picker2");
var monthcount=document.getElementById("months-count");
var excludedate = document.getElementById("date-excluded");
var totaldays = document.getElementById("date-count");
var leadcount = document.getElementById("leadcount");
var expecteddrr = document.getElementById("expecteddrr");
var button=document.getElementById("button");
//start date validation
startdate.addEventListener("change", function() {
    let startDate = this.value;
   enddate.setAttribute("min", startDate);
   excludedate.setAttribute("min", startDate);
   
});
enddate.addEventListener("change", function() {
    let endDate = this.value;
   startdate.setAttribute("max", endDate);
   excludedate.setAttribute("max", endDate);
});

//month-count
let  months;
startdate.addEventListener("input", calculateMonthDifference);
enddate.addEventListener("input", calculateMonthDifference);
 function calculateMonthDifference() {
const selectedDate = new Date(startdate.value);
 months = selectedDate.getMonth() + 1;

monthcount.value= months;
}

//exclude date and date count
       
 let excludedDates = [];
 let  totalDates;
 let drr;
 let startDate;
 let endDate;

console.log(excludedDates);
startdate.addEventListener("input", updateTotalDates);
enddate.addEventListener("input", updateTotalDates);
excludedate.addEventListener("input", excludeDate);
function updateTotalDates() {
 startDate = new Date(startdate.value);
endDate = new Date(enddate.value);
const diffTime = Math.abs(endDate - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;
 totalDates = diffDays - excludedDates.length;
 totaldays.value =totalDates;
 
}
function excludeDate() {
const excludedDate = excludedate.value;
if (!excludedDates.includes(excludedDate)) {
     excludedDates.push(excludedDate);
    updateTotalDates();
                
}


}


//drr-count
leadcount.addEventListener("input", calculatedrr);
function calculatedrr()
{
    drr=Math.ceil(leadcount.value/totalDates);
    expecteddrr.value=drr;

}
//data storeage
let data =[{}];
const value=
{
    id:idvalue.value,
    startdate:startdate.value,
    enddate:enddate.value,
    month:months,
    dateexpected:excludedDates ,
    totaldays:totalDates,
    leadcount:leadcount.value,
    drrvalue:drr,

}
function defaultvalue()
{ console.log("call");
    idvalue.value="";
    startdate.value="";
    enddate.value="";
    monthcount.value="";
    excludedate.value="";
    totaldays.value="";
    leadcount.value="";
    expecteddrr.value="";

}
//button function
button.addEventListener('click',()=>
{
   data.push(value);
   defaultvalue();
})
console.log(data);