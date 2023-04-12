
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(rightNow);
}


if(localStorage.hours) {
  let store = JSON.parse(localStorage.hours);

  for (let i = 0; i < store.length; i++) {
    $('textarea').eq(i).val(store[i])
  }
}


$('.saveBtn').on('click', function () {
  alert('Saved!');

  let store = [];

  for (let i = 0; i < $('textarea').length; i++) {
    store.push($('textarea').eq(i).val());
  };

  localStorage.hours = JSON.stringify(store);
});


const timer = () => {
  let currentHour = dayjs().hour();
  
  $(".time-block").each(function() {
    let blockHour = parseInt($(this).attr('id').split('hour-')[1]);
    console.log(blockHour)

    // time block is in the past
    if (dayjs().hour(blockHour).isBefore(dayjs().hour(currentHour), 'hour')) {
      $(this).addClass('past');    
      console.log('past')  

    // time block is in the present
    }
    else if (dayjs().hour(blockHour).isSame(dayjs().hour(currentHour), 'hour')) {
      $(this).addClass('present');
      console.log('present')

    // time block is in the future
    } else {
      $(this).addClass('future');
      console.log('future')
    }
  });
}

displayTime()
setInterval(displayTime, 1000);
timer()






