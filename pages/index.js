import Head from 'next/head'
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
        <div>
            <Head>
                <title>Home - Cangemi</title>
                <meta name='description' content='Site de estudo'/>
                <meta name='author' content='Pedro Cangemi'/>
            </Head>
            <Menu />
            Home
            
        </div>
    )
}

export default Home