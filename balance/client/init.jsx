
if (Meteor.isClient) {
  // This code is executed on the client only
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Meteor.startup(function() {
  ReactDOM.render(<App />,  document.getElementById('container'));
});
}