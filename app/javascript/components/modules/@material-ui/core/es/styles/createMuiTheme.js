import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

import isPlainObject from 'is-plain-object';
import warning from 'warning';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
import spacing from './spacing';
import transitions from './transitions';
import zIndex from './zIndex';

function createMuiTheme(options = {}) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    shadows: shadowsInput,
    typography: typographyInput = {}
  } = options,
        other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "shadows", "typography"]);

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);

  const muiTheme = _objectSpread({
    breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette,
    props: {},
    // Inject custom properties
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput)
  }, deepmerge({
    shape,
    spacing,
    transitions,
    zIndex
  }, other, {
    isMergeableObject: isPlainObject
  }));

  process.env.NODE_ENV !== "production" ? warning(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;
  return muiTheme;
}

export default createMuiTheme;