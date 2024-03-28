
/* 1. Basic Component Creation:
Task: Create a simple React component, such as a button or a text input field.
Requirements: Ensure that the component renders without errors and displays some basic content.
Demonstrate your understanding of JSX syntax and how to define and export functional or class
components in React. */

import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Simple Button</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;



/* 2. State Management:
Task: Create a component that manages its state, such as a counter or a toggle button.
Requirements: Update the component's state based on user interactions, like button clicks or input
changes. Show proficiency in using useState hook or setState method to manage component state.*/


import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


/*3. Conditional Rendering:
Task: Create a component that conditionally renders different content based on its state or props.
Requirements: Display different messages or elements depending on certain conditions.
Demonstrate understanding of conditional rendering techniques using if statements, ternary
operators, or logical && operator.
*/


import React, { useState } from 'react';

const ConditionalComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(prevState => !prevState);
  };

  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      <button onClick={toggleMessage}>Toggle Message</button>
      {/* Conditionally render a message based on the value of showMessage */}
      {showMessage ? (
        <p>This message is shown because showMessage is true.</p>
      ) : (
        <p>Click the button to show the message.</p>
      )}
    </div>
  );
};

export default ConditionalComponent;



/* 4. Forms and Controlled Components:
Task: Build a form using controlled components.
Requirements: Create input fields for various data types (text, number, etc.), and update the
component's state as the user inputs data. Handle form submission and validation.*/

import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation or submit data to backend
    console.log(formData);
  };

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;



/*6. Lifecycle Methods or useEffect Hook:
Task: Create a component that utilizes lifecycle methods or the useEffect hook for managing side
effects.
Requirements: Demonstrate proper initialization, updating, and cleanup procedures. Understand the
purpose of lifecycle methods or the useEffect hook and know when to use them. */


import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]); // Dependency array ensures that the effect runs only when time changes

  return (
    <div>
      <h2>Timer: {time} seconds</h2>
    </div>
  );
};

export default TimerComponent;



/* 7. Routing with React Router:
Task: Create a multi-page( 3 pages ) application using React Router.
Requirements: Implement multiple routes, each rendering different components, and allow
navigation between these routes. Demonstrate understanding of route configuration, nested routes,
and programmatic navigation. */


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


// Home.js
import React from 'react';

const Home = () => {
  return <h2>Home Page</h2>;
};

export default Home;


// About.js
import React from 'react';

const About = () => {
  return <h2>About Page</h2>;
};

export default About;


// Contact.js
import React from 'react';

const Contact = () => {
  return <h2>Contact Page</h2>;
};

export default Contact;



/*8. State Lift-Up and Props Drilling:
Task: Refactor a component hierarchy to lift up state or avoid excessive props drilling.
Requirements: Restructure the components to optimize state management and improve component
reusability. Understand how to pass data between components using props and when to lift state to a
common ancestor component. */


// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Some data');

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChildComponent data={data} />
    </div>
  );
};

export default ChildComponent;

// GrandChildComponent.js
import React from 'react';

const GrandChildComponent = ({ data }) => {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Data: {data}</p>
    </div>
  );
};

export default GrandChildComponent;

// After Refactoring
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Some data');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data={data} onDataChange={handleDataChange} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({ data, onDataChange }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChildComponent data={data} onDataChange={onDataChange} />
    </div>
  );
};

export default ChildComponent;

// GrandChildComponent.js
import React from 'react';

const GrandChildComponent = ({ data, onDataChange }) => {
  const handleDataChange = () => {
    const newData = 'New data'; // Example: you can have some logic here to compute new data
    onDataChange(newData);
  };

  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Data: {data}</p>
      <button onClick={handleDataChange}>Change Data</button>
    </div>
  );
};

export default GrandChildComponent;



/* 9. Context API or Redux Integration:
Task: Integrate either the Context API or Redux for state management in a larger application.
Requirements: Demonstrate understanding of global state management and implement actions,
reducers, and dispatchers accordingly. Set up the chosen state management solution, define actions
and reducers, and connect components to the global state. */


// store.js
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;

// reducers/counterReducer.js
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

// actions/counterActions.js
export const increment = () => {
  return { type: 'INCREMENT' };
};

export const decrement = () => {
  return { type: 'DECREMENT' };
};

// CounterComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



/* 10. Advanced UI and Performance Optimization:
Task: Optimize the performance of a React application by implementing techniques like memoization,
lazy loading, or virtualization.
Requirements: Identify performance bottlenecks and apply appropriate optimizations to improve the
application's responsiveness and efficiency. Demonstrate understanding of React performance
optimization techniques such as memoization with useMemo or useCallback, lazy loading of
components or data, and virtualization for large lists */


import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => expensiveFunction(data), [data]);

  return <div>{processedData}</div>;
};


import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

import React from 'react';
import { FixedSizeList } from 'react-window';

const MyList = ({ data }) => (
  <FixedSizeList
    height={400}
    width={300}
    itemCount={data.length}
    itemSize={50} // Height of each item
  >
    {({ index, style }) => (
      <div style={style}>{data[index]}</div>
    )}
  </FixedSizeList>
);




/* 11. Error Boundary Implementation:
Task: Implement an error boundary component in a React application.
Requirements: Create a component that catches JavaScript errors anywhere in its child component
tree and displays a fallback UI instead of crashing the whole application. Demonstrate understanding
of error boundary concepts and how to use them effectively. */



import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



/* 12. Authentication and Protected Routes:
Task: Create an authentication system with protected routes in a React application.
Requirements: Implement user authentication using JWT tokens or sessions, and create protected
routes that require authentication to access. Show understanding of authentication flow, storing
tokens securely, and redirecting users based on authentication status. */


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;




/* 14. Optimistic UI Updates:
Task: Implement optimistic UI updates in a React application.
Requirements: Design a feature that updates the UI optimistically before receiving confirmation from
the server. Show understanding of handling asynchronous actions, updating UI state optimistically,
and reverting changes if the server request fails. */


import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onAddComment(comment); // Pass the comment text to the parent component
    setComment(''); // Clear the input field
  };

  return (
    <div>
      <textarea value={comment} onChange={handleChange} />
      <button onClick={handleSubmit}>Post Comment</button>
    </div>
  );
};

export default CommentForm;

import React, { useState } from 'react';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(), // Generate a unique ID for the comment
      text,
      author: 'Anonymous', // Assuming comments are posted anonymously
      timestamp: new Date().toISOString() // Record the timestamp of the comment
    };

    // Update the UI optimistically
    setComments([...comments, newComment]);

    // Send the request to the server to save the comment
    saveCommentToServer(newComment)
      .then(() => {
        // Comment saved successfully
        console.log('Comment saved successfully');
      })
      .catch((error) => {
        // Revert the optimistic update if the server request fails
        setComments(comments.filter((comment) => comment.id !== newComment.id));
        console.error('Error saving comment:', error);
      });
  };

  const saveCommentToServer = (comment) => {
    // Simulate server request (replace with actual API call)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success or failure based on some condition (e.g., randomly)
        if (Math.random() >= 0.5) {
          resolve();
        } else {
          reject(new Error('Server error'));
        }
      }, 1000); // Simulate delay
    });
  };

  return (
    <div>
      <h2>Comments</h2>
      <CommentForm onAddComment={handleAddComment} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <p>Posted by {comment.author} at {comment.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;



/* 15. RequirementsCode Splitting and Lazy Loading:
Task: Implement code splitting and lazy loading in a React application.
Requirements: Split the application code into smaller chunks and dynamically load them only when
needed, improving initial page load performance. Show understanding of React.lazy() and Suspense
for lazy loading components, as well as React Router's support for code splitting with dynamic
imports. */


// AsyncComponent.js
import React from 'react';

const AsyncComponent = () => {
  return <div>Async Component</div>;
};

export default AsyncComponent;


// App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
