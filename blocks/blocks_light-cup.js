Blockly.Blocks['light_cup_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LIGHT CUP");
    this.appendValueInput("LIGHT_CUP_LED_PIN")
        .setCheck("Number")
        .appendField("LED PIN");
    this.appendValueInput("LIGHT_CUP_SWITCH_PIN")
        .setCheck("Number")
        .appendField("SWITCH PIN");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};