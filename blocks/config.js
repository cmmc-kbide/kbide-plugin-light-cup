module.exports = [
    {
        name: "photo_resistor_block",
        blocks: [
            {
              xml: `<block type="light_cup_block">
                            <value name="LIGHT_CUP_LED_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                            <value name="LIGHT_CUP_SWITCH_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                        </block>`
            }
        ]
    }
];