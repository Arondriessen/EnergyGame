
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu
  ],

  [   // /* 01 */ Game

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Power Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ cellSize * 2, // width
          /* 05 */ cellSize * 2, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Power Circle Progress

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ (cellSize * 2) - 8, // width
          /* 05 */ (cellSize * 2) - 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return color(57, 181, 74); }, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 8, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [- (PI / 2), ((min(powerPerc, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Power Circle Progress 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ (cellSize * 2) - 23, // width
          /* 05 */ (cellSize * 2) - 23, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return colours[3]; }, // outline-colour
          /* 12 */ 125, // outline-alpha
          /* 13 */ 8, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [- (PI / 2), ((min(max(powerPerc - 100, 0), 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Power Circle Percentage

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - (cellSize * 0.15), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return powerPerc + "%"; }, // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Power Circle Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + (cellSize * 0.2), // y pos
          /* 04 */ (cellSize * 1.2), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Power Circle Percentage

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + (cellSize * 0.35), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "P O W E R", // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoBold
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Battery Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "B A T T E R Y", // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 07 */ Battery Charge Level Bar

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 2), // y pos
          /* 04 */ 8, // width
          /* 05 */ function() { return ((cellSize * 2) / (batteryCapacity)) * batteryCharge; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return colours[batteryStatus]; }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 08 */ Battery Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 3.25), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return (batteryCharge + " / " + batteryCapacity + " (MWh)"); }, // text
          /* 02 */ 13, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 09 */ Battery Outline

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 10 */ Distribution Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize), // y pos
          /* 04 */ (cellSize * 4), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "D I S T R I B U T I O N", // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 11 */ Distribution to Battery Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) - (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 12 */ Distribution to Battery Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) - ((cellSize) * 1.01), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (batteryIn > 0) { return colours[2]; } else { return 205; }}, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 13 */ Distribution to Battery Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.65), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return (batteryIn + " MWh"); }, // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ function() { return 50 + (205 * (batteryIn > 0)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 14 */ Battery to Distribution Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3), // x pos
          /* 03 */ (height / 2) - (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 15 */ Battery to Distribution Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3), // x pos
          /* 03 */ (height / 2) - ((cellSize) * 0.99), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (batteryOut > 0) { return colours[1]; } else { return 205; }}, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 180 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 16 */ Battery to Distribution Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.65), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return (batteryOut + " MWh"); }, // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ function() { return 50 + (205 * (batteryOut > 0)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 17 */ Production to Distribution Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) + (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 18 */ Production to Distribution Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) + ((cellSize) * 0.99), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return colours[1]; }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 19 */ Production to Distribution Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) + (cellSize * 0.65), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return (produced + " MWh"); }, // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 20 */ Distribution to Consumption Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 2), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 21 */ Distribution to Consumption Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 1.99), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return colours[2]; }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 90 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 22 */ Distribution to Consumption Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 2.3), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return (powerUsed + " MWh"); }, // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 1, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 23 */ Distribution Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 2), // x pos
          /* 03 */ (height / 2) - (cellSize), // y pos
          /* 04 */ (cellSize * 4), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return "D E M A N D :  " + demand + " MWh"; }, // text
          /* 02 */ 15, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 24 */ Distribution to Consumption Circle 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 2), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 25 */ Distribution to Consumption Arrow 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 2.01), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return colours[1]; }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 90 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 26 */ Distribution to Battery Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) - (cellSize * 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ ((cellSize / 6) * 5), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 27 */ Production to Distribution Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5), // x pos
          /* 03 */ (height / 2) + (cellSize * 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ ((cellSize / 6) * 5), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 28 */ Distribution to Consumption Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ ((cellSize / 6) * 5), // width
          /* 05 */ 0, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 29 */ Distribution to Consumption Line 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize), // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ ((cellSize / 6) * 5), // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 30 */ Battery to Distribution Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 4), // x pos
          /* 03 */ (height / 2) - (cellSize * 3), // y pos
          /* 04 */ (cellSize), // width
          /* 05 */ 1, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 31 */ Battery to Distribution Line 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3), // x pos
          /* 03 */ (height / 2) - (cellSize * 3), // y pos
          /* 04 */ 1, // width
          /* 05 */ (cellSize + ((cellSize / 6) * 5)), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]
    ]
  ]
];
