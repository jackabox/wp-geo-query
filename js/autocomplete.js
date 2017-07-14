(function($) {
    "use strict";

    function pacSelectFirst(input) {
        var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

        function addEventListenerWrapper(type, listener) {
            if (type == "keydown") {
                var orig_listener = listener;

                listener = function(event) {
                    var suggestion_selected = $(".pac-item-selected").length > 0;

                    if ((event.which == 13 || event.which == 9) && !suggestion_selected) {
                        var simulated_downarrow = $.Event("keydown", { keyCode: 40, which: 40 })
                        orig_listener.apply(input, [simulated_downarrow]);
                    }

                    orig_listener.apply(input, [event]);
                };
            }

            _addEventListener.apply(input, [type, listener]);
        }

        if (input.addEventListener) {
            input.addEventListener = addEventListenerWrapper;
        } else if (input.attachEvent) {
            input.attachEvent = addEventListenerWrapper;
        }
    }    

    if ($('#autocomplete').length) {
        var pac_input = document.getElementById('autocomplete');

        var options = {
            componentRestrictions: {
                country: "uk"
            }
        };

        // create the autocomplete
        var autocomplete = new google.maps.places.Autocomplete(pac_input, options);
        var key = 0;

        // create an event listener on the autocomplete
        autocomplete.addListener('place_changed', function(e) {
            var place = autocomplete.getPlace();
            $('#lat').val(place.geometry.location.lat());
            $('#lng').val(place.geometry.location.lng());
            $('#postcode-submit').removeAttr('disabled');
            if(key == 13) {
                $('#postcode-submit').click();
            }
        });

        pacSelectFirst(pac_input);

        // on focusin, trigger the select first
        $(function() {
            $('#autocomplete').bind('keypress', function(e) {
                key = e.keyCode;
            });  
        });

    }
} (jQuery));
