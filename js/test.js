$('[data-toggle="datepicker"]').datepicker();

var createdEvent = false;
$('[data-toggle="datepicker"]').on('click', function () {
    if (!createdEvent) {
        $('li[data-view="month next"],li[data-view="month prev"]').on('click', function () {
            alert('clicked!');
        });
        createdEvent = true;
    }
});