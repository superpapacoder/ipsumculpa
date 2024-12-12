s.invertRange = s.invert
    ? invertRange(s)           // If s.invert is truthy, call invertRange(s)
    : s.invertExtent           // Otherwise, check if s.invertExtent is defined
        ? invertRangeExtent(s) // If s.invertExtent is defined, call invertRangeExtent(s)
        : undefined;           // Otherwise, set s.invertRange to undefined
