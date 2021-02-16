import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status='this status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('this status');
    });

    test("After creation <span> should be display with correct status", () => {
        const component = create(<ProfileStatus status='this status' />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.length).toBe(1);
    });

    test("After creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status='this status' />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test("After creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status='this status' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test("<input> should be dispalyed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status='this status' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('this status');

    });
});