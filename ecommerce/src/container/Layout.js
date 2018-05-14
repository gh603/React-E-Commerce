
import {Container} from 'flux/utils'; 
import Layout from '../component/Layout/Layout'; 
import LayoutStore from '../data/store/LayoutStore'; 

function getStores(){
    return [LayoutStore]; 
}; 

function calculateState(){
    return {}; 
}; 

export default Container.createFunctional(Layout, getStores, calculateState); 