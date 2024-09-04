import noProjectsImage from "../Assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({onStartAddProject}) {

    return (
        <div className=" mt-16 text-center w-2/3">
            <img src={noProjectsImage} alt="an empty task list"  className ="w-16 h-16 object-contain mx-auto"/>
        <h2 className ="text-stone-500 text-xl font-bold my-4">No Project Selected</h2>
        <p classname= "text-stone-400 mb-4">Select a project or get start with a new one</p>
          <p className="mt-8"><Button onClick={onStartAddProject}>create new project</Button></p>  
        </div>
       
    )
}