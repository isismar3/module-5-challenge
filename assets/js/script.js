$(document).ready(function () {
   
  // Function to update the hours styling based on current time
  function timeBlocks() {
    let currentHour = dayjs().hour();
    let timeBlocks = $('.time-block');

    timeBlocks.each(function () {
      const colorBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (colorBlockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (colorBlockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Function to write content from local storage to the planner
  function writeContentFromLocalStorage() {
    timeBlocks(function () {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
  }

  // Function to update local storage when save button is clicked
  function updateLocalStorage() {
    $('.saveBtn').on('click', function () {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
      console.log('Your time has been updated');
    });
  }

  // Function to display current date and time
  function displayCurrentTime() {
    // const dayjs = dayjs().hour()
    
    
    const currentDateElement = $('#currentDay');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    currentDateElement.text(currentDate);
  }

  // Calls functions when the page loads
  timeBlocks();
  writeContentFromLocalStorage();
  displayCurrentTime();

  // Sets interval to update hour styling every minute
  setInterval(timeBlocks, 60000); // 60000 milliseconds = 1 minute

  // Add event listener for save button to update local storage
  updateLocalStorage();
});




// //     // console.log(timeBlock);

// // //     // create a function that updates the hours
// // //     // add class/remove class from the styling of the page
// // //     // setInterval to add/remove
// // //     // create a function that writes the content of the hour (daily planner) 
// // //     //retrieve from local storage
// // //     // create a function that updates the local storage (addEventListener)

// // // })

