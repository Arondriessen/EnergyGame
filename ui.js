
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu
  ],

  [   // /* 01 */ Game

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Play Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 300, // width
          /* 05 */ 100, // height
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
      ]
    ]
  ],

  [   // /* 02 */ Settings
  ]
];
