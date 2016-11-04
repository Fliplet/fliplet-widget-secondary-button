$('[data-secondary-button-id]').click(function (event) {
  event.preventDefault();

  var data = Fliplet.Widget.getData($(this).attr('data-secondary-button-id'));

  Fliplet.Navigate.to(data.action);
});
