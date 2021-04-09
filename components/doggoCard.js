import styles from './doggoCard.module.css'
import Image from 'next/image'
import { Check } from 'react-feather'
import Link from 'next/link'

export default function DoggoCard({ doggoCardProps, rotateCW, opponentName }) {
    const rotateClassName = rotateCW ? styles.enlargeOnHoverCCW : styles.enlargeOnHoverCW

    return (

        <div className={"card text-center " + rotateClassName}>
            <div className={"card-img-top pt-1 px-1"}>
                <Image
                    layout='intrinsic'
                    width={640}
                    height={480}
                    objectFit="contain"
                    src={doggoCardProps.image}
                    className="rounded-3"
                    alt='A pic of a doggo'
                />
            </div>
            <div className={"card-body"}>
                <h1>{doggoCardProps.name}</h1>
                <p className={"card-text"}>{doggoCardProps.description}</p>
            </div>
            <div className={"card-footer"}>
                <Link href="#">
                    <button type="button" className={"btn btn-primary btn-lg stretched-link"}>
                        <Check color="white" size={24} />
                    </button>
                </Link>
            </div>
        </div>
    )
}
