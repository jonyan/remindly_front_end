
var datepicker = $('#date').pickadate({
        container: '#outlet', onSet: function(item) {
            if ( 'select' in item ) setTimeout( timepicker.open, 0 )
        }

    }).pickadate('picker');

var timepicker = $('#time').pickatime({
        container: '#outlet',
        onOpen: function() { 
            var selectedDate = datepicker.get('select', 'yyyy/m/d');
            console.log(selectedDate);
            var splitDate = selectedDate.split("/");
            console.log(splitDate);
            var current = new Date();
            var currentYear = current.getFullYear();
            var currentMonth = current.getMonth() + 1;
            var currentDate = current.getDate();
            if (currentYear.toString() == splitDate[0] && currentMonth.toString() == splitDate[1] 
                && currentDate.toString() == splitDate[2]) {
                console.log("user chose today");
           timepicker.set({min:true, max:false});} else {
            timepicker.set({min:false, max:false, view: [current.getHours().toString(), current.getMinutes().toString()]});}
        },
        onSet: function(item) {
            if ( 'select' in item ) setTimeout( function() {
                $datetime.
                    off('focus').
                    val( datepicker.get() + ' @ ' + timepicker.get() ).
                    focus().
                    on('focus', datepicker.open)
            }, 0 )
        }
    }).pickatime('picker');

var $datetime = $('#datetime').
    on('focus', datepicker.open).
    on('click', function(event) { event.stopPropagation(); datepicker.open() });
