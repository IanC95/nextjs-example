import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {ChevronLeftIcon, ChevronRightIcon, CheckIcon} from '@primer/octicons-react'
import DoggoCard from '../components/doggoCard'

export default function Home() {
  const leftDoggo = {
    name: "Corgi",
    image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
    description: "Left Hand Doggo"
  }

  const rightDoggo = {
    name: "Daschund",
    image: "https://thehappypuppysite.com/wp-content/uploads/2018/10/dapple-dachshund-long.jpg",
    description: "Right Hand Doggo"
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-md-12 row"}>
              <div className={"col-md-4"}>
                <DoggoCard doggoCardProps={leftDoggo} />
              </div>
              <div className={"col-md-4"}>
                <div className={"card text-center"}>
                  <div className={"card-body align-self-center"}>
                    <h3 className={"card-text"}>
                      Choose a doggo
                    </h3>
                  </div>
                </div>
              </div>
              <div className={"col-md-4"}>
                <DoggoCard doggoCardProps={rightDoggo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
