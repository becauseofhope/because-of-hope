(function($){
    // Pulled from here
    // url of json data
    //   here, instead of pointing to the google calendar link that you'll want to use,
    //   I'm pointing to a static file so that this example doesn't break in the future even
    //   if the calendar it was based upon changes.
    //   you'll want to use a link in the form of:
    //   http://www.google.com/calendar/feeds/your-calendar@gmail.com/public/full?orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&alt=json
    var calendar_json_url = "http://www.google.com/calendar/feeds/bnhe2fs01i2q0a0h2es0dmt2i4@group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&alt=json";

    // Get list of upcoming events formatted in JSON
    $.getJSON(calendar_json_url, function(data){

        // Parse and render each event
        $.each(data.feed.entry, function(i, item){
            var start_time = moment(item.gd$when[0].startTime);

            // Render the event
            $("#gcal-events").find("li").last().after(
                "<li>" +
                    start_time.format("MMMM Do") +
                    ", " +
                    item.title.$t +
                    ", " +
                    item.gd$where[0].valueString +
                "</li>"
            );

        });
        $("#gcal-events").find("li").first().remove()
    });
})($);
