/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

var BLANK = 0,
  HUMAN = 1,
  PROGRAM = -1,
  PAWN = 1,
  KNIGHT = 2,
  BISHOP = 3,
  ROOK = 4,
  QUEEN = 5,
  KING = 9;

function ChessPosition () {
  var i, sb, board = []; // 120
  function toString() {
    sb = "[";
    for (i = 22; i < 100; i += 1) {
      sb += board[i] + ",";
    }
    sb.append("]");
    return sb.toString();
  }
  return {board: board, toString: toString};
}
