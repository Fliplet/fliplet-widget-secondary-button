var data = Fliplet.Widget.getData() || {};

var linkActionProvider = Fliplet.Widget.open('com.fliplet.link', {
  // If provided, the iframe will be appended here,
  // otherwise will be displayed as a full-size iframe overlay
  selector: '#action',
  // Also send the data I have locally, so that
  // the interface gets repopulated with the same stuff
  data: data.action
  // Removed until fixed
  /*
  onEvent: function (e) {
    // contains e.event and e.data
    linkSet = e.set;

    if (typeof linkSet == "undefined") {
      Fliplet.Widget.toggleSaveButton(true);
    } else {
      Fliplet.Widget.toggleSaveButton(linkSet);
    }
  }
  */
});

// 1. Fired from Fliplet Studio when the external save button is clicked
Fliplet.Widget.onSaveRequest(function () {
  $('form').submit();
});

// 2. Fired when the user submits the form
$('form').submit(function (event) {
  event.preventDefault();
  linkActionProvider.forwardSaveRequest();
});

// 3. Fired when the provider has finished
linkActionProvider.then(function (result) {
  data.action = result;
  data.label = $('#secondaryButtonLabel').val();

  Fliplet.Widget.save(data).then(function () {
    Fliplet.Widget.complete();
    window.location.reload();
  });
});

$('#help_tip').on('click', function() {
  alert("During beta, please use live chat and let us know what you need help with.");
});
