import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./";

configure({ adapter: new Adapter() });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("Should render correctly", () => {
    
    it("to Match Snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it("component is defined", () => {
        expect(wrapper).toHaveLength(1);
    });

});

  


