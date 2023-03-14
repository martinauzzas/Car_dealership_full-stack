import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseYear, chooseInfos, choosePrice } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api'; 

// Two interfaces
interface ContactFormProps {
    id?: string; //  the ? will allow to be optional data pieces
    data?: {}
}

interface CarState {
    make: string;
    model: string;
    year: string;
    infos: string;
    price: string;
}

export const ContactForm = (props: ContactFormProps ) => {
    const dispatch = useDispatch(); // This is a redux-specific hook that updates the store
    const store = useStore(); // In order to use the redux store with the variables 
    const model = useSelector<CarState>( state => state.model );
    const { register, handleSubmit } = useForm({ })

    const onSubmit = ( data:any, event:any ) => {
        console.log(props.id)
        if ( props.id! ){
            server_calls.update(props.id!, data);
            console.log(`Updated:${ data } ${ props.id }`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state/redux store
            dispatch( chooseModel(data.model));
            dispatch( chooseMake(data.make));
            dispatch( chooseYear(data.year));
            dispatch( chooseInfos(data.infos));
            dispatch( choosePrice(data.price));
            server_calls.create(store.getState());
            setTimeout( () => { window.location.reload() }, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = { handleSubmit(onSubmit) }>
                <div>
                    <label htmlFor= "model">Model</label>
                    <Input { ...register('model') } name="model" placeholder= "Model" />
                </div>
                <div>
                    <label htmlFor= "make">Make</label>
                    <Input { ...register('make') } name="make" placeholder= "Make" />
                </div>
                <div>
                    <label htmlFor= "year">Year</label>
                    <Input { ...register('year') } name="year" placeholder= "Year" />
                </div>
                <div>
                    <label htmlFor= "infos">Infos</label>
                    <Input { ...register('infos') } name="infos" placeholder= "Infos" />
                </div>
                <div>
                    <label htmlFor= "price">Price</label>
                    <Input { ...register('price') } name="price" placeholder= "Price" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}