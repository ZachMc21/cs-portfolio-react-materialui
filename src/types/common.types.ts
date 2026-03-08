import type React from "react";

declare namespace JSX {
  interface IntrinsicAttributes {
    'UnderConstruction': {
      pageName: String;
    };
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
    cs_subtitle: React.CSSProperties;
    h1: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    cs_subtitle?: React.CSSProperties;
    h1?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
    cs_subtitle: true;
    h1: true;
  }
}