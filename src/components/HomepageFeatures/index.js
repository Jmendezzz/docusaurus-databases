import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Mongo DB ',
    Svg: require('@site/static/img/MongoDB_Logo.svg').default,
    description: (
      <>
       En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, 
       MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, 
       haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.
      </>
    ),
    link: '/docs/intro'
  },
  {
    title: 'Cassandra DB',
    Svg: require('@site/static/img/Cassandra_Logo.svg').default,
    description: (
      <>
    Apache Cassandra se trata de un software NoSQL distribuido y basado en un modelo de almacenamiento «tabular»,
    de código abierto que está escrito en Java. Permite grandes volúmenes de datos en forma distribuida. 
    Por ejemplo, lo usa Twitter para su plataforma. Su objetivo principal es la escalabilidad lineal y la disponibilidad. 
    La arquitectura distribudores de Cassandra está basada en una serie de nodos iguales que se comunican con un protocolo P2P con lo que 
    la redundancia es máxima. Esta soportada por la Apache Software Fundation.
      </>
    ),
    link: '/docs/databases/cassandra'
  },
  {
    title: 'Redis DB',
    Svg: require('@site/static/img/Logo-redis.svg').default,
    description: (
      <>
      Redis es un motor de base de datos en memoria, basado en el almacenamiento en tablas de
      hashes pero que opcionalmente puede ser usada como una base de datos durable o persistente. 
      Está escrito en ANSI C por Salvatore Sanfilippo, quien es patrocinado por Redis Labs.
      </>
    ),
    link: '/docs/intro'
  },
];

function Feature({Svg, title, description,link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.flex }>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={link}>
            Ver más...
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
