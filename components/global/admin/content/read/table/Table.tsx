import React, { useEffect } from "react";
import Row from "./Row";

import { IDynamicProps } from "../../dynamic.interfaces";

import styles from "./Table.module.scss";

export default function Table( propsArray: IDynamicProps[]) {
  
  const dummyData: IDynamicProps[] = [
    {
      id: "1",
      technologies: "HTML SCSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg',
      gitUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
      liveUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
    },
    {
      id: "2",
      technologies: "HTML SCSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg',
      gitUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
      liveUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
    },
    {
      id: "3",
      technologies: "HTML SCSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg',
      gitUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
      liveUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
    },
    {
      id: "4",
      technologies: "HTML SCSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg',
      gitUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
      liveUrl: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
    },
  ];

  propsArray = dummyData;

  function genFieds() {
    return propsArray.map((e, i) => <Row key={i} {...e} />);
  }

  const genHeaders = () => (
    <tr>
      {Object.keys(propsArray[0]).map((header, i) => (
        <th key={i} className="field">
          {header}
        </th>
      ))}
    </tr>
  );

  return (
    <div className={styles.container}>
      <table>
        <tbody>
        {genHeaders()}
        {genFieds()}
        </tbody>
      </table>
    </div>
  );
}
