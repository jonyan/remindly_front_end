var datepicker = $('#date').pickadate({
        container: '#outlet', onSet: function(item) {
            if ( 'select' in item ) setTimeout( timepicker.open, 0 )
        }

    }).pickadate('picker');

var timepicker = $('#time').pickatime({
        container: '#outlet',
        onRender: function() {
            $('<button>back to date</button>').
                on('click', function() {
                    timepicker.close()
                    datepicker.open()
                }).prependTo( this.$root.find('.picker__box') )
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

// $('.datetime').pickadate({
//     // Escape any “rule” characters with an exclamation mark (!).
//     format: 'dddd, dd mmm, yyyy',
//     formatSubmit: 'yyyy/mm/dd',
//     hiddenPrefix: 'prefix__',
//     hiddenSuffix: '__suffix'
// // });

// $('.date').pickadate({
//     min: true,
//     max: false
// })