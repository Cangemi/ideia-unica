import Head from 'next/head'

import Menu from '../components/Menu';

import {Jumbotron, Container} from 'reactstrap'

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
            <Jumbotron fluid className="servicos">
                <style>{'.servicos{background-color: #000}'}</style>
                <Container className="text-center">
                    <h1 className='display-4'>Serviços da Empresa</h1>
                    <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default Home