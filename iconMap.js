export const ICON_MAP = new Map()


addMapping([0, 1], "sun")
addMapping([2], "cloud-sun")
addMapping([3], "cloud")
addMapping([45, 48], "smog")
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloudy-showers-rainy")
addMapping([71, 73, 75, 77, 85, 86], "snowflake")
addMapping([95, 96, 99], "cloud-bolt")


function addMapping(values, icon) {
  values.forEach(values => {
    ICON_MAP.set(values, icon)
  });
}
