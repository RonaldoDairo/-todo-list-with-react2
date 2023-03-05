import React,{useState} from "react";

//create your first component
const Home = () => {
		const [inputValue, setInputValue] = useState("");
		const [todos , setTodos] = useState([]);
		console.log(inputValue)
		//add into array => concat
		//Delete from array -> filter
		// Update -> map
			const minLength =3
	return (
		<div className="container">
			<h1 className="titulo">Todos</h1>
			<div className="conten">
			<ul className="lista">
				<li>
					<input 
					
					type="text" 
					onChange={(e)=> setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e)=>{
					   if(e.key === "Enter"  && inputValue.length >= minLength){
							setTodos(todos.concat([inputValue]));
							setInputValue([]);
							
					   }
					}}
					placeholder="What you needs to be done?"
									
					/>
					
				</li>
				{todos.map((item,index)=>(
				<ul className="printul">	<li className="print">
					{item}{""}
						<i
						class ="fas fa-trash-alt fa"
						onClick={()=>
							setTodos(
								todos.filter (
									(t,currentIndex) =>
										index != currentIndex
								)
							)
						}></i>	
				</li></ul>
			))}
			<div className="conteo"> {todos.length}item left </div>
			</ul>
			
			
			</div>
		</div>
	);
};

export default Home;
