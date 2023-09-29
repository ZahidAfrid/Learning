import React,{useState} from 'react'

export default function TextNote(props) {

    const clickUppercase = ()=>{
        console.log('UpperCase is Clicked' + text);
        let upperTaxt = text.toUpperCase();
       setText(upperTaxt )
       props.showAlert('Converted to Upper case!', 'success')
    }


    const clicklowercase = ()=>{
        console.log('UpperCase is Clicked' + text);
        let upperTaxt = text.toLowerCase();
       setText(upperTaxt )
       props.showAlert('Converted to Lower case!', 'success')
    }


    const capitalizeFirstLetter = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
      
    };


    const afterPeriodCapitalization = ()=>{
        console.log('After period UpperCase is Clicked' + text);
        let modifiedText = text.replace(/\. *./g, match => match.toUpperCase());
        let eachTypemodification = capitalizeFirstLetter(modifiedText);
        setText(eachTypemodification)
        props.showAlert('Converted Each first letter to upper cas!', 'success')
    }

  

    // const firstCapitalization = (str)=>{
    //     console.log('After period UpperCase is Clicked' + text);
    //    return str.charAt(0).toUpperCase() + str.slice(1);
       
    // }

    const typChange = (event) =>{
        console.log("The change is made");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // setText("Enter New Text");
  return (
   <>
  
    <div className="container-fluid  ">
        <h1>{props.Heading}</h1>
        <h1>{text.split(" ").length} Words and {text.length} charcters</h1>
  <div className="mb-3">    
  <textarea className={`form-control text-${props.mode === 'light'?'black':'white'}`} rows="8" value={text} onChange={typChange} style={{backgroundColor: props.mode === 'light'?'#ffffff':'#2b2f32'}} id="exampleFormControlTextarea1"></textarea>

</div>

<button className="btn btn-primary  mx-2"onClick={clickUppercase}>Conver to UPPER CASE</button>
<button className="btn btn-primary mx-2"onClick={clicklowercase}>Conver to LOWER CASE</button>
<button className="btn btn-primary my-2 "onClick={afterPeriodCapitalization}>Each First Letter CApital</button>

 </div>

<div className="container">
  <h1>Text Sumarry</h1>
    <p>{text.split(" ").length} Words and {text.length} charcters</p>
    <p>{0.08 * text.split(" ").length}Minutes Read</p>
    <h2>Preview</h2>
  <p>{text.length>0?text:'Enter the text to previve'}</p>
 </div>
 </>
  )
}
