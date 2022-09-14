import mq from "../mq";

describe("mq", () => {
  it("returns object of methods", () => {
    expect(mq).toMatchSnapshot();
  });

  describe("mq.from -> should return media query with only min-width", () => {
    it("", () => {
      expect(mq.from("xl")).toMatchInlineSnapshot(`"@media (min-width: 1440px)"`);
    });
  });

  it("mq.to -> should return media with max-width", () => {
    expect(mq.to("sm")).toMatchInlineSnapshot(`"@media (max-width: 425px)"`);
  });

  it("mq.between -> should return media with max-width and min-width", () => {
    expect(mq.between("sm", "xl")).toMatchInlineSnapshot(`"@media (min-width: 425px) and (max-width: 1440px)"`);
  });

  it("mq.between -> should throw an error when min-width is greater than max-width", () => {
    expect(() => mq.between("xl", "sm")).toThrow();
  });

  it("should return media query with min-width and additional conditions", () => {
    expect(
      mq.from("xl", {
        mediaType: "print",
        prefersColorScheme: "light",
      })
    ).toMatchInlineSnapshot(`"@media print and (min-width: 1440px) and (prefers-color-scheme: light)"`);
  });
});
