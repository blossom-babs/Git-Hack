import React from "react";
import { render, cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import axiosMock from "axios";
import Quote from "../components/Quote";

afterEach(cleanup)

it('fetches and displays data', async () => {
   axiosMock.get.mockResolvedValueOnce({data: {
    content: 'What is dead may never die'
   }})

  const { } = render(<Quote />)
})