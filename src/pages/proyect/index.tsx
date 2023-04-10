import ListProyect from './proyects.json';
import Card from '../../components/card';
import { Parallax } from 'react-scroll-parallax';
import style from './style.module.css'
const getRandomInt = (min: number, max: number): any => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const Proyect = () => {

    return (
        <div>
            {
                ListProyect.map((items: any, index: number) => {
                    return (
                        <Card key={index} items={items} />
                    )
                })
            }

        </div>
    )
}

export default Proyect; 