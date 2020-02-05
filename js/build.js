Fliplet.Widget.instance('secondary-button', function(data) {
  $(this).click(function(event) {
    event.preventDefault();

    if (data.action) {
      Fliplet.Navigate.to(data.action);
    }
  });
});
