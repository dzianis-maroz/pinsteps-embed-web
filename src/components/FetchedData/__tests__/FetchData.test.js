import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FetchData from '..';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Should correct fetch data', () => {
  it("renders fetched data", async () => {
    const mockedFetchedData = {
      title: "text",
      picture: { crop_url: "link" },
      id: 220,
      person: { facebook_user_id: "facebook user id", full_name: "full name" },
      distance: 55800,
      duration: 289,
      rating: 2,
      is_payable: false,
      localities: [],
      countries: [],
      milestones: [],
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedFetchedData)
      })
    );
  
    await act(async () => {
      render(<FetchData />, container);
    });
  
    expect(container.textContent).toContain(mockedFetchedData.title);
  
    global.fetch.mockRestore();
  });
});




















/* global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        mockedFetchedData: {
            title: "text",
            picture: { crop_url: "link" },
            id: 220,
            person: { facebook_user_id: "facebook user id", full_name: "full name" },
            distance: 55800,
            duration: 289,
            rating: 2,
            is_payable: false,
            localities: [],
            countries: [],
            milestones: [],
        },
    })
}));

describe('FetchData', () => {
    it('should return react-component with correct props', async () => {
        await act(async () => render(<FetchData />));
        expect(RouteDataBlock).toHaveBeenCalledWith(mockedFetchedData);
    })

}); */

