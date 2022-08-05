import mq from "./mq";
import { Breakpoint } from "./types/breakpoints";

it("should", () => {
  expect(mq.from(Breakpoint.xl)).toMatchInlineSnapshot(`"@media (min-width: 1440px)"`);
});

it("should options", () => {
  expect(
    mq.from(Breakpoint.xl, {
      orientation: "landscape",
    })
  ).toMatchInlineSnapshot(`"@media (orientation: landscape) and (min-width: 1440px)"`);
});

it("should options media", () => {
  expect(
    mq.from(Breakpoint.xl, {
      mediaType: "screen",
    })
  ).toMatchInlineSnapshot(`"@media screen and (min-width: 1440px)"`);
});
