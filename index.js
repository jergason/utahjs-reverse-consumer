var React = require('react');
var Reverse = require('utahjs-reverse');

React.renderComponent(Reverse({text:'hello utahjs my old friend'}), document.querySelector('.reverse'), null);
