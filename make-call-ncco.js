const { Vonage } = require('@vonage/server-sdk')
const { NCCOBuilder, Talk, OutboundCallWithNCCO } = require('@vonage/voice')
require('dotenv').config()

const {
  VONAGE_API_KEY,
  VONAGE_API_SECRET,
  VONAGE_APPLICATION_ID,
  VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  TO_NUMBER,
  VONAGE_NUMBER
} = process.env

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
})

async function makeCall() {
  const builder = new NCCOBuilder();
  builder.addAction(new Talk('This is a text to speech call from Vonage'));
  const resp = await vonage.voice.createOutboundCall(
    new OutboundCallWithNCCO(
      builder.build(),
      { type: 'phone', number: TO_NUMBER },
      { type: 'phone', number: VONAGE_NUMBER}
    )
  );

  console.log(resp);
}
makeCall();