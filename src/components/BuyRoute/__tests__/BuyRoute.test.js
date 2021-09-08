import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import BuyRoute from "../";

configure({ adapter: new Adapter() });

describe("Should render correctly", () => {
  const props = {
        match: {
            params: {
                id: 140,
            },
        },
    };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuyRoute {...props} />);
  })

  it("to Match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component is defined", () => {
    console.log(wrapper.props())
    expect(wrapper).toHaveLength(1);
  });

});
