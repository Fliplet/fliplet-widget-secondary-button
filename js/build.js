Fliplet.Widget.instance('secondary-button', function(data) {
  $(this).click(async function(event) {
    event.preventDefault();

    if (data.action) {
      const action = data.action || {};

      try {
        action.dynamicContext = await Fliplet.Widget.getDynamicContext($(this));
      } catch (e) {
        action.dynamicContext = {};
      }

      Fliplet.Navigate.to(action);
    }
  });
});
