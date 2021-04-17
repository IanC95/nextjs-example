import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import DoggoCard from '../components/doggoCard'
import { Shuffle } from 'react-feather'
import { getTwoDogs, competition } from '../lib/dogs'

export async function getServerSideProps(context) {
  const query = context.query;

  if ( query.winner && query.loser) {
    competition(query.winner, query.loser);
  }

  const twoDogs = await getTwoDogs();

  return {
    props: {
      twoDogs
    }
  }
}

export default function Home(props) {
  const leftDoggo = props.twoDogs[0];
  const rightDoggo = props.twoDogs[1];

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
                <DoggoCard doggoCardProps={leftDoggo} rotateCW={false} opponentId={rightDoggo.id} />
              </div>
              <div className={"col-md-4"}>
                <div className={"card text-center"}>
                  <div className={"card-body align-self-center"}>
                    <h3 className={"card-text"}>
                      Choose a doggo
                    </h3>
                    <Link href='#'>
                      <button type="button" className={"btn btn-danger btn-lg"}>
                        Shuffle
                        <Shuffle color="white" size={24} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"col-md-4"}>
                <DoggoCard doggoCardProps={rightDoggo} rotateCW={true} opponentId={leftDoggo.id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}