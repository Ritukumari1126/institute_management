import { useState } from "react";

function AddCourses(){
    const [courseName,setCourseName] = useState('');
    const [price,setPrice] = useState('');
    const [discount,setDiscount] = useState('');
    const [description,setDescription] = useState('');
    const [courseaddedby,setCourseaddedby] = useState('');
    const [imageUrl,setImageUrl] = useState(null);
    const [thumbnail,setThumbnail] = useState(null);

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(courseName,price,discount)
    }

    const fileHandler = (e)=>{
        console.log(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]))
        setThumbnail(e.target.files[0])
    }

    return(
        <div>
            <div className="add-courses">
                <h2>Add New Courses</h2>
                <form >
                    <input onChange={(e)=>{setCourseName(e.target.value)}} required placeholder="Course Name"/>
                    <input onChange={(e)=>(setPrice(e.target.value))} required placeholder="Price"/>
                    <input onChange={(e)=>{setDiscount(e.target.value)}} required placeholder="Discount %"/>
                    <input onChange={(e)=>{setDescription(e.target.value)}} required placeholder="Description"/>
                    <input onChange={(e)=>{setCourseaddedby(e.target.value)}} required placeholder="Course Added by"/>
                    <input  style = {{display:'none'}}id="thumbnail" onChange={fileHandler} type="file"/>
                    <div className="upload-profile">
                    
                    <button onClick={()=>{document.getElementById("thumbnail").click()}} className="upload-thumbnail-pic">Upload Thumbnail</button>
                    {imageUrl == null?<img alt='profile pic' src={require('../assets/profile.png')}/>
                    :<img alt='profile pic' src={imageUrl}/>}
                    </div>
                    
                    <button type="subit" onChange={submitHandler} className="submit-btn">Submit</button>
                
                </form>
            
            </div>
        </div>
    )
}

export default AddCourses;