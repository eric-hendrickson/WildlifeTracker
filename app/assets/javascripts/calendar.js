$(document).ready(function() {
   $("#calendar").fullCalendar({
     header: {
       left:   'today prev,next',
       center: 'title',
       right:  'month,basicWeek,basicDay'
     },
     events: "/sightings/get_events",
     timeFormat: "LT",
     eventClick: function(event) {
      if (event.url) {
          window.open(event.url);
          return false;
      }
    }
  });
});
