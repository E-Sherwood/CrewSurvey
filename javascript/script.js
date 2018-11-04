$("#hide").on("click", function(){
    $("#begin").hide()
    $("#questionForm").show()
})
$("#subButton").on("click", function(){
    //read all the answers chosen and put into a list/table
    //format: "Q1, answer:[chosen answer]"
    //take text input from comments box
    //send to email?
    //hide question form
    $("#questionForm").hide()
    //show thank you screen
    $("#thanks").show()
})