
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
    h1: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    h1?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    h1: true;
  }
}