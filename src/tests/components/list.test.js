import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import List from '../../app/components/list';

describe('List', () => {
  it('Should exist', () => {
    expect(List).toExist();
  });

  describe('handleOrderUp', () => {
    it('Should order descending the list of hotels', (done) => {
      let actual = [{
        "name": "hoteltwo",
        "stars": "1",
        "facilities": ["car park", "gym"]
      },{
        "name": "hotelone",
        "stars": "2",
        "facilities": ["car park", "pool"]
      }];

      let list = TestUtils.renderIntoDocument(<List />);

      list.setState({
        hotels : [{
          "name": "hotelone",
          "stars": "2",
          "facilities": ["car park", "pool"]
        },{
          "name": "hoteltwo",
          "stars": "1",
          "facilities": ["car park", "gym"]
        }]
      });
      list.handleOrderUp();

      expect(list.state.hotels).toEqual(actual);
      expect(list.state.orderUp).toBe(true);
      done();
    });
  });

  describe('handleOrderDown', () => {
    it('Should order ascending the list of hotels', (done) => {
      let actual = [{
        "name": "hoteltwo",
        "stars": "2",
        "facilities": ["car park", "gym"]
      },{
        "name": "hotelone",
        "stars": "1",
        "facilities": ["car park", "pool"]
      }];

      let list = TestUtils.renderIntoDocument(<List />);

      list.setState({
        hotels : [{
          "name": "hotelone",
          "stars": "1",
          "facilities": ["car park", "pool"]
        },{
          "name": "hoteltwo",
          "stars": "2",
          "facilities": ["car park", "gym"]
        }]
      });
      list.handleOrderDown();

      expect(list.state.hotels).toEqual(actual);
      expect(list.state.orderDown).toBe(true);
      done();
    });
  });

  describe('filter', () => {
    it('Should change filter state', (done) => {
      let e = {
        target:{
          value:"hello"
        }
      }
      let list = TestUtils.renderIntoDocument(<List />);
      list.filter(e);

      expect(list.state.filter).toEqual("hello");
      done();
    });
  });
});
