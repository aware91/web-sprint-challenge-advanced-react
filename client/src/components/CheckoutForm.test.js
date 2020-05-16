import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    getByText(/checkout form/i)
});

test("form shows success message on submit with form details", async () => {
    const { getByTestId } = render(<CheckoutForm />);
    const expectedFirstName = "Anthony";
    const expectedLastName = "Ware";
    const expectedAddress = "123 Road Rd";
    const expectedCity = "Joplin";
    const expectedState = "MO";
    const expectedZip = "64834";
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const address = getByTestId('address');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const zip = getByTestId('zip');
    const checkout = getByTestId('successMessage')
    fireEvent.change(firstName, {target: {value: 'Anthony'}});
    fireEvent.change(lastName, {target: {value: 'Ware'}});
    fireEvent.change(address, {target: {value: '123 Road Rd'}});
    fireEvent.change(city, {target: {value: 'Joplin'}});
    fireEvent.change(state, {target: {value: 'MO'}});
    fireEvent.change(zip, {target: {value: '64834'}});
    fireEvent.click(checkout)
    expect(firstName.value).toBe(expectedFirstName);
    expect(lastName.value).toBe(expectedLastName);
    expect(address.value).toBe(expectedAddress);
    expect(city.value).toBe(expectedCity);
    expect(state.value).toBe(expectedState);
    expect(zip.value).toBe(expectedZip);
});
