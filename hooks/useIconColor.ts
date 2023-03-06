const colorsMap = new Map<string, string>();

colorsMap.set("javascript", "rgb(247, 223, 30)");
colorsMap.set("react", "rgb(97, 218, 251)");
colorsMap.set("html", "rgb(227, 79, 38)");
colorsMap.set("css", "rgb(21, 114, 182)");
colorsMap.set("sass", "rgb(204, 102, 153)");
colorsMap.set("framer", "rgb(0, 85, 255)");
colorsMap.set("redux", "rgb(118, 74, 188)");
colorsMap.set("react-router", "rgb(202, 66, 69)");
colorsMap.set("node", "rgb(51, 153, 51)");
colorsMap.set("typescript", "rgb(49, 120, 198)");
colorsMap.set("nextjs", "rgb(0, 0, 0)");
colorsMap.set("vue", "rgb(79, 192, 141)");
colorsMap.set("mongo", "rgb(71, 162, 72)");
colorsMap.set("csharp", "rgb(35, 145, 32)");
colorsMap.set("docker", "rgb(36, 150, 237)");
colorsMap.set("mysql", "rgb(68, 121, 161)");
colorsMap.set("nestjs", "rgb(224, 35, 78)");
colorsMap.set("prisma", "rgb(45, 55, 72)");
colorsMap.set("styled-components", "rgb(219, 112, 147)");

const useIconColor = () => {
  const getColor = (type: string): string => {
    const color = colorsMap.get(type);

    if (!color) throw Error("No color find");
    return color;
  };

  return getColor;
};

export default useIconColor;
