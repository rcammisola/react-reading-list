# React Reading List
Reading List is an attempt to build a toy application using [React](https://facebook.github.io/react/). It's basically a variation on the [todoMVC application](http://todomvc.com/), without looking at that codebase. It's a re-invention of the wheel in quite a few places but that is intentional and for learning purposes.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## TODO
1. Split out components and attempt to generalise in order to create a generic sortable-draggable-list component thing.
2. Item states (reading/completed/read books).

## How I got here
Here are a few resources that I used to get a basic grasp of how to use React, before attempting something on my own.

[Ken Wheeler's article for getting started and basic concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) on scotch.io was the first thing I read. It's really well set out and the examples were a great way to get to grips with what JSX is, what a component is, how to use properties and state and some basics on segmenting responsibilities using components. There wasn't a lot in here about the mounting/update lifecycle but I didn't feel that was necessary at this stage.

I also completed the CodeAcademy courses on React 101. These were thorough but quite long, and the solution parser seemed painfully slow whenever you were trying to whizz through some basic examples. This covered the app lifecycle quite well.
https://www.codecademy.com/learn/react-101

The [React tutorial](https://facebook.github.io/react/docs/tutorial.html) is fantastic, I would highly recommend this if you want to just try it out in an hour and then start coding something real.

To work out the drag and drop feature of the reading list, I followed this guide by Daniel Stocks on [Sortable List components](http://webcloud.se/sortable-list-component-react-js/).
