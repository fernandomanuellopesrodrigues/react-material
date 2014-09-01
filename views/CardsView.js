/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactStyle = require('react-style');

var Cards = require('../components/CardCollection');
var Card = require('../components/Card');

var Button = require('../components/Button');
var Checkbox = require('../components/CheckBox');
var ProgressBar = require('../components/ProgressBar');

var CardsView = React.createClass({

  normalStyle: ReactStyle(function(){
    return {
      margin: '0 auto',
      width: '300px'
    };
  }),

  render: function() {
    return <div styles={this.normalStyle()}>
      <Cards>
        <Card>
          <h2>
            Bla bla bla bla
          </h2>
        </Card>
        <Card title="Basic components">
          <Button>A simple button</Button>
          <Button raised={true} styles={[{backgroundColor:'#3f51b5', color: 'white'}]}>
            Raised button
          </Button>
          <div>
            <Checkbox />
          </div>
        </Card>
        <Card title="Text fields  and dialogs">
          ...
        </Card>
        <Card title="Progress and sliders">
          <ProgressBar percentage={70} />
        </Card>
        <Card title="Tabs">

        </Card>
        <Card>

        </Card>
      </Cards>
    </div>;
  }

});

module.exports = CardsView;