import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import Form from './components/react-hook-form/Form';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('React Hooks 연습중!!!');
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={Math.ceil(Math.random() * 10)} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
    </div>
  );
}

export default App;
