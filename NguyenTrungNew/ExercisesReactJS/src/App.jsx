import {TodoListComponent as TodoList} from './component'

function App() {
    return <div className='flex flex-col gap-10'>
        <h1 className='text-center text-2xl mt-5'>Demo ReactJS</h1>
        <div>
            <TodoList />
        </div>
    </div>
}

export default App;
