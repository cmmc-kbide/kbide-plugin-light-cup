
Blockly.JavaScript['light_cup_block'] = function(block) {
  var value_light_cup_led_pin = Blockly.JavaScript.valueToCode(block, 'LIGHT_CUP_LED_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_light_cup_switch_pin = Blockly.JavaScript.valueToCode(block, 'LIGHT_CUP_SWITCH_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
    var code = `#VARIABLE uint8_t lightread(int pinLED,int pininput){
  digitalWrite(pinLED,!digitalRead(pininput));
  return digitalRead(pininput);
}#END#SETUPpinMode(${value_light_cup_led_pin} , OUTPUT); 
   pinMode(${value_light_cup_switch_pin}, INPUT);#ENDlightread(${value_light_cup_led_pin},${value_light_cup_switch_pin})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};