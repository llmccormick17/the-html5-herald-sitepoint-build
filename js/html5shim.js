<script>
    // check if supported
    if(!Modernizr.input.placeholder) {
    // get all the form controls with the placeholder attribute
    var fcToCheck = document.querySelectorAll("*[placeholder]"),
        frmsToCheck = document.querySelectorAll('form'),
        i, count;

    // loop through form controls with placeholder attribute,
    // copy placeholder value into value, clearing on focus and
    // resetting, if empty, on blur
    for(var i = 0, count = fcToCheck.length; i < count; i++) {
    if(fcToCheck[i].value == "") {
        fcToCheck[i].value = fcToCheck[i].getAttribute("placeholder");
        fcToCheck[i].classList.add('placeholder');
        fcToCheck[i].addEventListener('focus', function() {
            if (this.value==this.getAttribute("placeholder")) {
            this.value = '';
            this.classList.remove('placeholder');
        }
        });
        fcToCheck[i].addEventListener('blur', function() {
        if (this.value == '') {
            this.value = this.getAttribute("placeholder");
            this.classList.add('placeholder');
        }
        });
    }
    }

    for(i = 0, count = frmsToCheck.length; i < count; i++) {

    frmsToCheck[i].addEventListener('submit', function(e) {
        var i, count, plcHld;

    // first do all the checking for required
    // element and form validation.
    // Only remove placeholders before final submission
        plcHld = this.querySelectorAll('[placeholder]');
        for(i = 0, count = plcHld.length; i < count; i++){
        //if the placeholder still equals the value
        if(plcHld[i].value == plcHld[i].getAttribute('placeholder')){
            // don't submit if required
            if(plcHld[i].hasAttribute('required')) {
            // create error messaging
            plcHld[i].classList.add('error');
            e.preventDefault();
            } else {
            // if not required, clear value before submitting.
            plcHld[i].value = '';
            }
        } else {
            // remove legacy error messaging
            plcHld[i].classList.remove('error');
        }
        }
    });
    }
</script>

function setErrorMessages(formControl) {
    var validityState_object = formControl.validity;
    if (validityState_object.valueMissing) {
        formControl.setCustomValidity('Please set an age (required)');  
    } else if (validityState_object.rangeUnderflow) {
        formControl.setCustomValidity('You\'re too young');
    } else if (validityState_object.rangeOverflow) {
        formControl.setCustomValidity('You\'re too old');
    } else if (validityState_object.stepMismatch) {
        formControl.setCustomValidity('Counting half birthdays?');
    } else {
        //if valid, must set falsy value or will always error 
        formControl.setCustomValidity('');
    }
}

        
      var videoEl = document.getElementsByTagName('video')[0],
        playPauseBtn = document.getElementById('playPause'),
        vidControls = document.getElementById('controls'),
        muteBtn = document.getElementById('muteUnmute'),
        timeHolder = document.getElementById('timer');
        
        videoEl.removeAttribute('controls');
