import { should } from "chai";
import { before } from "mocha";
import { browser, by, element } from "protractor";

should();

const url: string = "https://e2e-boilerplate.github.io/sandbox/";

describe("Sandbox", () => {
  before(() => {
    browser.get(url);
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    title.should.eql("Sandbox");

    const header = await element(by.css("h1")).getText();
    header.should.eql("Sandbox");
  });
}).timeout(5000);
