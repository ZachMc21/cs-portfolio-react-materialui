
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
    bodyLeft: React.CSSProperties;
    bodyRight: React.CSSProperties;
    bodyCenter: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    bodyLeft?: React.CSSProperties;
    bodyRight?: React.CSSProperties;
    bodyCenter?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    bodyLeft: true;
    bodyRight: true;
    bodyCenter: true;
  }
}