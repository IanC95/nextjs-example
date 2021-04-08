import styles from './doggoCard.module.css'
import Image from 'next/image'
import { Check } from 'react-feather'

export default function DoggoCard({ doggoCardProps }) {
    return (
        <div className={"card text-center " + styles.enlargeOnHover}>
            <div className={"card-body"}>
                {/**
                <Image 
                layout='fill'
                src={ doggoCardProps.image }
                alt='A pic of a doggo'
                className={"card-img-top rounded"}
                />
                */}

                <img alt="Bootstrap Image Preview" src={ doggoCardProps.image } className={"card-img-top rounded"} />
                <h1>{ doggoCardProps.name }</h1>
                <p className={"card-text"}>{ doggoCardProps.description }</p>
            </div>
            <div className={"card-footer"}>
                <button type="button" className={"btn btn-primary btn-lg stretched-link"}>
                    <Check color="white" size={24} />
                </button>
            </div>
        </div>
    )
}
