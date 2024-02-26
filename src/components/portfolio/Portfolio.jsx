
import React, {useState} from "react"
import "./portfolio.css"
import Data from "./Data"

const Portfolio = () => {
    return (<>
        <ShowPort filterValue={""}/>
    </>)
}

const ShowPort = ({filterValue}) => {

    ///// Filter Projects /////
    let catList = (Data.map(data => data.category)
        .filter((value, index, self) => self.indexOf(value) === index)).sort()
    let sectionPort = catList;
    ///// Filter Projects /////

    const [items,setItems] = useState(Data)
    const [pages,setPages] = useState( Math.ceil((Data.length/3*10)/10)  )
    const [itemsNum,setItemsNum] = useState(Data.length)
    const [showDesc,setShowDesc] = useState(false)


    const filterItem = (category,page) =>{
        // console.log(category)
        // console.log(Data)

        let filter = []
        category === "All"  ? filter = Data : filter = Data.filter(item=>item.category === category)
        setItems(filter);
        setItemsNum(filter.length);
        let num = Math.ceil((filter.length/3*10)/10);
        
        console.log("temp",num)
        setPages(num)
        console.log("set",pages)
    }

    const [valueDesc,setValueDesc] = useState([])

    const toggleDesc = (toggle,uiDesc) => {
        if(uiDesc[0] != valueDesc[0]){
            setShowDesc(true)
            setValueDesc(uiDesc)
        }
        else if(uiDesc[0] === valueDesc[0]){
            setShowDesc(false)
            setValueDesc([])
        }
    }

    return (<>
    <section className="work container section" id="portfolio">
        <h2 className="section__title">Recent Work <span className="section__title"> &nbsp; {itemsNum}  </span> </h2>   
        <div className="work__filters">
            <span className="work__item" onClick={(e) => filterItem("All")}>All</span>
            {
            
            sectionPort.map(item=>
                    <span className="work__item" onClick={(e)=>filterItem(item)} value={item}>{item}</span>
            )}
            
        </div>

        <div className="description">

            <Desc showDesc={showDesc} valueDesc={valueDesc}/>
            <div className="work__container grid">
                {items.map((value) => {
                    const {id,image,title,category} = value;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image[0]} alt="" className="work__img" />
                                <div className="work__mask" onClick={(e)=>toggleDesc(showDesc,[value])}></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                        )
                    })}
            </div>
        </div>

        <PageTag page = {pages}/>
    
    </section>
</>)}

const Desc = ({showDesc,valueDesc}) =>{
    return (
        <div className = {`${showDesc ?"show-desc":"close-desc"}`} >
                {valueDesc? 
                valueDesc.map((item)=>
                    <> 
                        <div className="work__card__desc">
                            <img src={item.image[0]} alt="" className="work__img__desc" />
                            <PageTag page={item.image}/>
                            <h3 className="work__title__desc">{item.title}</h3>
                            <p className="work__title__desc2">{item.desc}</p>
                        </div>

                    </>
                )  :<></>}
            </div> 
    )
}

const PageTag = ({page}) =>{
const [showPages,setShowPage] =  useState('')

function createArray() {
    let aa =""
    for (let i = 1; i < page; i++) {
        aa += `<a href="#">${i}</a>`
    }
    console.log(aa)
    console.log("001",page)
    // setShowPage(aa)
}
createArray();


return (<>
    <div className="pageSection">
    <div className="pagination" dangerouslySetInnerHTML={{__html:showPages}}>
        {/* <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
        {() =>{
            return  <a href="#">&raquo;</a>
        }} */}
    </div>
    </div>
</>)
}    

const Description = () =>{
return (

    <div className="description">
        
    </div>
)
}

export default Portfolio