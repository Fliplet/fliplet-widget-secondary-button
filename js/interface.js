var data = Fliplet.Widget.getData() || {};

Fliplet.Widget.open('com.fliplet.link', {
  // If provided, the iframe will be appended here,
  // otherwise will be displayed as a full-size iframe overlay
  selector: '#action',
  // Also send the data I have locally, so that
  // the interface gets repopulated with the same stuff
  data: data.action,
}).then(function (result) {
  data.action = result.data;
  $('form').submit();
});

$('form').submit(function (event) {
  event.preventDefault();

  data.name = $('#buttonName').val();

  Fliplet.Widget.save(data).then(function () {
    Fliplet.Widget.complete();
    window.location.reload();
  });
});