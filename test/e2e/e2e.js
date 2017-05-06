module.exports = {
  'e2e test Phone format': function (client) {
    client
      .url('http://104.199.112.182/')
      .waitForElementVisible('body',1000)
      .assert.title('Phone Number Verification')
      .assert.visible('input[type=text]')
      .assert.visible('input[name=format]')
      .setValue('input[name=format]', '000-000-0000')
      .assert.visible('input[value="000-000-0000"]')
      .click('button[id=formatbtn]')
      .pause(3000)
      .acceptAlert()

      .setValue('input[name=phoneNumber]','000-000-0000')
      .assert.visible('input[value="000-000-0000"]')
      .click('button[id=phoneNoBtn]')	
      .pause(4000)
      .acceptAlert()

      .clearValue('input[name=phoneNumber]')
      .setValue('input[name=phoneNumber]','000.000.0000')
      .assert.visible('input[value="000.000.0000"]')
      .click('button[id=phoneNoBtn]')	
      .pause(4000)
      .acceptAlert()
      
      .clearValue('input[name=format]')
      .setValue('input[name=format]', '0000000000')
      .assert.visible('input[value="0000000000"]')
      .click('button[id=formatbtn]')
      .pause(3000)
      .acceptAlert()

      .clearValue('input[name=phoneNumber]')
      .setValue('input[name=phoneNumber]','6666666666')
      .assert.visible('input[value="6666666666"]')
      .click('button[id=phoneNoBtn]')	
      .pause(4000)
      .acceptAlert()
      .end();
  }
  
};
