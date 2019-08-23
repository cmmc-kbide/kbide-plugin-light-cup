Blockly.JavaScript["light_cup_block"] = function(block) {
    var value_light_cup_led_pin = Blockly.JavaScript.valueToCode(
      block,
      "LIGHT_CUP_LED_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_light_cup_switch_pin = Blockly.JavaScript.valueToCode(
      block,
      "LIGHT_CUP_SWITCH_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
		int LIGHT_CUP_LED_PIN_${value_light_cup_led_pin} = ${value_light_cup_led_pin};
		int LIGHT_CUP_SWITCH_PIN_${value_light_cup_switch_pin} = ${value_light_cup_switch_pin};
		int LIGHT_CUP_SWITCH_STATE_${value_light_cup_switch_pin} = 0; 
	#END
	#SETUP
		pinMode(LIGHT_CUP_LED_PIN, OUTPUT); 
  		pinMode(LIGHT_CUP_SWITCH_PIN, INPUT);
	#END
	LIGHT_CUP_SWITCH_STATE_${value_light_cup_switch_pin} = digitalRead(LIGHT_CUP_SWITCH_PIN_${value_light_cup_switch_pin});
    `;
    return code;
  };