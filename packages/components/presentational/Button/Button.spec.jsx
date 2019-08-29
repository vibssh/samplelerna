/* Component 	: Button Test
 * Created on	: 29/8/2019 7:35:26 PM
 * Created by	: VAIBHAV SHRINGARPURE
 */

 import Button from '.'

 describe('<Button />', () => {
   it('should render without error', () => {
     let wrapper;
     const props = {
      className: 'new-class', 
      clickHandler: jest.fn()
     };
     beforeAll(() => {
       wrapper = shallow(<Button> {...props}Hello</Button>);
     })
     expect(wrapper).toBe(true);
   })
 })