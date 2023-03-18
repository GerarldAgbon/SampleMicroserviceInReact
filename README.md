# Simple Microservice for ReactJS using fetchAPI
In this React component, two state variables - name and username - are defined. When the component is initially rendered, it utilizes the useEffect hook to call the /username microservice with the default name "Type your name". Once the microservice returns a response, the component updates the username state with the text received.

Additionally, the component features an input field where the user can enter their name. As the user changes the value in the input field, the component updates the name state. As a result, the useEffect hook is triggered again and the /username microservice is called with the updated name.
