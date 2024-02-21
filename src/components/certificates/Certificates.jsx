
import React, {useState} from "react"
import "./certificates.css"
import Data from "./Data"

const Certificates = () => {

        
    const ShowPort = ({filterValue}) => {

        ///// Filter Projects /////
        let catList = (Data.map(data => data.category)
            .filter((value, index, self) => self.indexOf(value) === index)).sort()
        let sectionPort = catList;

        ///// Filter Projects /////

        const [items,setItems] = useState(Data)
        const [itemsNum,setItemsNum] = useState(Data.length)
    
        const filterItem = (category) =>{
            console.log(category)
            console.log(Data)

            const filter = Data.filter(item=>item.category === category)

            category === "All"  ? setItems(Data) : setItems(filter);
            category === "All"  ? setItemsNum(Data.length) : setItemsNum(filter.length);
        }



        return (<>
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Certificates <span className="section__title"> &nbsp; {itemsNum}  </span> </h2>   
            <div className="work__filters">
                <span className="work__item" onClick={(e) => filterItem("All")}>All</span>
                {
                
                sectionPort.map(item=>
                        <span className="work__item" id={item} onClick={(e)=>filterItem(item)} value={item}>{item}</span>
                )}
                
            </div>

            <div className="work__container grid">
                {items.map((value) => {
                    const {id,image,title,category} = value;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
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
        </section>
    </>)}

    return (<>
        <ShowPort filterValue={""}/>
    </>)
}

export default Certificates