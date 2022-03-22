
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu
  ],

  [   // /* 01 */ Game

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      // Timeline

      [ // /* 01 */ Timeline Progress Bar

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 5), // y pos
          /* 04 */ function() { return ((cellSize * 12) / 100) * min(timer, 100); }, // width
          /* 05 */ 8, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 02 */ Timeline Progress Bar Underline

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 5), // y pos
          /* 04 */ (cellSize * 12), // width
          /* 05 */ 1, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 03 */ Timeline Begin Year

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 5) - 24, // y pos
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
          /* 01 */ "2022", // text
          /* 02 */ 13 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 04 */ Timeline End Year

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 5) - 24, // y pos
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
          /* 01 */ "2040", // text
          /* 02 */ 13 * uiScale , // text-size
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

      [ // /* 04 */ Timeline Current Year

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (cellSize * 6)) + (((cellSize * 12) / 100) * timer)); }, // x pos
          /* 03 */ (height / 2) - (cellSize * 5) - 24, // y pos
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

          /* 00 */ function() { return ((timer > 5) && (timer < 95)) }, // state (0 = off, 1 = on)
          /* 01 */ function() { return min(round(2022 + ((18 / 100) * timer)), 2040); }, // text
          /* 02 */ 13 * uiScale , // text-size
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

      // Production

      [ // /* 01 */ Production Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) + (cellSize * 2), // y pos
          /* 04 */ (cellSize * 12), // width
          /* 05 */ (cellSize * 4), // height
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
    ],

    [ // /* 01 */ Behind Build Menu

      /* 00 */ function() { return (uiState == 0)}, // state (0 = off, 1 = on)

      // Distribution

      // Graph Explanation

      [ // /* 01 */ Graph Expl. Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX, // x pos
          /* 03 */ gPEY - (cellSize), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 230, // outline-colour
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

      [ // /* 02 */ Graph Expl. Text 1

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 1.8), // x pos
          /* 03 */ gPEY - (cellSize * 0.125), // y pos
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
          /* 01 */ "D E M A N D", // text
          /* 02 */ 9 * uiScale , // text-size
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

      [ // /* 02 */ Graph Expl. Line 1

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.25), // x pos
          /* 03 */ gPEY - (cellSize * 0.125), // y pos
          /* 04 */ (cellSize * 0.85), // width
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

      [ // /* 02 */ Graph Expl. Text 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.5), // x pos
          /* 03 */ gPEY - (cellSize * 0.375), // y pos
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
          /* 01 */ "S T O R E D", // text
          /* 02 */ 9 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 02 */ Graph Expl. Circle 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.35), // x pos
          /* 03 */ gPEY - (cellSize * 0.375), // y pos
          /* 04 */ 11, // width
          /* 05 */ 11, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#C9CBE2'), // colour
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

      [ // /* 02 */ Graph Expl. Text 3

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.5), // x pos
          /* 03 */ gPEY - (cellSize * 0.625), // y pos
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
          /* 01 */ "W A S T E D", // text
          /* 02 */ 9 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 02 */ Graph Expl. Circle 3

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.35), // x pos
          /* 03 */ gPEY - (cellSize * 0.625), // y pos
          /* 04 */ 11, // width
          /* 05 */ 11, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#FBD2E4'), // colour
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

      [ // /* 02 */ Graph Expl. Text 4

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.5), // x pos
          /* 03 */ gPEY + (cellSize * 0.125), // y pos
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
          /* 01 */ "F R O M  S T O R A G E", // text
          /* 02 */ 9 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 02 */ Graph Expl. Circle 4

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.35), // x pos
          /* 03 */ gPEY + (cellSize * 0.125), // y pos
          /* 04 */ 11, // width
          /* 05 */ 11, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#C9CBE2'), // colour
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

      [ // /* 02 */ Graph Expl. Text 5

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.5), // x pos
          /* 03 */ gPEY + (cellSize * 0.375), // y pos
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
          /* 01 */ "S H O R T A G E", // text
          /* 02 */ 9 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 02 */ Graph Expl. Circle 5

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.35), // x pos
          /* 03 */ gPEY + (cellSize * 0.375), // y pos
          /* 04 */ 11, // width
          /* 05 */ 11, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#FBD2E4'), // colour
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

      [ // /* 02 */ Graph Expl. Text 6

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.5), // x pos
          /* 03 */ gPEY + (cellSize * 0.625), // y pos
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
          /* 01 */ "S U P P L I E D", // text
          /* 02 */ 9 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 02 */ Graph Expl. Circle 6

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 0.35), // x pos
          /* 03 */ gPEY + (cellSize * 0.625), // y pos
          /* 04 */ 11, // width
          /* 05 */ 11, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#D7F0DB'), // colour
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


      [ // /* 01 */ Distribution Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX, // x pos
          /* 03 */ gPEY - (cellSize), // y pos
          /* 04 */ (cellSize * 11), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
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

      [ // /* 02 */ Distribution Graph End Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ gPEX + (cellSize * 9), // x pos
          /* 03 */ gPEY - (cellSize), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ color(colours[1]), // outline-colour
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

      // Production

      [ // /* 02 */ Production to Distribution Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ round((width / 2) + (cellSize * 5)) - 1, // x pos
          /* 03 */ round((height / 2) + (cellSize * 2)), // y pos
          /* 04 */ 2, // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
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

      // Consumers

      [ // /* 01 */ Consumers Background + Large Icon

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX, // x pos
          /* 03 */ cSY, // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return consumerIcons[floor(min(99.98, publicRage) / 33.33)][0]; }, // text
          /* 02 */ 10, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.83, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return consumerIcons[floor(min(99.98, publicRage) / 33.33)][1]; }, // image
          /* 02 */ function() { return cellSize / 1.6; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 1.6; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.53, // image-v-align
        ]
      ],

      [ // /* 02 */ Consumers Anger Level Bar

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX, // x pos
          /* 03 */ cSY + (cellSize * 2), // y pos
          /* 04 */ function() { return ((cellSize * 2) / 100) * publicRage; }, // width
          /* 05 */ 8, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ colours[6], // colour
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

      [ // /* 01 */ Consumers Background 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2), // x pos
          /* 03 */ cSY, // y pos
          /* 04 */ (cellSize * 4), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // textBold
          /* 02 */ 0, // text-sizeBold
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

      [ // /* 01 */ Consumers Title Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX, // x pos
          /* 03 */ cSY, // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize / 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 250, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "C O N S U M E R S", // text
          /* 02 */ 12 * uiScale , // text-sizeBold
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


      [ // /* 01 */ Consumers Price Related Happiness Icon

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.5), // x pos
          /* 03 */ cSY + (cellSize) - (cellSize / 1.7), // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-sizeBold
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ happyIcon, // image
          /* 02 */ function() { return cellSize / 3.2; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 3.2; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Consumers Price Related Happiness Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) - (cellSize / 1.7) - (cellSize * 0.05), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "DEMAND: " + demand + " MWh", // text
          /* 02 */ 12, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 01 */ Consumers Price Related Happiness Reason

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) - (cellSize / 1.7) + (cellSize * 0.15), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "NO RECENT OUTAGES", // text
          /* 02 */ 8, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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


      [ // /* 01 */ Consumers Price Related Happiness Icon

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.5), // x pos
          /* 03 */ cSY + (cellSize), // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-sizeBold
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ sadIcon, // image
          /* 02 */ function() { return cellSize / 3.2; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 3.2; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Consumers Price Related Happiness Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) - (cellSize * 0.05), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "PRICE: $" + price + "/MWh", // text
          /* 02 */ 11, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 01 */ Consumers Price Related Happiness Reason

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) + (cellSize * 0.15), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "RECENT PRICE HIKE", // text
          /* 02 */ 8, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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


      [ // /* 01 */ Consumers Price Related Happiness Icon

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.5), // x pos
          /* 03 */ cSY + (cellSize) + (cellSize / 1.7), // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-sizeBold
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ unhappyIcon, // image
          /* 02 */ function() { return cellSize / 3.2; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 3.2; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Consumers Price Related Happiness Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) + (cellSize / 1.7) - (cellSize * 0.05), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return "GREEN ENERGY: " + greenScore + "%"; }, // text
          /* 02 */ 12, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 01 */ Consumers Price Related Happiness Reason

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cSX + (cellSize * 2.8), // x pos
          /* 03 */ cSY + (cellSize) + (cellSize / 1.7) + (cellSize * 0.15), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "OFF COURSE FOR TARGET", // text
          /* 02 */ 8, // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      // Power Produced

      [ // /* 07 */ Production to Consumption Line 1

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize * 0.1), // x pos
          /* 03 */ pDCY - (cellSize * 1.5) + (cellSize * 0.1), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 07 */ Production to Consumption Line 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize * 0.1), // x pos
          /* 03 */ pDCY - (cellSize * 1.5) + (cellSize * 0.1), // y pos
          /* 04 */ (cellSize * 5), // width
          /* 05 */ 0, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 07 */ Production to Consumption Line 3

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX + (cellSize * 0.1), // x pos
          /* 03 */ pDCY - (cellSize * 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryIn > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 07 */ Production to Consumption Line 4

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize * 0.1), // x pos
          /* 03 */ pDCY - (cellSize * 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize / 2) - (cellSize * 0.1), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryOut > 0) { return colours[4]; } else { return 205; } }, // colour
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

      [ // /* 07 */ Production to Consumption Line 5

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize * 0.1), // x pos
          /* 03 */ pDCY - (cellSize * 1.5) - (cellSize * 0.1), // y pos
          /* 04 */ (cellSize * 5) - (cellSize * 0.2), // width
          /* 05 */ 0, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryOut > 0) { return colours[4]; } else { return 205; } }, // colour
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


      [ // /* 01 */ Produced Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY, // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { ui[1][0][1][1][8] = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { ui[1][0][1][1][8] = 255; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { production.push([ 1, 1, 3, 9, 0, 0 ]); console.log("button clicked"); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Produced Circle Progress

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY, // y pos
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
          /* 15 */ function() { return [- (PI / 2), ((min(producedPerc, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
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

      [ // /* 02 */ Produced Circle Stored

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY, // y pos
          /* 04 */ (cellSize * 2) - 24, // width
          /* 05 */ (cellSize * 2) - 24, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return colours[4]; }, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 4, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [- (PI / 2), ((min(batteryInPerc, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
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

      [ // /* 03 */ Produced Circle Wasted

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ function() { return ((producedPerc - 100) > batteryInPerc); }, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY, // y pos
          /* 04 */ (cellSize * 2) - 24, // width
          /* 05 */ (cellSize * 2) - 24, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return colours[2]; }, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 4, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [(((min(batteryInPerc, 100) + 1) / 50) *  PI) - (PI / 2), ((min(producedPerc - 100, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
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

      [ // /* 03 */ Produced Circle Percentage

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY - (cellSize * 0.15), // y pos
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
          /* 01 */ function() { return producedPerc + "%"; }, // text
          /* 02 */ 42 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Produced Circle Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY + (cellSize * 0.2), // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Produced Circle Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY + (cellSize * 0.35), // y pos
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
          /* 01 */ "P R O D U C E D", // text
          /* 02 */ 12 * uiScale , // text-size
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

      [ // /* 03 */ Production to Distribution Circle Half Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize / 3), // x pos
          /* 03 */ pDCY + (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI / 2, PI * 1.5], // arc
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

      [ // /* 04 */ Production to Distribution Circle Half Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX + (cellSize / 3), // x pos
          /* 03 */ pDCY + (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI * 1.5, PI / 2], // arc
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

      [ // /* 05 */ Production to Distribution Circle Mid

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY + (cellSize), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
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

      [ // /* 06 */ Production to Distribution Circle Mid Top Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY + (cellSize) - (cellSize / 6), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 07 */ Production to Distribution Circle Mid Bottom Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX, // x pos
          /* 03 */ pDCY + (cellSize * 1) + (cellSize / 6), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 08 */ Production to Distribution Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize / 3), // x pos
          /* 03 */ pDCY + (cellSize), // y pos
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

      [ // /* 09 */ Production to Distribution Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pDCX - (cellSize / 4.8), // x pos
          /* 03 */ pDCY + (cellSize), // y pos
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
          /* 02 */ 11 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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


      [ // /* 07 */ Distribution to Waste Circle Half Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize / 1.75), // x pos
          /* 03 */ gPY + (cellSize * 2), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (waste > 0) { return colours[2]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI / 2, PI * 1.5], // arc
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

      [ // /* 08 */ Distribution to Waste Circle Half Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize / 1.75), // x pos
          /* 03 */ gPY + (cellSize * 2), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (waste > 0) { return colours[2]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI * 1.5, PI / 2], // arc
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

      [ // /* 09 */ Distribution to Waste Circle Mid

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2), // x pos
          /* 03 */ gPY + (cellSize * 2), // y pos
          /* 04 */ cellSize * 1.15, // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
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

      [ // /* 10 */ Distribution to Waste Circle Mid Top Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2), // x pos
          /* 03 */ gPY + (cellSize * 2) - (cellSize / 6), // y pos
          /* 04 */ cellSize * 1.15, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (waste > 0) { return colours[2]; } else { return 205; } }, // colour
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

      [ // /* 11 */ Distribution to Waste Circle Mid Bottom Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2), // x pos
          /* 03 */ gPY + (cellSize * 2) + (cellSize / 6), // y pos
          /* 04 */ cellSize * 1.15, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (waste > 0) { return colours[2]; } else { return 205; } }, // colour
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

      [ // /* 12 */ Distribution to Waste Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize / 1.75), // x pos
          /* 03 */ gPY + (cellSize * 2), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (waste > 0) { return colours[2]; } else { return 205; } }, // colour
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

      [ // /* 13 */ Distribution to Waste Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize / 2.4), // x pos
          /* 03 */ gPY + (cellSize * 2), // y pos
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
          /* 01 */ function() { return (waste + " MWh Wasted"); }, // text
          /* 02 */ 11 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      // Rest of Distribution

      [ // /* 28 */ Distribution to Consumption Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ round((width / 2) - (cellSize * 0.1)), // x pos
          /* 03 */ round(pCY + cellSize), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize / 2) + (cellSize * 0.1), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 2, // outline-width
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
          /* 02 */ round((width / 2) + (cellSize * 0.1)), // x pos
          /* 03 */ round(pCY + cellSize), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize / 2) - (cellSize * 0.1), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryOut > 0) { return colours[4]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 2, // outline-width
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


      [ // /* 01 */ Power Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY, // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Power Circle Progress

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY, // y pos
          /* 04 */ (cellSize * 2) - 8, // width
          /* 05 */ (cellSize * 2) - 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return colours[((powerPerc > 99) * -1) + 2]; }, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 8, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [- (PI / 2), ((min(producedPerc, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
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

      [ // /* 02 */ Power Circle Progress 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ function() { return (batteryOut > 0); }, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY, // y pos
          /* 04 */ (cellSize * 2) - 8, // width
          /* 05 */ (cellSize * 2) - 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return colours[4]; }, // outline-colour
          /* 12 */ 125, // outline-alpha
          /* 13 */ 8, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ function() { return [(((min(producedPerc, 100) + 0) / 50) *  PI) - (PI / 2), ((min(producedPerc + batteryOutPerc - 100, 100) / 50) *  PI) - (PI / 2)]; } // arc-start-and-stop
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

      [ // /* 03 */ Power Circle Percentage

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY - (cellSize * 0.15), // y pos
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
          /* 01 */ function() { return min(powerPerc, 100) + "%"; }, // text
          /* 02 */ 42* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Power Circle Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY + (cellSize * 0.2), // y pos
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Power Circle Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY + (cellSize * 0.35), // y pos
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
          /* 01 */ "P O W E R E D", // text
          /* 02 */ 12 * uiScale , // text-size
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


      [ // /* 07 */ Distribution to Consumption Circle Half Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX - (cellSize / 3), // x pos
          /* 03 */ pCY + (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI / 2, PI * 1.5], // arc
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

      [ // /* 08 */ Distribution to Consumption Circle Half Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX + (cellSize / 3), // x pos
          /* 03 */ pCY + (cellSize), // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI * 1.5, PI / 2], // arc
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

      [ // /* 09 */ Distribution to Consumption Circle Mid

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY + (cellSize), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
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

      [ // /* 10 */ Distribution to Consumption Circle Mid Top Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY + (cellSize) - (cellSize / 6), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 11 */ Distribution to Consumption Circle Mid Bottom Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX, // x pos
          /* 03 */ pCY + (cellSize) + (cellSize / 6), // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (produced > 0) { return colours[1]; } else { return 205; } }, // colour
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

      [ // /* 12 */ Distribution to Consumption Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX - (cellSize / 3), // x pos
          /* 03 */ pCY + (cellSize), // y pos
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

      [ // /* 13 */ Distribution to Consumption Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ pCX - (cellSize / 4.8), // x pos
          /* 03 */ pCY + (cellSize), // y pos
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
          /* 02 */ 11* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      // Battery

      [ // /* 01 */ Battery Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX - (cellSize), // x pos
          /* 03 */ bTY, // y pos
          /* 04 */ (cellSize * 4), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // textBold
          /* 02 */ 0, // text-sizeBold
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

      [ // /* 01 */ Battery Icon and Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX, // x pos
          /* 03 */ bTY, // y pos
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
          /* 01 */ function() { if (batteryIn > 0) { return "C H A R G I N G"} else if (batteryOut > 0) { return "D I S C H A R G I N G" } else { return " O F F"} }, // textBold
          /* 02 */ 13 * uiScale , // text-sizeBold
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.2, // text-v-align
          /* 07 */ latoBold
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ batteryIcon, // image
          /* 02 */ 45, // image-width (or size)
          /* 03 */ 25.4, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Battery Charge Level Bar

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX - (cellSize), // x pos
          /* 03 */ bTY + (cellSize), // y pos
          /* 04 */ function() { return ((cellSize * 2) / (batteryCapacity)) * batteryCharge; }, // width
          /* 05 */ 8, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ colours[4], // colour
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

      [ // /* 03 */ Battery Charge Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX, // x pos
          /* 03 */ bTY, // y pos
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
          /* 01 */ function() { return (batteryCharge + " / " + batteryCapacity + " (MWh)"); }, // text
          /* 02 */ 11 * uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.75, // text-v-align
          /* 07 */ latoBold
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 14 */ Battery Outline

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX, // x pos
          /* 03 */ bTY, // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
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

      [ // /* 14 */ Battery Outline 2

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ bTY, // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
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

      [ // /* 14 */ Battery In/Out Line Length

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ bTY - (cellSize * 0.7), // y pos
          /* 04 */ 0, // width
          /* 05 */ (cellSize * 1.4), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ colours[4], // outline-colour
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

      [ // /* 14 */ Battery In/Out Line Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ bTY - (cellSize * 0.7), // y pos
          /* 04 */ (cellSize * 0.2), // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ colours[4], // outline-colour
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

      [ // /* 14 */ Battery In/Out Line Mid

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ bTY, // y pos
          /* 04 */ (cellSize * 0.2), // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ colours[4], // outline-colour
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

      [ // /* 14 */ Battery In/Out Line Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ bTY + (cellSize * 0.7), // y pos
          /* 04 */ (cellSize * 0.2), // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ colours[4], // outline-colour
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

      [ // /* 07 */ Distribution to Battery Circle Half Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2) - (cellSize / 3), // x pos
          /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)); }, // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryInOut != 0) { return colours[4]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI / 2, PI * 1.5], // arc
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

      [ // /* 08 */ Distribution to Battery Circle Half Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 5, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2) + (cellSize / 3), // x pos
          /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)); }, // y pos
          /* 04 */ (cellSize / 3), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { if (batteryInOut != 0) { return colours[4]; } else { return 205; } }, // colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ [PI * 1.5, PI / 2], // arc
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

      [ // /* 09 */ Distribution to Battery Circle Mid

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)); }, // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ (cellSize / 3), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
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

      [ // /* 10 */ Distribution to Battery Circle Mid Top Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)) - (cellSize / 6); }, // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (batteryInOut != 0) { return colours[4]; } else { return 205; } }, // colour
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

      [ // /* 11 */ Distribution to Battery Circle Mid Bottom Line

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2), // x pos
          /* 03 */ /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)) + (cellSize / 6); }, // y pos
          /* 04 */ (cellSize / 1.5), // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (batteryInOut != 0) { return colours[4]; } else { return 205; } }, // colour
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

      [ // /* 12 */ Distribution to Battery Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ bTX + (cellSize * 2) - (cellSize / 3), // x pos
          /* 03 */ /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)); }, // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { if (batteryInOut != 0) { return colours[4]; } else { return 205; }}, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ function() { return ((batteryOut > 0) * 180); } // rot-angle
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
          /* 02 */ bTX + (cellSize * 2) - (cellSize / 4.8), // x pos
          /* 03 */ /* 03 */ function() { return bTY - ((cellSize * 0.6) * (batteryIn / batteryInMax)) + ((cellSize * 0.6) * (batteryOut / batteryOutMax)); }, // y pos
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
          /* 01 */ function() { return (abs(batteryInOut) + " MWh"); }, // text
          /* 02 */ 11 * uiScale, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      // Top Bar

      [ // /* 01 */ Top Bar Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ cFY, // y pos
          /* 04 */ (cellSize * 11), // width
          /* 05 */ (cellSize * 1.5), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 230, // outline-colour
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

      [ // /* 01 */ Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 5), // x pos
          /* 03 */ cFY, // y pos
          /* 04 */ (cellSize), // width
          /* 05 */ (cellSize * 1.5), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 230, // outline-colour
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

      [ // /* 01 */ Game Objective Background Left Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 1.4), // x pos
          /* 03 */ cFY + (cellSize * 0.55), // y pos
          /* 04 */ (cellSize * 0.6), // width
          /* 05 */ (cellSize * 0.6), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ colours[5], // colour
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

      [ // /* 01 */ Game Objective Background Right Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 1.4), // x pos
          /* 03 */ cFY + (cellSize * 0.55), // y pos
          /* 04 */ (cellSize * 0.6), // width
          /* 05 */ (cellSize * 0.6), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ colours[5], // colour
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

      [ // /* 01 */ Game Objective

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2), // x pos
          /* 03 */ cFY + (cellSize * 0.55), // y pos
          /* 04 */ (cellSize * 2.8), // width
          /* 05 */ (cellSize * 0.6), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ colours[5], // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "B E C O M E  C A R B O N  N E U T R A L", // text
          /* 02 */ 14* uiScale , // text-size
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

      [ // /* 01 */ Game Objective Progress

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2), // x pos
          /* 03 */ cFY + (cellSize * 1.15), // y pos
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
          /* 01 */ function() { return greenScore + " %   G R E E N  P R O D U C T I O N"; }, // text
          /* 02 */ 12* uiScale , // text-size
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

      [ // /* 01 */ Game Speed Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 2.5), // x pos
          /* 03 */ cFY + (cellSize * 0.75), // y pos
          /* 04 */ (cellSize * 0.66), // width
          /* 05 */ (cellSize * 0.66), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return timeSpd + "X"; }, // text
          /* 02 */ 20, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOutlineOp = 255; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (timeSpd < 32) { timeSpd *= 2; } else { timeSpd = 1; } } // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Game Start/Pause Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ cFY + (cellSize * 0.75), // y pos
          /* 04 */ (cellSize * 0.66), // width
          /* 05 */ (cellSize * 0.66), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "1X", // text
          /* 02 */ 18* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoBold
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOutlineOp = 255; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { }, // onHoverOut event (0 = no event)
          /* 03 */ function() { gameState = (gameState * -1) + 1; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (gameState) { return pauseIcon; } else { return playIcon; }}, // image
          /* 02 */ function() { return cellSize / 4; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 4; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Research Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 4.5), // x pos
          /* 03 */ cFY + (cellSize * 0.75), // y pos
          /* 04 */ (cellSize * 0.66), // width
          /* 05 */ (cellSize * 0.66), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 230, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "1X", // text
          /* 02 */ 18* uiScale , // text-size
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ researchIcon, // image
          /* 02 */ function() { return cellSize / 4; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 4; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Game Explanation Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5.5), // x pos
          /* 03 */ cFY + (cellSize * 0.75), // y pos
          /* 04 */ (cellSize * 0.66), // width
          /* 05 */ (cellSize * 0.66), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 230, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "?", // text
          /* 02 */ 26* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      // Money

      [ // /* 02 */ Total Balance

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 1.5), // x pos
          /* 03 */ cFY + (cellSize * 0.8), // y pos
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
          /* 01 */ function() { return "$" + moneyStr; }, // text
          /* 02 */ 34* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 1, // text-v-align
          /* 07 */ fontMedium
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Income Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 0.8), // x pos
          /* 03 */ cFY + (cellSize * 0.7), // y pos
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
          /* 01 */ function() { return "$" + income + " / h"; }, // text
          /* 02 */ 12* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 04 */ Expenses Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 0.8), // x pos
          /* 03 */ cFY + (cellSize * 1), // y pos
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
          /* 01 */ function() { return "$" + cost + " / h"; }, // text
          /* 02 */ 12* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 04 */ Profit Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 1.8), // x pos
          /* 03 */ cFY + (cellSize * 1), // y pos
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
          /* 01 */ function() { return "$" + profit + " / h"; }, // text
          /* 02 */ 12* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
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

      [ // /* 12 */ Income Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 0.6), // x pos
          /* 03 */ cFY + (cellSize * 0.7), // y pos
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

      [ // /* 12 */ Expenses Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 0.6), // x pos
          /* 03 */ cFY + (cellSize * 1), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 12 */ Profit Arrow

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 6, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ cFX + (cellSize * 1.6), // x pos
          /* 03 */ cFY + (cellSize * 1), // y pos
          /* 04 */ (cellSize * 0.12), // width
          /* 05 */ (cellSize * 0.12), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
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
    ],

    [ // /* 02 */ Build Menu

      /* 00 */ function() { return (uiState == 1); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 0, // x pos
          /* 03 */ 0, // y pos
          /* 04 */ width, // width
          /* 05 */ height, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 200, // alpha
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

      [ // /* 01 */ Right Window

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 4), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 10), // width
          /* 05 */ (cellSize * 7), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
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

      [ // /* 01 */ Left Window

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize * 7), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
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

      [ // /* 01 */ Build Menu Title

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 3), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return (productionTypes[buildSelected][0][0][0]); }, // text
          /* 02 */ 42* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
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

      [ // /* 01 */ Build Options 1

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ cellSize, // width
          /* 05 */ cellSize, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ 0, // arc


          // List Settings

          /* 16 */ function() { return productionTypes.length; }, // items
          /* 17 */ function() { return 7; }, // h-number
          /* 18 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 19 */ function() { return 0; }, // x-offset
          /* 20 */ function() { return cellSize; }, // y-offset
          /* 21 */ function() { return cellSize; }, // x-offset (new line)
          /* 22 */ function() { return 0; }, // y-offset (new line)
          /* 23 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 24 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return productionTypes[((v * hNum) + h)][0][0][0]; }, // text
          /* 02 */ 20, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOutlineOp = 255; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if ((uiSelectedIndex - 1) == buildSelected) { boxOutlineOp = 0; }; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { buildSelected = (uiSelectedIndex - 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return productionTypes[((v * hNum) + h)][0][0][2]; }, // image
          /* 02 */ function() { return cellSize / 2; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 2; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Build Options 2

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 5.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 3.5), // y pos
          /* 04 */ cellSize, // width
          /* 05 */ cellSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ function() { return 200 - ((((v * hNum) + h) == buildSelected) * 200); }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle
          /* 15 */ 0, // arc


          // List Settings

          /* 16 */ function() { return productionTypes.length; }, // items
          /* 17 */ function() { return 7; }, // h-number
          /* 18 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 19 */ function() { return 0; }, // x-offset
          /* 20 */ function() { return cellSize; }, // y-offset
          /* 21 */ function() { return cellSize; }, // x-offset (new line)
          /* 22 */ function() { return 0; }, // y-offset (new line)
          /* 23 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 24 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { boxOp = 0; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if ((uiSelectedIndex - 1) == buildSelected) { boxOutlineOp = 0; }; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { buildSelected = (uiSelectedIndex - 1); } // onClick event (0 = no event)
        ],
      ],

      [ // /* 01 */ Exit Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 4), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 2), // width
          /* 05 */ (cellSize), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
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
          /* 01 */ function() { boxFill = 0; img = exitIconW; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxFill = -1; img = exitIcon; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { uiState = 0; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ exitIcon, // image
          /* 02 */ function() { return cellSize / 3; }, // image-width (or size)
          /* 03 */ function() { return cellSize / 3; }, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 01 */ Bottom Window

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 4), // x pos
          /* 03 */ (height / 2) + cellSize, // y pos
          /* 04 */ (cellSize * 7), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 240, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "P R O J E C T E D   R E S U L T S", // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Build Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (cellSize * 3), // x pos
          /* 03 */ (height / 2) + cellSize, // y pos
          /* 04 */ (cellSize * 3), // width
          /* 05 */ (cellSize * 2), // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "B U I L D", // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ function() { return 25 + ((money > productionTypes[buildSelected][0][1][0]) * 230); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return (money > productionTypes[buildSelected][0][1][0]); }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxFill = 0; txtC = 255; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxFill = -1; txtC = -1; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { buildFacility(buildSelected); uiState = 0; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Build Cost

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 1.5), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Build Cost: $" + productionTypes[buildSelected][0][1][0]; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Build Time

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 1.1), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Build Time: " + productionTypes[buildSelected][0][1][2] + " years"; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Public Opinion

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.7), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Public Opinion: " + productionTypes[buildSelected][0][1][1] + "%"; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Green

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 3.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.3), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Green: " + productionTypes[buildSelected][0][0][3]; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Operational Cost

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 0.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 1.5), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Operational Cost: $" + productionTypes[buildSelected][0][2][1] + "/h"; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Max. Output

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 0.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 1.1), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Max. Output: "; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Min. Output

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 0.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.7), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Min. Output: "; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Avg. Output

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 0.5), // x pos
          /* 03 */ (height / 2) - (cellSize * 0.3), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { return "Avg. Output: (estimated)"; }, // text
          /* 02 */ 15* uiScale , // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ latoRegular // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Outline

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) - (cellSize * 4), // y pos
          /* 04 */ (cellSize * 12), // width
          /* 05 */ (cellSize * 7), // height
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

      // Production

      [ // /* 01 */ Production Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (cellSize * 6), // x pos
          /* 03 */ (height / 2) + (cellSize * 2), // y pos
          /* 04 */ (cellSize * 12), // width
          /* 05 */ (cellSize * 4), // height
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
          /* 01 */ "D I S T R I B U T I O N", // text
          /* 02 */ 15* uiScale , // text-size
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
    ]
  ]
];
