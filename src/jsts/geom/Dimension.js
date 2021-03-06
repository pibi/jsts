/* Copyright (c) 2011 by The Authors.
 * Published under the LGPL 2.1 license.
 * See /license-notice.txt for the full text of the license notice.
 * See /license.txt for the full text of the license.
 */



/**
 * Provides constants representing the dimensions of a point, a curve and a
 * surface. Also provides constants representing the dimensions of the empty
 * geometry and non-empty geometries, and the wildcard constant
 * {@link #DONTCARE} meaning "any dimension". These constants are used as the
 * entries in {@link IntersectionMatrix}s.
 *
 * @constructor
 */
jsts.geom.Dimension = function() {
};


/**
 * Dimension value of a point (0).
 *
 * @type {int}
 */
jsts.geom.Dimension.P = 0;


/**
 * Dimension value of a curve (1).
 *
 * @type {int}
 */
jsts.geom.Dimension.L = 1;


/**
 * Dimension value of a surface (2).
 *
 * @type {int}
 */
jsts.geom.Dimension.A = 2;


/**
 * Dimension value of the empty geometry (-1).
 *
 * @type {int}
 */
jsts.geom.Dimension.FALSE = -1;


/**
 * Dimension value of non-empty geometries (= {P, L, A}).
 *
 * @type {int}
 */
jsts.geom.Dimension.TRUE = -2;


/**
 * Dimension value for any dimension (= {FALSE, TRUE}).
 *
 * @type {int}
 */
jsts.geom.Dimension.DONTCARE = -3;


/**
 * Converts the dimension value to a dimension symbol, for example,
 * <code>TRUE => 'T'</code> .
 *
 * @param {int}
 *          dimensionValue a number that can be stored in the
 *          <code>IntersectionMatrix</code> . Possible values are
 *          <code>{TRUE, FALSE, DONTCARE, 0, 1, 2}</code>.
 * @return {String} a character for use in the string representation of an
 *         <code>IntersectionMatrix</code>. Possible values are
 *         <code>{T, F, * , 0, 1, 2}</code> .
 */
jsts.geom.Dimension.toDimensionSymbol = function(dimensionValue) {
  switch (dimensionValue) {
    case FALSE:
      return 'F';
    case TRUE:
      return 'T';
    case DONTCARE:
      return '*';
    case P:
      return '0';
    case L:
      return '1';
    case A:
      return '2';
  }
  throw new jsts.IllegalArgumentError('Unknown dimension value: ' +
      dimensionValue);
};


/**
 * Converts the dimension symbol to a dimension value, for example,
 * <code>'*' => DONTCARE</code> .
 *
 * @param {string}
 *          dimensionSymbol a character for use in the string representation of
 *          an <code>IntersectionMatrix</code>. Possible values are
 *          <code>{T, F, * , 0, 1, 2}</code> .
 * @return {int} a number that can be stored in the
 *         <code>IntersectionMatrix</code> . Possible values are
 *         <code>{TRUE, FALSE, DONTCARE, 0, 1, 2}</code>.
 */
jsts.geom.Dimension.toDimensionValue = function(dimensionSymbol) {
  switch (dimensionSymbol.toUpperCase()) {
    case 'F':
      return jsts.geom.Dimension.FALSE;
    case 'T':
      return jsts.geom.Dimension.TRUE;
    case '*':
      return jsts.geom.Dimension.DONTCARE;
    case '0':
      return jsts.geom.Dimension.P;
    case '1':
      return jsts.geom.Dimension.L;
    case '2':
      return jsts.geom.Dimension.A;
  }
  throw new jsts.error.IllegalArgumentError('Unknown dimension symbol: ' +
      dimensionSymbol);
};
