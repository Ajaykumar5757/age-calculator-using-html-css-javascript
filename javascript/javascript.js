function calculateage(){
    var dob=document.getElementById("dob").value;

    var dateofbirth=new Date(dob);
    var today=new Date();
    
    var year=today.getFullYear()-dateofbirth.getFullYear();
    var month=today.getMonth()-dateofbirth.getMonth();
    var date=today.getDate()-dateofbirth.getDate();
    
    if(dob==""||dob==null){
        alert("please input field should not be empty");
    }
    else if(dateofbirth.getTime()>today.getTime()){
        alert("Please enter the date before "+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear());
    }
    else{
        if(month<0||(month === 0 && date < 0)){
            year--;
            month=month+12;
        }
        
        if(date<0){
            month--;
            date=date+new Date(today.getFullYear(),today.getMonth(),0).getDate();
        }
        document.getElementById("age").innerHTML=`Your age is ${year} years, ${month} months and ${date} days`;
    }
}
