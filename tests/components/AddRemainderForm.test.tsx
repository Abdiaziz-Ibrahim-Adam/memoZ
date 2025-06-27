import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import addReminderForm from "../../components/forms/AddRemainderForm";
import { target, value } from "happy-dom/lib/PropertySymbol.js";
describe ('AddRemainderForm', () => {
    it ('Låter användaren skriva in text och trycka på lägg till', () => {
        const mockSubmit = vi.fn;
        render(<addReminderForm onSubmit={mockSubmit} />);
        
        const input = screen.getByPlaceholderText('Vad vill du bli påmmind om?');
        const button = screen.getByText('Lägg till');

       fireEvent.change(input, { target: { value: 'ta medicin' } });

        fireEvent.click(button);

        expect(mockSubmit).toHaveBeenCalledWith('ta medicin');
    });
});
