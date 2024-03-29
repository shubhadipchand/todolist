// jshint esversion:6

exports.getDate = getDate;  

function getDate() {

let today = new Date();
    
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
    
  return today.toLocaleDateString("en-US", options) ;

}

exports.getDay = getDay ;

function getDay() {

    let today = new Date();
        
      let options = {
        weekday: "long"  
      };
        
      return today.toLocaleDateString("en-US", options);
    
    }