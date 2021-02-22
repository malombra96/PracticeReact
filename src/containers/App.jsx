import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading ...</h1>:(
        <div className = "App">
            <Header />
            <Search />
            {initialState.mylist.length > 0  && (
                <Categories title = "lista 1">
                    <Carrousel>
                        <CarrouselItem />
                    </Carrousel>
               </Categories>)
            }
           
            <Categories title = "lista 2">
                <Carrousel>
                    {initialState.trends.map(item =>
                        <CarrouselItem key={item.id} {...item} />
                    )}
                </Carrousel>
            </Categories>
            <Categories title = "lista 3">
                <Carrousel>
                    {initialState.originals.map(item =>
                        <CarrouselItem key={item.id} {...item} />
                    )}
                </Carrousel>
            </Categories>
            <Footer />
        </div>
);
}

export default App;