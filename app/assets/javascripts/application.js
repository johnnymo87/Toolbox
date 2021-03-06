// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.ui.datepicker
//= require jquery.ui.slider
//= require jquery_ujs
//= require turbolinks
//= require_tree .

TB = {};

TB.datepicker = $(function() {
    $('.datepicker').datepicker();
});

TB.timepicker = $(function() {
    $('.timepicker').timepicker({
        timeFormat: "HH:mm:ss"
    });
});

TB.fast_submit = $(function() {
    $('.fast_submit').change(function() {
        this.form.submit();
    });
});

TB.suppress = $(function() {
    $('.hide_if_JS').hide()
});