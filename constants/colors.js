export const colors = () => {
  const modeDark = false;
  
  let color = modeDark ? colorsDark : colorsLight;

  return {
    bg: color.bg,
    bgDark: color.bgDark,
    button: color.button,
    buttonActive: color.buttonActive,
    buttonText: color.buttonText,
    primary: color.primary,
    text: color.text,
    textDark: color.textDark,
    textLight: color.textLight,
    gray: {
      light: color.gray.light,
      regular: color.gray.regular,
      dark: color.gray.darkBlue,
      darkBlue: color.gray.darkBlue,
    },
    blue: {
      light: color.blue.light,
      regularLight: color.blue.regularLight,
      regular: color.blue.regular,
      regularDark: color.blue.regularDark,
      dark: color.blue.dark,
      veryDark: color.blue.veryDark,
    },
  };
};

const colorsLight = {
  bg: "#fff",
  bgDark: "#001233",
  button: "#002855",
  buttonActive: "#0466c8",
  buttonText: "#fff",
  primary: "#fff",
  text: "#023e7d",
  textDark: "#002855",
  textLight: "#fff",
  gray: {
    light: "#979DAC",
    regular: "#7D8597",
    dark: "#5C677D",
    darkBlue: "#33415C",
  },
  blue: {
    light: "#0466c8",
    regularLight: "#0353a4",
    regular: "#023e7d",
    regularDark: "#002855",
    dark: "#001845",
    veryDark: "#001233",
  },
};

const colorsDark = {
  bg: "#191919",
  bgDark: "#000",
  button: "#002855",
  buttonActive: "#0466c8",
  buttonText: "#fff",
  primary: "#191919",
  text: "#fff",
  textDark: "#5c677d",
  textLight: "#979DAC",
  gray: {
    light: "#979DAC",
    regular: "#7D8597",
    dark: "#5C677D",
    darkBlue: "#33415C",
  },
  blue: {
    light: "#0466c8",
    regularLight: "#0353a4",
    regular: "#023e7d",
    regularDark: "#002855",
    dark: "#001845",
    veryDark: "#001233",
  },
};
