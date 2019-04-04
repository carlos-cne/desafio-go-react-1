import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './styles.scss';
import carlos from './Assets/Avatar/carlos.jpeg';
import catia from './Assets/Avatar/catia.jpg';
import eduardo from './Assets/Avatar/eduardo.jpg';

class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        author: 'Carlos Gonçalves',
        time: 'há 5min',
        avatar: carlos,
        message:
          'A certificação de metodologias que nos auxiliam a lidar com a execução dos pontos do programa aponta para a melhoria das condições financeiras e administrativas exigidas. Por conseguinte, a consulta aos diversos militantes nos obriga à análise do retorno esperado a longo prazo. Por outro lado, a mobilidade dos capitais internacionais representa uma abertura para a melhoria de alternativas às soluções ortodoxas. No entanto, não podemos esquecer que a determinação clara de objetivos promove a alavancagem das condições inegavelmente apropriadas.',
      },
      {
        id: Math.random(),
        author: 'Cátia Gonçalves',
        time: 'há 25min',
        avatar: catia,
        message:
          'Acima de tudo, é fundamental ressaltar que o novo modelo estrutural aqui preconizado é uma das consequências das novas proposições. Não obstante, a adoção de políticas descentralizadoras assume importantes posições no estabelecimento das regras de conduta normativas. Desta maneira, a revolução dos costumes faz parte de um processo de gerenciamento dos modos de operação convencionais. Neste sentido, a necessidade de renovação processual obstaculiza a apreciação da importância das formas de ação.',
      },
      {
        id: Math.random(),
        author: 'Eduardo Gonçalves',
        time: 'há 1h',
        avatar: eduardo,
        message:
          'Caros amigos, o julgamento imparcial das eventualidades causa impacto indireto na reavaliação dos conhecimentos estratégicos para atingir a excelência.',
      },
    ],
  };

  loadPosts = () => {
    const { posts } = this.state;
    return posts.map(item => (
      <Post
        key={item.id}
        author={item.author}
        time={item.time}
        avatar={item.avatar}
        message={item.message}
      />
    ));
  };

  render() {
    return (
      <div className="main">
        <Header title="RocketBook" />
        {this.loadPosts()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
