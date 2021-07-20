import React from 'react'
import Layout from '../../components/Layout'
import {  useSelector} from 'react-redux'
//import { getlist } from '../../actions';

const Home = () => {
     const List = useSelector(state => state.List);
     // const dispatch = useDispatch();
    //    useEffect(() => {
    //        dispatch(getlist());
    //    }, [dispatch]);

    const renderListing = (listing) => {
        let myListing = [];
        for (let list of listing) {
            myListing.push(
                <div key={list.id} className="col-md-3  mt-5" style={{border:"1px solid black", width:"400px",  marginRight:"5px"}} >
                      <div className="row">
                    <div className="col-6">
                    <ul className="list-unstyled gx-3">
                        <li><span>Duration:</span></li>
                        <li><span>from:</span> </li>
                        <li><span>to:</span></li>
                        <li><span>direction:</span> </li>
                        <li><span>call_type:</span> </li>
                        <li><span>via:</span></li>
                        
                    </ul> 
                    </div>
                    <div className="col-6">
                    <ul className="list-unstyled gx-3">
                        <li>
                        <span>{list.duration}</span>
                        
                        </li>
                        <li><span>{list.from}</span></li>
                        <li><span>{list.to}</span></li>
                        <li><span>{list.direction}</span></li>
                        <li><span>{list.call_type}</span></li>
                        <li><span>{list.via}</span></li>
                       
                       {/* <li> {list.notes.length > 0 ? (<ul>{renderListing(list.notes)}</ul>) : null}</li> */}
                          
                    </ul> 
                   
                        
                    </div>
                    
                    </div>
                    
 
                </div>
            )
        }
        return myListing;
    }
    return (
        <Layout>
         

         <div className="container"> 
            <div className="row">
                 {renderListing(List.listing)}
            </div>
             
         </div>
        </Layout>
    )
}

export default Home
