$('[data-button-id]').click(function (event) {
  event.preventDefault();

  var data = Fliplet.Widget.getData($(this).data('button-id'));

  Fliplet.Navigate.to(data.action);
});
