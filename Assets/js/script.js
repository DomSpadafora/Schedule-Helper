

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $('#currentDay').text(rightNow);
}
displayTime()
setInterval(displayTime, 1000);

if(localStorage.hours) {
  let store = JSON.parse(localStorage.hours);

  for (let i = 0; i < store.length; i++) {
    $('textarea').eq(i).val(store[i])
  }
}

$('.saveBtn').on('click', function () {
  console.log('you clicked me');

  let store = [];

  for (let i = 0; i < $('textarea').length; i++) {
    store.push($('textarea').eq(i).val());
  };

  localStorage.hours = JSON.stringify(store);
});

if (projectDate.isBefore(today)) {
  rowEl.addClass('project-late');
} else if (projectDate.isSame(today)) {
  rowEl.addClass('project-today');
}




