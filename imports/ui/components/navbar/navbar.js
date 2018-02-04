import './navbar.html';


//account config
Accounts.ui.config({
  passwordSignupFields:"USERNAME_AND_EMAIL"
});

Template.navbar.events({
  'click .js-sent-sos':function(){
      alert("已發送緊急訊息！！")
  }
});
