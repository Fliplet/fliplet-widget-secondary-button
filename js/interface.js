var data = Fliplet.Widget.getData() || {};

function getFormData() {
  return {
    label: $('#secondaryButtonLabel').val()
  }
}

// Fired from Fliplet Studio when the external save button is clicked
Fliplet.Widget.onSaveRequest(function () {
  Fliplet.Widget.save(getFormData()).then(function () {
    Fliplet.Widget.complete();
  });
})

Fliplet.Widget.open('com.fliplet.link', {
  // If provided, the iframe will be appended here,
  // otherwise will be displayed as a full-size iframe overlay
  selector: '#action',
  // Also send the data I have locally, so that
  // the interface gets repopulated with the same stuff
  data: data.action
}).then(function (result) {
  data.action = result.data;
});
