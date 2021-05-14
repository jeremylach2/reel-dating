import React from "react";
import { shallow } from "enzyme";
import PowerButton from "../components/UserLoggedStack/MenuScreen";

describe("Test MenuScreen", () => {
    it("Test click event", () => {
        const mockCallBack = jest.fn();

        const button = shallow(<PowerButton onClick={mockCallBack}>Ok!</PowerButton>);
        button.find("button").simulate("click");
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
