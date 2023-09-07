import './App.css';

function App() {
  return (
    <section className='container'>
        <h1>TodoList App</h1>
        <form className='form-group'>
          <input type='text' className='text-input'/>
          <button type='submit' className='submit-btn'>เพื่มข้อมูล</button>
        </form>
    </section>
  );
}

export default App;
