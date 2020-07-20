const colors = {
  lightest: "#8080c3",
  light: "#4d4d75",
  main: "#2c2c43",
  dark: "#151520",
  type: {
    normal: "#bcbd9c",
    fire: "#fe9141",
    water: "#5d8afe",
    electric: "#feeb4c",
    grass: "#66da52",
    ice: "#c5f7f8",
    fighting: "#ed392f",
    poison: "#c343c1",
    ground: "#e3d1a2",
    flying: "#bcbefe",
    psychic: "#fe5387",
    bug: "#b2c12f",
    rock: "#a49248",
    ghost: "#705898",
    dragon: "#8353fd",
    dark: "#32302c",
    steel: "#bdbed2",
    fairy: "#f8b6e2"
  }
};

export default {
  colors: {
    main: "#2c2c43",
    light: "#4d4d75",
    lightest: "#8080c3",
    medium: "#232338",
    dark: "#151520",
    accent: colors.type.dragon,
    interact: colors.type.psychic,
    attention: colors.lightest,
    success: colors.type.grass,
    error: colors.type.fighting,
    disabled: colors.type.steel,
    text: 'white'
  },
  colour: {
    main: "#2c2c43",
    light: "#4d4d75",
    lightest: "#8080c3",
    medium: "#232338",
    dark: "#151520",
    accent: colors.type.dragon,
    interact: colors.type.psychic,
    success: colors.type.grass,
    error: colors.type.fighting,
    disabled: colors.type.steel,
    type: {
      normal: "#bcbd9c",
      fire: "#fe9141",
      water: "#5d8afe",
      electric: "#feeb4c",
      grass: "#66da52",
      ice: "#c5f7f8",
      fighting: "#ed392f",
      poison: "#c343c1",
      ground: "#e3d1a2",
      flying: "#bcbefe",
      psychic: "#fe5387",
      bug: "#b2c12f",
      rock: "#a49248",
      ghost: "#705898",
      dragon: "#8353fd",
      dark: "#32302c",
      steel: "#bdbed2",
      fairy: "#f8b6e2"
    }
  },
  fontSize: {
    root: [16, 16, 16, 16],
    large: "2.5rem",
    medium: "2rem",
    small: "1.5rem",
    text: "1rem",
    massive: [80, 90, 110, 120],
    heading: {
      large: "2.5rem",
      medium: "2rem",
      small: "1.5rem",
      smaller: [16, 17, 18, 19],
      tiny: [],
      tinier: []
    }
  },
  fontSizes: {
    root: "16px",
    h1: {
      standard: "1.8rem",
      tablet: "2rem",
      desktop: "2.5rem"
    },
    h2: {
      standard: "1.6rem",
      tablet: "1.8rem",
      desktop: "2rem"
    },
    h3: {
      standard: "1.2rem",
      tablet: "1.35rem",
      desktop: "1.5rem"
    }
  },
  borderRadius: "3px",
  space: {
    old: {
      inputMatch: [31, 38, 46, 55],
      massive: [30, 40, 68, 80],
      larger: [20, 30, 50, 60],
      large: [18, 22, 24, 26],
      medium: [15, 17, 19, 21],
      small: [12, 14, 16, 18],
      smaller: [10, 12, 14, 16],
      tiny: ["8px", "10px", 12, 14],
      tinier: ["4px", "5px", "7px", "8px"],
      tiniest: ["3px", "4px", "5px", "6px"]
    },
    layer: {
      0: "8rem",
      1: "6rem",
      2: "4rem",
      3: "2rem",
      4: "1rem",
      5: "0.5rem"
    }
  },
  spaces: {
    massive: "8rem",
    huge: "6rem",
    large: "4rem",
    medium: "2rem",
    small: "1rem",
    tiny: "0.5rem",
    layers: {
      0: "8rem",
      1: "6rem",
      2: "4rem",
      3: "2rem",
      4: "1rem",
      5: "0.5rem"
    },
    sides: {
      standard: "1rem",
      tablet: "2rem",
      desktop: "4rem"
    },
    between: {
      sections: "8rem",
      groups: "4rem",
      subgroups: "2rem",
      items: "1rem"
    }
  },
  portrait: {
    outline: "#4d4d75"
  },
  breakpoints: {
    wide: "1440px",
    desktop: "1024px",
    tablet: "768px",
    mobileLandscape: "480px",
    mobile: "320px"
  },
  width: {
    popup: [
      "calc(100% - 40px)",
      "calc(100% - 60px)",
      "calc(100% - 100px)",
      "calc(100% - 120px)"
    ],
    raid: [110, 130, 150, 170],
    max: "800px"
  },
  maxWidths: {
    standard: "100%",
    mobile: "calc(320px - 2rem)",
    tablet: "calc(768px - 4rem)",
    desktop: "calc(1024px - 8rem)"
  },
  shadow: {
    low: "0 0 10px #0009",
    high: "0 0 50px #000f",
    mapItem: "0 0.15rem 0 #0005",
    mapControl: "0 1px 2px #0005",
    popup: "0 1px 6px #0005"
  },
  shadows: {
    low: "0 0 10px #0009",
    high: "0 0 50px #000f",
    map: {
      item: "0 0.15rem 0 #0005",
      control: "0 1px 2px #0007"
    },
    popup: "0 1px 6px #0005"
  },
  transition: {
    in: "cubic-bezier(0,1,0.5,1)",
    out: "cubic-bezier(0.5,0,1,0.5)"
  },
  heights: {
    map: "calc(90vh - 80px)"
  },
  sizes: {
    mapGymPhoto: {
      standard: "1.6rem",
      mobile: "1.8rem",
      tablet: "2rem",
      desktop: "2.2rem"
    }
  },
  maxHeights: {
    popup: {
      standard: "calc(100vh - 2rem)",
      tablet: "calc(100vh - 4rem)",
      desktop: "calc(100vh - 8rem)"
    }
  }
};
