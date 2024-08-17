import { useState } from 'react'
import './textgen.css'
const TextGen =()=>{
    // hooks
    let [getnumber,setnumber]=useState(0)
    let [pars,setparas]=useState('')
    let [word,setword]=useState([])
    let [selected,setselected]=useState()
    let [selectedworp ,setselectedworp]=useState()
    // paragraph text and word text
    let paragraphs ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut quasi cum quis iste libero quod aliquam animi minima, vel asperiores, tempore nisi culpa omnis voluptates autem ea atque doloribus.'
    let paragraphstag ='<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut quasi cum quis iste libero quod aliquam animi minima, vel asperiores, tempore nisi culpa omnis voluptates autem ea atque doloribus.</p>'

    let words = paragraphs.split(' ')    
    // get the number of word or paragraph
    const getnumberHandler =(e)=>{
        setnumber(e.target.value)
    }
    // geerate button
    const generatHandler=()=>{
        let myword =[]
        if(selectedworp =='word'){
            for (let k =0; k <getnumber; k++){
                // setword((words[k]))
                myword.push(words[k]+' ')
            }
            setword(myword)
        }
        else{
            {selected=='yes' ?setparas(paragraphstag.repeat(getnumber)):setparas(paragraphs.repeat(getnumber))}
        }
        
    }
    // inclueds or excludes html tags
    const selectTagHandler =(e)=>{
        setselected(e.target.value)
    }
    // selecting word or paragraph
    const selectWorPHandler =(e)=>{
        setselectedworp(e.target.value)
    }
    return(
        <>
        {/* container of text generator */}
        <div className="container">
        <h1>React text generator</h1>
            <div className="paragraphNum">
            {/* choose word or paragraph part */}
              <div className="choosepart">
                <label htmlFor="">Choose which one ?</label>
                <select onClick={selectWorPHandler}>
                    <option value="word">-------</option>
                    <option value="word">word</option>
                    <option value="paragraph">paragraph</option>
                </select>
              </div>
              <hr />
              <hr />
              {/* number or paragraph or word */}
              <div className='topbar'>
                  <div>
                    <label htmlFor="">Enter the number of {selectedworp}</label>
                    <hr />
                    <input min={0}  onChange={getnumberHandler} type="number"  placeholder={`Numbers ${selectedworp}??`}/>
                  </div>
                  <div>
                    <label htmlFor="">Includes Html Tag or No</label>
                    <br />
                    <hr />
                        <select onClick={selectTagHandler}>
                            <option value="---">--------</option>
                            <option  value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                  </div>
                  <div>
                        <button onClick={generatHandler}>Generete</button>
                  </div>
                 
               </div>
               {/* display of word or parapraph */}
                <div className="paragraphText">
                <h1>text will appear here!</h1>
                    {selectedworp =='word'? word : pars}
                </div>
            </div>
        </div>
        </>
    )
}

export default TextGen