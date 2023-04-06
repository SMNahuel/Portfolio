import ListProyect from './proyects.json';
import Card from '../../components/card';
const Proyect = () =>{

    return(
        <div>
            {
                ListProyect.map((items: any, index: number)=>{
                    return(
                        <Card items={items}/>
                    )    
                })
            }
        </div>
    )
}

export default Proyect; 