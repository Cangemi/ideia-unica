import Head from 'next/head'

import Menu from '../components/Menu';

import { Jumbotron, Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);




function Home() {
    return (
        <div>
            <Head>
                <title>Home - Cangemi</title>
                <meta name='description' content='Site de estudo' />
                <meta name='author' content='Pedro Cangemi' />
            </Head>
            <Menu />
            <Jumbotron fluid className="servicos-gerais" id="servicos">

                <Container className="text-center">
                    <div>
                        <h1 className='display-4'>Serviços da Empresa</h1>
                        <p className='lead pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon='dolly'/>
                            </div>

                            <h2 className="mt-4 mb-4">Serviço 1</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                        </div>
                        <div class="col-lg-4">
                           <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon='project-diagram'/>
                            </div>

                            <h2 className="mt-4 mb-4">Serviço 2</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>

                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon='dolly-flatbed'/>
                            </div>
                            <h2 className="mt-4 mb-4">Serviço 3</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

        </div>
    )
}

export default Home