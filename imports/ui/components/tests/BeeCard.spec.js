import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ReactShallowRenderer from "react-test-renderer/shallow";

import BeeCard from "../BeeCard";

import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

describe("BeeCard", () => {
  let instance;
  let cardImg, cardBlock;
  let cardTitle, cardSubtitle, deleteButton;
  const renderer = new ReactShallowRenderer();

  let bee = { _id: "asdf1234", name: "test bee", type: "test type" };
  let removeBee = jest.fn();

  describe("when bee is a worker", () => {
    beforeEach(() => {
      renderer.render(<BeeCard bee={bee} removeBee={removeBee} />);
      instance = renderer.getRenderOutput();

      [cardImg, cardBlock] = instance.props.children;
      [cardTitle, cardSubtitle, deleteButton] = cardBlock.props.children;
    });

    it("checks rendering of Bee Card", () => {
      const { type, props: { children } } = instance;
      expect(type).toBe(Card);
      expect(children.length).toBe(2);
    });

    it("checks rendering of CardImg", () => {
      const { type, props: { src, alt } } = cardImg;
      expect(type).toBe(CardImg);
      expect(src).toBe(`./images/bees/${bee.type.toLowerCase()}.jpg`);
      expect(alt).toBe(`${bee.type} Bee`);
    });

    it("checks rendering of CardBlock", () => {
      const { type, props: { children } } = cardBlock;
      expect(type).toBe(CardBlock);
      expect(children.length).toBe(3);
    });

    it("checks rendering of CardTitle", () => {
      const { type, props: { children } } = cardTitle;
      expect(type).toBe(CardTitle);
      expect(children).toBe(bee.name);
    });

    it("checks rendering of CardSubtitle", () => {
      const { type, props: { children } } = cardSubtitle;
      expect(type).toBe(CardSubtitle);
      expect(children).toBe(bee.type);
    });

    it("checks rendering of Button", () => {
      const { type, props: { color, children } } = deleteButton;
      expect(type).toBe(Button);
      expect(color).toBe("danger");
      expect(children).toBe("Delete");
    });

    it("checks to see if the deleteButton calls removeBee", () => {
      deleteButton.props.onClick();
      expect(removeBee).toHaveBeenCalled();
    });
  });
});
