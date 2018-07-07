import {Greetings} from './greetings';

const greetings = new Greetings();
greetings.morning();

import(/* webpackChunkName: "hello" */ './hello_world')
  .then(module => {
    const hello = new module.HelloWorld();
    hello.say();
  });
