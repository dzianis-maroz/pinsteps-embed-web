import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import RouteDataBlock from "../";

configure({ adapter: new Adapter() });

describe("Should render correctly", () => {
  const props = {
    path: "/some/path",
    data: {
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
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RouteDataBlock {...props} />);
  })

  it("to Match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("component is defined", () => {
    expect(wrapper).toHaveLength(1);
  });

});


/*   it("should render correctly after props changing", () => {
    const newProps = {
      path: 'N E W',
      data: {
        title: "N E W",
        picture: { crop_url: "N E W" },
        id: 220,
        person: { facebook_user_id: "N E W", full_name: "N E W" },
      }  
    };
    wrapper.setProps({ newProps });
    expect(wrapper.props().data).toEqual(newProps.data);
  }); */